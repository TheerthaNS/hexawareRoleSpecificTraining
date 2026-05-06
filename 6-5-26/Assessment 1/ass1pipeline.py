import dlt
from pyspark.sql.functions import *

@dlt.table(
    name="bronze_patient_visits",
    comment="Raw patient visit data"
)
def bronze_patient_visits():

    data = [
        (1,"Hyderabad","Cardiology",5200),
        (2,"Bengaluru","Dermatology",2800),
        (3,"Mumbai","Orthopedics",7500),
        (4,"Chennai","Neurology",8200),
        (5,"Delhi","Pediatrics",-100)
    ]

    columns = [
        "visit_id",
        "city",
        "specialization",
        "bill_amount"
    ]

    df = spark.createDataFrame(data, columns)

    return df

@dlt.table(
    name="silver_patient_visits",
    comment="Cleaned patient visit data with total bill"
)
def silver_patient_visits():

    df = dlt.read("bronze_patient_visits")

    cleaned_df = df.filter(
        col("bill_amount") > 0
    )

    transformed_df = cleaned_df.withColumn(
        "total_bill",
        col("bill_amount") + 500
    )

    return transformed_df

@dlt.table(
    name="gold_city_revenue",
    comment="Revenue aggregated by city"
)
def gold_city_revenue():

    df = dlt.read("silver_patient_visits")

    city_revenue_df = df.groupBy("city").agg(
        sum("total_bill").alias("total_revenue")
    )

    return city_revenue_df

@dlt.table(
    name="gold_specialization_revenue",
    comment="Revenue aggregated by specialization"
)
def gold_specialization_revenue():

    df = dlt.read("silver_patient_visits")

    specialization_revenue_df = df.groupBy(
        "specialization"
    ).agg(
        sum("total_bill").alias("total_revenue")
    )

    return specialization_revenue_df