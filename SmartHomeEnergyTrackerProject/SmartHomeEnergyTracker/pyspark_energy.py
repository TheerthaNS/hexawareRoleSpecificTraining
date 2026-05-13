import os
import pandas as pd

from pyspark.sql import SparkSession
from pyspark.sql.functions import sum, col

os.environ["PYSPARK_PYTHON"] = "python"

spark = SparkSession.builder \
    .appName("SmartHomeEnergy") \
    .master("local[*]") \
    .getOrCreate()

df = spark.read.csv(
    "energy_usage.csv",
    header=True,
    inferSchema=True
)

print("Original Dataset")
df.show()

device_usage = df.groupBy("device_id") \
    .agg(sum("energy_kwh").alias("total_usage"))

print("Device-wise Total Usage")
device_usage.show()

top_devices = device_usage.orderBy(
    col("total_usage").desc()
)

print("Top Energy Consuming Devices")
top_devices.show()

pandas_df = top_devices.toPandas()

pandas_df.to_csv(
    "top_devices_output.csv",
    index=False
)

print("CSV exported successfully")

spark.stop()