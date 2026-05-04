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
"visit_id",
"patient_name",
"city",
"department",
"consultation_fee",
"tests_count"
]

df = spark.createDataFrame(data, columns)
df.show()

# COMMAND ----------

from pyspark.sql.functions import col
df2 = df.withColumn("total_bill", col("consultation_fee") * col("tests_count"))
df2.show()

# COMMAND ----------

high_value = df2.filter(col("total_bill") > 5000)
high_value.show()

# COMMAND ----------

from pyspark.sql.functions import sum

agg_df = df2.groupBy("department").agg(sum("total_bill").alias("total_revenue"))
agg_df.show()

# COMMAND ----------

agg_df.orderBy(col("total_revenue").desc()).show()

# COMMAND ----------

df2.createOrReplaceTempView("patients")

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM patients WHERE department = 'Cardiology';

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT city, SUM(total_bill) AS revenue FROM patients GROUP BY city;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT patient_name, total_bill FROM patients ORDER BY total_bill DESC LIMIT 3;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT department, COUNT(*) FROM patients GROUP BY department;

# COMMAND ----------

df2.write.format("delta").mode("overwrite").save("/tmp/hospital_delta")

# COMMAND ----------

delta_df = spark.read.format("delta").load("/tmp/hospital_delta")
delta_df.show()

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO delta.`/tmp/hospital_delta`
# MAGIC VALUES (109,'New Patient','Pune','Cardiology',4000,2,8000);

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE delta.`/tmp/hospital_delta`
# MAGIC SET consultation_fee = 6000
# MAGIC WHERE visit_id = 101;

# COMMAND ----------

# MAGIC %sql
# MAGIC DELETE FROM delta.`/tmp/hospital_delta`
# MAGIC WHERE visit_id = 103;

# COMMAND ----------

new_data = [(101,"Arjun Reddy","Hyderabad","Cardiology",8000,1,8000)]
new_df = spark.createDataFrame(new_data, df2.columns)
new_df.createOrReplaceTempView("updates")

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO delta.`/tmp/hospital_delta` AS target
# MAGIC USING updates AS source
# MAGIC ON target.visit_id = source.visit_id
# MAGIC WHEN MATCHED THEN UPDATE SET *
# MAGIC WHEN NOT MATCHED THEN INSERT *

# COMMAND ----------

# MAGIC %sql
# MAGIC DESCRIBE HISTORY delta.`/tmp/hospital_delta`;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM delta.`/tmp/hospital_delta` VERSION AS OF 0;

# COMMAND ----------

# MAGIC %sql
# MAGIC VACUUM delta.`/tmp/hospital_delta` RETAIN 168 HOURS DRY RUN;

# COMMAND ----------

df2.write.format("parquet").mode("overwrite").save("/tmp/parquet_data")

# COMMAND ----------

spark.read.format("parquet").load("/tmp/parquet_data") \
.write.format("delta").save("/tmp/converted_delta")

# COMMAND ----------

updates = [
(110,"Test User","Delhi","Cardiology",5000,1,5000)
]

updates_df = spark.createDataFrame(updates, df2.columns)
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

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE CATALOG hospital_catalog;
# MAGIC CREATE SCHEMA hospital_catalog.schema1;
# MAGIC
# MAGIC CREATE TABLE hospital_catalog.schema1.patients AS
# MAGIC SELECT * FROM delta.`/tmp/hospital_delta`;

# COMMAND ----------

# MAGIC %sql
# MAGIC SHOW TABLES;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE TABLE department_summary AS
# MAGIC SELECT department, COUNT(*) AS total_patients
# MAGIC FROM delta.`/tmp/hospital_delta`
# MAGIC GROUP BY department;

# COMMAND ----------

# MAGIC %sql
# MAGIC DESCRIBE HISTORY delta.`/tmp/hospital_delta`;

# COMMAND ----------

GRANT SELECT ON TABLE department_summary TO `users`;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM system.access.audit;

# COMMAND ----------

