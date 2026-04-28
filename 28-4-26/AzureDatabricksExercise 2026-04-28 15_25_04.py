# Databricks notebook source
from pyspark.sql import SparkSession
from pyspark.sql.functions import *

# COMMAND ----------

data = [
(101,"Olivia Bennett","London","Engineering",92000,5),
(102,"Ethan Walker","New York","Marketing",75000,4),
(103,"Sophia Turner","Toronto","Finance",88000,6),
(104,"Liam Carter","Sydney","Engineering",97000,7),
(105,"Mia Collins","Berlin","HR",69000,3),
(106,"Noah Parker","Paris","Marketing",72000,4),
(107,"Ava Reed","Tokyo","Finance",91000,6),
(108,"Lucas Hayes","Madrid","Engineering",85000,5),
(109,"Isabella Cruz","Rome","Finance",93000,8),
(110,"Mason Gray","Chicago","Engineering",89000,6),
(111,"Charlotte Fox","Dublin","HR",67000,3),
(112,"Benjamin Stone","Boston","Marketing",76000,4),
(113,"Amelia Knight","Amsterdam","Engineering",94000,7),
(114,"James Holt","San Francisco","Finance",99000,9),
(115,"Harper Lane","Melbourne","HR",64000,2),
(116,"Alexander West","Seattle","Engineering",96000,7),
(117,"Evelyn Scott","Vancouver","Marketing",74000,4),
(118,"Henry Brooks","Zurich","Finance",97000,8),
(119,"Ella Simmons","Stockholm","Engineering",88000,6),
(120,"Daniel Ward","Singapore","Marketing",77000,5)
]

columns = ["emp_id","name","city","department","salary","experience"]

# COMMAND ----------

df = spark.createDataFrame(data, columns)

# COMMAND ----------

display(df)

# COMMAND ----------

display(df)
df.printSchema()
df.count()
df.show(5)
df.tail(5)
df.columns
df.select("name","salary").show()
df.select("name","department","experience").show()
df.select("department").distinct().show()
df.select("city").distinct().show()

# COMMAND ----------

df.filter(df.salary > 90000).show()
df.filter(df.department == "Engineering").show()
df.filter(df.department == "Marketing").show()
df.filter(df.experience > 6).show()
df.filter(df.salary < 70000).show()
df.filter(df.city == "London").show()
df.filter((df.department == "Finance") & (df.salary > 90000)).show()
df.filter((df.department == "Engineering") & (df.experience > 5)).show()
df.filter(df.salary.between(85000,95000)).show()
df.filter(df.experience < 4).show()

# COMMAND ----------

df.orderBy("salary").show()
df.orderBy(df.salary.desc()).show()
df.orderBy("experience").show()
df.orderBy(df.experience.desc()).show()
df.orderBy("department").show()
df.orderBy("city").show()
df.orderBy("department","salary").show()
df.orderBy(df.salary.desc()).show(5)
df.orderBy("salary").show(5)
df.orderBy(df.experience.desc()).show(3)

# COMMAND ----------

df = df.withColumn("annual_salary", df.salary * 12)
df = df.withColumn("salary_in_thousands", df.salary / 1000)
df = df.withColumn("experience_double", df.experience * 2)
df = df.withColumn("company", lit("GlobalTech"))
df = df.withColumn("salary_after_bonus", df.salary + 5000)
df = df.withColumn("salary_after_tax", df.salary * 0.9)
df = df.withColumn("experience_next_year", df.experience + 1)
df = df.withColumn("salary_per_year_of_experience", df.salary / df.experience)
df = df.withColumnRenamed("salary", "monthly_salary")
df = df.drop("experience_double")
display(df)

# COMMAND ----------

df.select(sum("monthly_salary")).show()
df.select(avg("monthly_salary")).show()
df.select(max("monthly_salary")).show()
df.select(min("monthly_salary")).show()
df.count()
df.groupBy("department").count().show()
df.groupBy("department").avg("monthly_salary").show()
df.groupBy("department").max("monthly_salary").show()
df.groupBy("department").min("monthly_salary").show()
df.groupBy("department").sum("monthly_salary").show()

# COMMAND ----------

df.groupBy("city").count().show()
df.groupBy("department").avg("experience").show()
df.groupBy("department").max("experience").show()
df.groupBy("city").sum("monthly_salary").show()
df.groupBy("city").avg("monthly_salary").show()
df.groupBy("city").max("monthly_salary").show()
df.groupBy("city").min("monthly_salary").show()
df.groupBy("city").avg("experience").show()
df.groupBy("department","city").count().show()
df.groupBy("department","city").sum("monthly_salary").show()

# COMMAND ----------

df = df.dropDuplicates()
df.select([sum(col(c).isNull().cast("int")).alias(c) for c in df.columns]).show()
df = df.fillna({"monthly_salary":0})
df = df.dropna(subset=["department"])
avg_exp = df.select(avg("experience")).collect()[0][0]
df = df.fillna({"experience": avg_exp})
df.count()
df = df.fillna({"department":"Unknown"})
df = df.filter(df.monthly_salary >= 60000)
df = df.filter(df.experience >= 2)
display(df)