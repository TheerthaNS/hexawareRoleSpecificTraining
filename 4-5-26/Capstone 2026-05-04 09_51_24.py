# Databricks notebook source
data = [
(101,"Arjun Reddy","Hyderabad","Cardiology",5000,1),
(102,"Sneha Kapoor","Delhi","Orthopedics",3000,2),
(103,"Rahul Sharma","Mumbai","Dermatology",1500,1),
(104,"Priya Nair","Bangalore","Cardiology",5000,2),
(105,"Vikram Singh","Chennai","Neurology",7000,1),
(106,"Ananya Das","Kolkata","Orthopedics",3000,3),
(107,"Karan Patel","Ahmedabad","Cardiology",5000,1),
(108,"Meera Iyer","Bangalore","Dermatology",1500,2)
]

columns = [
"visit_id","patient_name","city",
"department","consultation_fee","tests_count"
]

# COMMAND ----------

bronze_df = spark.createDataFrame(data, columns)
bronze_df.write.format("delta").mode("overwrite").save("/tmp/bronze")

# COMMAND ----------

from pyspark.sql.functions import col

silver_df = bronze_df.withColumn(
    "total_bill",
    col("consultation_fee") * col("tests_count")
)

silver_df.write.format("delta").mode("overwrite").save("/tmp/silver")

# COMMAND ----------

from pyspark.sql.functions import sum

gold_df = silver_df.groupBy("department") \
    .agg(sum("total_bill").alias("total_revenue"))

gold_df.write.format("delta").mode("overwrite").save("/tmp/gold")

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO delta.`/tmp/hospital_delta` t
# MAGIC USING updates2 s
# MAGIC ON t.visit_id = s.visit_id
# MAGIC WHEN MATCHED THEN UPDATE SET *
# MAGIC WHEN NOT MATCHED THEN INSERT *

# COMMAND ----------

updates = [
(110,"Test User","Delhi","Cardiology",5000,1,5000)
]

updates_df = spark.createDataFrame(updates, [
"visit_id","patient_name","city",
"department","consultation_fee","tests_count","total_bill"
])

updates_df.createOrReplaceTempView("updates2")

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO delta.`/tmp/hospital_delta` t
# MAGIC USING updates2 s
# MAGIC ON t.visit_id = s.visit_id
# MAGIC WHEN MATCHED THEN UPDATE SET *
# MAGIC WHEN NOT MATCHED THEN INSERT *

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE CATALOG hospital_catalog;
# MAGIC CREATE SCHEMA hospital_catalog.schema1;