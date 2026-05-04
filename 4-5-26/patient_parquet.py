# Databricks notebook source
data = [
(101,"Arjun Reddy","Hyderabad","Cardiology",5000),
(102,"Sneha Kapoor","Delhi","Orthopedics",3000),
(103,"Rahul Sharma","Mumbai","Dermatology",1500),
(104,"Priya Nair","Bangalore","Cardiology",5000),
(105,"Vikram Singh","Chennai","Neurology",7000)
]

columns = ["visit_id","patient_name","city","department","consultation_fee"]

df = spark.createDataFrame(data, columns)
display(df)

# COMMAND ----------

df.write \
  .mode("overwrite") \
  .parquet("/tmp/patient_parquet")

# COMMAND ----------

display(dbutils.fs.ls("/tmp/"))

# COMMAND ----------

display(dbutils.fs.ls("/tmp/patient_parquet"))

# COMMAND ----------

parquet_df = spark.read.parquet("/tmp/patient_parquet")
display(parquet_df)

# COMMAND ----------

parquet_df.printSchema()

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet") \
  .select("patient_name","city") \
  .show()

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet") \
  .filter("consultation_fee > 3000") \
  .show()

# COMMAND ----------

df.write \
  .mode("overwrite") \
  .partitionBy("city") \
  .parquet("/tmp/patient_parquet_partitioned")

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet_partitioned").show()

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet_partitioned") \
  .filter("city = 'Hyderabad'") \
  .show()

# COMMAND ----------

new_data = [
(106,"Ananya Das","Kolkata","Orthopedics",3000)
]

new_df = spark.createDataFrame(new_data, columns)

new_df.write \
  .mode("append") \
  .parquet("/tmp/patient_parquet")

# COMMAND ----------

df.write \
  .mode("overwrite") \
  .parquet("/tmp/patient_parquet")

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TABLE patient_parquet_table
# MAGIC USING PARQUET
# MAGIC LOCATION '/tmp/patient_parquet';

# COMMAND ----------

# MAGIC %sql
# MAGIC DROP TABLE IF EXISTS patient_parquet_table;
# MAGIC
# MAGIC CREATE TABLE patient_parquet_table
# MAGIC USING PARQUET
# MAGIC LOCATION 'dbfs:/tmp/patient_parquet';

# COMMAND ----------

# MAGIC %sql
# MAGIC DROP TABLE IF EXISTS patient_parquet_table;
# MAGIC
# MAGIC CREATE TABLE patient_parquet_table
# MAGIC USING PARQUET
# MAGIC AS SELECT * FROM parquet.`dbfs:/tmp/patient_parquet`;

# COMMAND ----------

# MAGIC %sql
# MAGIC DROP TABLE IF EXISTS patient_parquet_table;
# MAGIC
# MAGIC CREATE TABLE patient_parquet_table
# MAGIC USING DELTA
# MAGIC AS SELECT * FROM parquet.`dbfs:/tmp/patient_parquet`;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM patient_parquet_table;

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE patient_parquet_table
# MAGIC SET consultation_fee = 6000
# MAGIC WHERE visit_id = 101;

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet") \
  .filter("consultation_fee > 3000") \
  .show()

# COMMAND ----------

df.write.mode("overwrite") \
  .partitionBy("city") \
  .parquet("/tmp/patient_parquet_partitioned")

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet_partitioned") \
  .filter("city = 'Hyderabad'") \
  .show()

# COMMAND ----------

spark.read.parquet("/tmp/patient_parquet_partitioned") \
  .filter("city = 'Hyderabad'") \
  .show()

# COMMAND ----------

new_data = [(106,"Ananya Das","Kolkata","Orthopedics",3000)]
new_df = spark.createDataFrame(new_data, columns)

new_df.write.mode("append").parquet("/tmp/patient_parquet")