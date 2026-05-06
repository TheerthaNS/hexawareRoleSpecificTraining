# Databricks notebook source
products_data = [
(101,"Rice Bag","Groceries","Hyderabad",1200,50),
(102,"Wheat Flour","Groceries","Bengaluru",900,80),
(103,"Sunflower Oil","Groceries","Mumbai",1800,40),
(104,"Milk Pack","Dairy","Chennai",60,200),
(105,"Cheese Block","Dairy","Delhi",450,70),
(106,"Soap","Personal Care","Kolkata",120,300),
(107,"Shampoo","Personal Care","Pune",320,150),
(108,"Toothpaste","Personal Care","Ahmedabad",90,250),
(109,"Notebook","Stationery","Hyderabad",75,500),
(110,"Pen Pack","Stationery","Mumbai",110,400),
(111,"LED TV","Electronics","Delhi",45000,15),
(112,"Refrigerator","Electronics","Chennai",38000,10),
(113,"Washing Machine","Electronics","Bengaluru",29000,12),
(114,"Mobile Phone","Electronics","Hyderabad",25000,35),
(115,"Laptop","Electronics","Pune",62000,18),
(116,"Air Conditioner","Electronics","Mumbai",42000,9),
(117,"Mixer Grinder","Home Appliances","Kolkata",3500,45),
(118,"Water Purifier","Home Appliances","Delhi",12000,20),
(119,"Ceiling Fan","Home Appliances","Ahmedabad",2800,60),
(120,"Gas Stove","Home Appliances","Chennai",5500,25)
]

products_columns = [
"product_id",
"product_name",
"category",
"warehouse_city",
"price",
"stock_quantity"
]

products_df = spark.createDataFrame(products_data, products_columns)

# COMMAND ----------

suppliers_data = [
(201,"Reddy Traders","Hyderabad","Groceries"),
(202,"Fresh Dairy Ltd","Chennai","Dairy"),
(203,"CarePlus Suppliers","Mumbai","Personal Care"),
(204,"Elite Electronics","Delhi","Electronics"),
(205,"OfficeKart","Bengaluru","Stationery"),
(206,"HomeNeeds Pvt Ltd","Pune","Home Appliances"),
(207,"National Grocers","Ahmedabad","Groceries"),
(208,"Smart Electronics","Kolkata","Electronics"),
(209,"Daily Essentials","Hyderabad","Personal Care"),
(210,"Kitchen World","Chennai","Home Appliances")
]

suppliers_columns = [
"supplier_id",
"supplier_name",
"supplier_city",
"specialization"
]

suppliers_df = spark.createDataFrame(suppliers_data, suppliers_columns)

# COMMAND ----------

orders_data = [
(301,101,201,"2024-04-01",20,"Delivered"),
(302,102,201,"2024-04-01",35,"Delivered"),
(303,111,204,"2024-04-02",2,"Delivered"),
(304,114,208,"2024-04-02",5,"Pending"),
(305,115,204,"2024-04-03",3,"Delivered"),
(306,104,202,"2024-04-03",50,"Delivered"),
(307,105,202,"2024-04-04",18,"Cancelled"),
(308,117,206,"2024-04-04",7,"Delivered"),
(309,118,210,"2024-04-05",4,"Pending"),
(310,119,206,"2024-04-05",12,"Delivered"),
(311,120,210,"2024-04-06",6,"Delivered"),
(312,113,204,"2024-04-06",4,"Delivered"),
(313,116,208,"2024-04-07",2,"Pending"),
(314,109,205,"2024-04-07",80,"Delivered"),
(315,110,205,"2024-04-08",120,"Delivered"),
(316,106,203,"2024-04-08",60,"Cancelled"),
(317,107,209,"2024-04-09",25,"Delivered"),
(318,108,203,"2024-04-09",40,"Delivered"),
(319,112,208,"2024-04-10",2,"Pending"),
(320,101,207,"2024-04-10",15,"Delivered")
]

orders_columns = [
"order_id",
"product_id",
"supplier_id",
"order_date",
"quantity",
"order_status"
]

orders_df = spark.createDataFrame(orders_data, orders_columns)

# COMMAND ----------

payments_data = [
(401,301,24000,"UPI","Paid"),
(402,302,31500,"Credit Card","Paid"),
(403,303,90000,"Bank Transfer","Paid"),
(404,304,125000,"UPI","Pending"),
(405,305,186000,"Bank Transfer","Paid"),
(406,306,3000,"Cash","Paid"),
(407,307,8100,"UPI","Cancelled"),
(408,308,24500,"Debit Card","Paid"),
(409,309,48000,"UPI","Pending"),
(410,310,33600,"Cash","Paid"),
(411,311,33000,"Credit Card","Paid"),
(412,312,116000,"Bank Transfer","Paid"),
(413,313,84000,"UPI","Pending"),
(414,314,6000,"Cash","Paid"),
(415,315,13200,"UPI","Paid"),
(416,316,7200,"Cash","Cancelled"),
(417,317,8000,"UPI","Paid"),
(418,318,3600,"Debit Card","Paid"),
(419,319,76000,"Bank Transfer","Pending"),
(420,320,18000,"UPI","Paid")
]

payments_columns = [
"payment_id",
"order_id",
"bill_amount",
"payment_mode",
"payment_status"
]

payments_df = spark.createDataFrame(payments_data, payments_columns)


# COMMAND ----------

products_df.show()
suppliers_df.show()
orders_df.show()
payments_df.show()

# COMMAND ----------

products_df.printSchema()
suppliers_df.printSchema()
orders_df.printSchema()
payments_df.printSchema()

# COMMAND ----------

products_df.count()
suppliers_df.count()
orders_df.count()
payments_df.count()
products_df.show(10)

# COMMAND ----------

products_df.select(
    "product_name",
    "category",
    "stock_quantity"
).show()

suppliers_df.filter(
    suppliers_df.supplier_city.isin("Hyderabad","Chennai")
).show()

# COMMAND ----------

orders_df.filter(
    orders_df.order_status == "Delivered"
).show()

orders_df.filter(
    orders_df.order_status == "Pending"
).show()

# COMMAND ----------

products_df.filter(
    products_df.category == "Electronics"
).show()

products_df.filter(
    products_df.stock_quantity < 20
).show()

# COMMAND ----------

from pyspark.sql.functions import *

# COMMAND ----------

orders_df = orders_df.withColumn(
    "order_date",
    to_date("order_date")
)

# COMMAND ----------

orders_join_df = orders_df.join(
    products_df,
    "product_id"
)

orders_join_df = orders_join_df.withColumn(
    "total_order_value",
    col("quantity") * col("price")
)

products_df = products_df.withColumn(
    "stock_status",
    when(col("stock_quantity") < 20, "Low Stock")
    .otherwise("Available")
)

# COMMAND ----------

orders_df = orders_df.withColumn(
    "order_priority",
    when(col("quantity") >= 50, "High")
    .when(col("quantity") >= 20, "Medium")
    .otherwise("Low")
)

products_df = products_df.withColumn(
    "expensive_product_flag",
    when(col("price") > 30000, "Yes")
    .otherwise("No")
)

# COMMAND ----------

products_df = products_df.withColumn(
    "category",
    upper(col("category"))
)

products_df = products_df.withColumnRenamed(
    "warehouse_city",
    "inventory_city"
)

# COMMAND ----------

products_df = products_df.withColumn(
    "inventory_value",
    col("price") * col("stock_quantity")
)

products_df = products_df.drop("stock_status")

# COMMAND ----------

products_df = products_df.withColumn(
    "low_stock_flag",
    when(col("stock_quantity") < 20, "YES")
    .otherwise("NO")
)

# COMMAND ----------

product_orders_df = products_df.join(
    orders_df,
    "product_id"
)

orders_suppliers_df = orders_df.join(
    suppliers_df,
    "supplier_id"
)

# COMMAND ----------

orders_payments_df = orders_df.join(
    payments_df,
    "order_id"
)

final_df = orders_df \
    .join(products_df, "product_id") \
    .join(suppliers_df, "supplier_id") \
    .join(payments_df, "order_id")

# COMMAND ----------

final_df.select(
    "product_name",
    "supplier_name",
    "quantity",
    "bill_amount"
).show()

suppliers_df.select(
    "supplier_name",
    "supplier_city"
).distinct().show()

# COMMAND ----------

final_df.filter(
    (col("order_status") == "Delivered") &
    (col("payment_status") == "Paid")
).show()

final_df.filter(
    (col("order_status") == "Pending") &
    (col("payment_status") == "Pending")
).show()

# COMMAND ----------

final_df.filter(
    (col("order_status") == "Cancelled") &
    (col("payment_status") == "Cancelled")
).show()

final_df.groupBy("product_name") \
    .count() \
    .filter(col("count") > 1) \
    .show()

# COMMAND ----------

products_df.groupBy("category").count().show()

orders_df.groupBy("order_status").count().show()

# COMMAND ----------

suppliers_df.groupBy("supplier_city").count().show()

final_df.agg(
    sum("bill_amount").alias("total_revenue")
).show()

# COMMAND ----------

final_df.agg(
    avg("bill_amount").alias("average_bill")
).show()

final_df.groupBy("category") \
    .agg(sum("bill_amount").alias("revenue")) \
    .show()

# COMMAND ----------

final_df.groupBy("supplier_name") \
    .agg(sum("bill_amount").alias("revenue")) \
    .show()

final_df.groupBy("supplier_city") \
    .agg(sum("bill_amount").alias("revenue")) \
    .show()

# COMMAND ----------

final_df.groupBy("product_name") \
    .agg(sum("quantity").alias("total_quantity")) \
    .orderBy(desc("total_quantity")) \
    .show()

final_df.groupBy("product_name") \
    .agg(sum("quantity").alias("total_quantity")) \
    .orderBy("total_quantity") \
    .show()

# COMMAND ----------

products_df.createOrReplaceTempView("products")
suppliers_df.createOrReplaceTempView("suppliers")
orders_df.createOrReplaceTempView("orders")
payments_df.createOrReplaceTempView("payments")
final_df.createOrReplaceTempView("final_table")

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM products;
# MAGIC
# MAGIC SELECT *
# MAGIC FROM final_table
# MAGIC WHERE category = 'ELECTRONICS';

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT
# MAGIC category,
# MAGIC SUM(bill_amount) AS revenue
# MAGIC FROM final_table
# MAGIC GROUP BY category;
# MAGIC
# MAGIC SELECT
# MAGIC supplier_name,
# MAGIC SUM(bill_amount) AS revenue
# MAGIC FROM final_table
# MAGIC GROUP BY supplier_name;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM final_table
# MAGIC ORDER BY bill_amount DESC
# MAGIC LIMIT 5;
# MAGIC
# MAGIC SELECT
# MAGIC supplier_name,
# MAGIC COUNT(order_id) AS total_orders
# MAGIC FROM final_table
# MAGIC GROUP BY supplier_name;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT
# MAGIC category,
# MAGIC COUNT(order_id) AS total_orders
# MAGIC FROM final_table
# MAGIC GROUP BY category;
# MAGIC
# MAGIC SELECT
# MAGIC payment_mode,
# MAGIC AVG(bill_amount) AS avg_payment
# MAGIC FROM final_table
# MAGIC GROUP BY payment_mode;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT
# MAGIC product_name,
# MAGIC SUM(bill_amount) AS revenue
# MAGIC FROM final_table
# MAGIC GROUP BY product_name
# MAGIC HAVING revenue > 100000

# COMMAND ----------

from pyspark.sql.window import Window

# COMMAND ----------

product_window = Window.partitionBy("category") \
    .orderBy(desc("bill_amount"))

final_df.withColumn(
    "rank",
    rank().over(product_window)
).show()

supplier_window = Window.partitionBy("supplier_city") \
    .orderBy(desc("bill_amount"))

final_df.withColumn(
    "rank",
    rank().over(supplier_window)
).show()

# COMMAND ----------

final_df.withColumn(
    "row_num",
    row_number().over(product_window)
).filter(col("row_num") == 1).show()

final_df.withColumn(
    "dense_rank",
    dense_rank().over(supplier_window)
).show()

# COMMAND ----------

supplier_rev = final_df.groupBy("supplier_name") \
    .agg(sum("bill_amount").alias("revenue"))

window_spec = Window.orderBy(desc("revenue"))

supplier_rev.withColumn(
    "rank",
    dense_rank().over(window_spec)
).filter(col("rank") <= 2).show()

# COMMAND ----------

date_window = Window.orderBy("order_date")

final_df.withColumn(
    "running_total",
    sum("bill_amount").over(date_window)
).show()

# COMMAND ----------

supplier_window2 = Window.partitionBy("supplier_name") \
    .orderBy("order_date")

final_df.withColumn(
    "running_supplier_total",
    sum("bill_amount").over(supplier_window2)
).show()

city_rev = final_df.groupBy("supplier_city") \
    .agg(sum("bill_amount").alias("revenue"))

city_window = Window.orderBy(desc("revenue"))

city_rev.withColumn(
    "rank",
    rank().over(city_window)
).show()

# COMMAND ----------

cat_rev = final_df.groupBy("category") \
    .agg(sum("bill_amount").alias("revenue"))

cat_window = Window.orderBy(desc("revenue"))

cat_rev.withColumn(
    "rank",
    rank().over(cat_window)
).show()

pay_window = Window.partitionBy("payment_mode") \
    .orderBy(desc("bill_amount"))

final_df.withColumn(
    "row_num",
    row_number().over(pay_window)
).filter(col("row_num") == 1).show()

# COMMAND ----------

final_df.write.format("delta") \
    .mode("overwrite") \
    .save("/FileStore/delta/final_orders")

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO delta.`/FileStore/delta/final_orders`
# MAGIC VALUES (
# MAGIC 321,114,204,'2024-04-11',3,'Delivered'
# MAGIC );
# MAGIC
# MAGIC UPDATE delta.`/FileStore/delta/final_orders`
# MAGIC SET order_status = 'Delivered'
# MAGIC WHERE order_id = 304;
# MAGIC
# MAGIC UPDATE delta.`/FileStore/delta/final_orders`
# MAGIC SET payment_status = 'Paid'
# MAGIC WHERE payment_status = 'Pending';
# MAGIC
# MAGIC DELETE FROM delta.`/FileStore/delta/final_orders`
# MAGIC WHERE order_status = 'Cancelled';
# MAGIC
# MAGIC CREATE TABLE clean_orders
# MAGIC USING DELTA
# MAGIC AS
# MAGIC SELECT *
# MAGIC FROM delta.`/FileStore/delta/final_orders`
# MAGIC WHERE order_status != 'Cancelled';
# MAGIC
# MAGIC DESCRIBE HISTORY delta.`/FileStore/delta/final_orders`;
# MAGIC
# MAGIC SELECT *
# MAGIC FROM delta.`/FileStore/delta/final_orders`
# MAGIC VERSION AS OF 1;
# MAGIC
# MAGIC SELECT *
# MAGIC FROM delta.`/FileStore/delta/final_orders`
# MAGIC VERSION AS OF 1;
# MAGIC
# MAGIC SELECT *
# MAGIC FROM delta.`/FileStore/delta/final_orders`;
# MAGIC
# MAGIC VACUUM delta.`/FileStore/delta/final_orders`
# MAGIC DRY RUN;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE TABLE orders_target (
# MAGIC order_id INT,
# MAGIC product_id INT,
# MAGIC supplier_id INT,
# MAGIC order_date DATE,
# MAGIC quantity INT,
# MAGIC order_status STRING
# MAGIC )
# MAGIC USING DELTA

# COMMAND ----------

orders_df.write.format("delta") \
    .mode("overwrite") \
    .saveAsTable("orders_target")

# COMMAND ----------

daily_orders_data = [
(321,114,204,"2024-04-11",3,"Delivered"),
(322,118,210,"2024-04-11",2,"Delivered"),
(304,114,208,"2024-04-02",5,"Delivered"),
(319,112,208,"2024-04-10",2,"Delivered"),
(323,120,210,"2024-04-12",1,"Pending")
]

daily_orders_columns = [
"order_id",
"product_id",
"supplier_id",
"order_date",
"quantity",
"order_status"
]

daily_orders_df = spark.createDataFrame(
    daily_orders_data,
    daily_orders_columns
)

daily_orders_df.createOrReplaceTempView("daily_updates")

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO orders_target AS target
# MAGIC USING daily_updates AS source
# MAGIC ON target.order_id = source.order_id
# MAGIC
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET
# MAGIC target.product_id = source.product_id,
# MAGIC target.supplier_id = source.supplier_id,
# MAGIC target.order_date = source.order_date,
# MAGIC target.quantity = source.quantity,
# MAGIC target.order_status = source.order_status
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM orders_target
# MAGIC WHERE order_id IN (304,319);
# MAGIC
# MAGIC SELECT *
# MAGIC FROM orders_target
# MAGIC WHERE order_id IN (321,322,323);

# COMMAND ----------

# MAGIC %sql
# MAGIC DESCRIBE HISTORY orders_target

# COMMAND ----------

products_df.write.format("parquet") \
    .mode("overwrite") \
    .save("/FileStore/parquet/products")

parquet_df = spark.read.format("parquet") \
    .load("/FileStore/parquet/products")

parquet_df.show()

# COMMAND ----------

parquet_df.write.format("delta") \
    .mode("overwrite") \
    .save("/FileStore/delta/products_delta")

delta_df = spark.read.format("delta") \
    .load("/FileStore/delta/products_delta")

delta_df.show()

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE delta.`/FileStore/delta/products_delta`
# MAGIC SET price = 50000
# MAGIC WHERE product_id = 111