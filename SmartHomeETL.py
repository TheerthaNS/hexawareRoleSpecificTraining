# Databricks notebook source
df = spark.read.csv(
    "/Volumes/smarthomedatabricks/default/energydata/energy_usage.csv",
    header=True,
    inferSchema=True
)

display(df)

from pyspark.sql.functions import sum

daily_summary = df.groupBy("room_id") \
    .agg(sum("energy_kwh").alias("daily_energy"))

display(daily_summary)

daily_summary.write.format("delta") \
    .mode("overwrite") \
    .save("/Volumes/smarthomedatabricks/default/energydata/daily_energy")

print("ETL Pipeline Completed")

# COMMAND ----------

