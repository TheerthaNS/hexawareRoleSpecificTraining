import dlt
from pyspark.sql.functions import *

data = [
(101,"Arjun Reddy","Hyderabad","Cardiology",5000,1),
(102,"Sneha Kapoor","Delhi","Orthopedics",3000,2),
(103,"Rahul Sharma","Mumbai","Dermatology",1500,1),
(104,"Priya Nair","Bangalore","Cardiology",5000,2)
]

columns = [
"visit_id","patient_name","city",
"department","consultation_fee","tests_count"
]

@dlt.table
def bronze():
    return spark.createDataFrame(data, columns)

@dlt.table
def silver():
    return dlt.read("bronze") \
        .withColumn("total_bill", col("consultation_fee") * col("tests_count"))

@dlt.table
def gold():
    return dlt.read("silver") \
        .groupBy("department") \
        .agg(sum("total_bill").alias("total_revenue"))