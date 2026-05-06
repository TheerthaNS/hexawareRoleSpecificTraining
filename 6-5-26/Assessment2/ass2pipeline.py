import dlt
from pyspark.sql.functions import *

@dlt.table(
    name="bronze_orders"
)
def bronze_orders():

    data = [
        (301,101,201,"2024-04-01",20,"Delivered",24000),
        (302,102,201,"2024-04-01",35,"Delivered",31500),
        (303,111,204,"2024-04-02",2,"Delivered",90000),
        (304,114,208,"2024-04-02",5,"Pending",125000),
        (305,115,204,"2024-04-03",3,"Delivered",186000)
    ]

    columns = [
        "order_id",
        "product_id",
        "supplier_id",
        "order_date",
        "quantity",
        "order_status",
        "bill_amount"
    ]

    return spark.createDataFrame(data, columns)

@dlt.table(
    name="silver_orders"
)
def silver_orders():

    df = dlt.read("bronze_orders")

    return df.filter(col("quantity") > 0) \
             .withColumn(
                 "total_revenue",
                 col("bill_amount")
             )

@dlt.table(
    name="gold_city_revenue"
)
def gold_city_revenue():

    df = dlt.read("silver_orders")

    return df.groupBy("supplier_id") \
             .agg(
                 sum("total_revenue")
                 .alias("city_revenue")
             )

@dlt.table(
    name="gold_category_revenue"
)
def gold_category_revenue():

    df = dlt.read("silver_orders")

    return df.groupBy("order_status") \
             .agg(
                 sum("total_revenue")
                 .alias("category_revenue")
             )