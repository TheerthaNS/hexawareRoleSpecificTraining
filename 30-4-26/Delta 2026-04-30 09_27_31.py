# Databricks notebook source
# MAGIC %sql
# MAGIC CREATE DATABASE IF NOT EXISTS delta_training_db;
# MAGIC USE delta_training_db;

# COMMAND ----------

customers_data = [
    (1, "Aarav Sharma", "Hyderabad", "Gold", 25000),
    (2, "Priya Reddy", "Bengaluru", "Silver", 18000),
    (3, "Rohan Mehta", "Mumbai", "Gold", 32000),
    (4, "Sneha Iyer", "Chennai", "Bronze", 12000),
    (5, "Kiran Patel", "Hyderabad", "Silver", 22000),
    (6, "Ananya Das", "Kolkata", "Gold", 41000),
    (7, "Vikram Singh", "Delhi", "Bronze", 9000),
    (8, "Meera Nair", "Bengaluru", "Silver", 26000)
]

columns = ["customer_id", "customer_name", "city", "membership", "total_spend"]

customers_df = spark.createDataFrame(customers_data, columns)

display(customers_df)

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TABLE customers_delta_df (
# MAGIC   customer_id LONG,
# MAGIC   customer_name STRING,
# MAGIC   city STRING,
# MAGIC   membership STRING,
# MAGIC   total_spend INT
# MAGIC )
# MAGIC USING DELTA;

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO customers_delta_df VALUES
# MAGIC (1, 'Aarav Sharma', 'Hyderabad', 'Gold', 25000),
# MAGIC (2, 'Priya Reddy', 'Bengaluru', 'Silver', 18000),
# MAGIC (3, 'Rohan Mehta', 'Mumbai', 'Gold', 32000);
# MAGIC

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM customers_delta_df;

# COMMAND ----------

customers_df.write \
    .format("delta") \
    .mode("overwrite") \
    .option("overwriteSchema", "true") \
    .saveAsTable("customers_delta_sql")

# COMMAND ----------

# MAGIC %sql SELECT * FROM customers_delta_df; 

# COMMAND ----------

customers_df.printSchema()

# COMMAND ----------

# MAGIC %sql DESCRIBE TABLE customers_delta_df;

# COMMAND ----------

delta_path = "/FileStore/delta/customers_path_table"

customers_df.write \
    .format("delta") \
    .mode("overwrite") \
    .save(delta_path)


# COMMAND ----------

path_df = spark.read.format("delta").load(delta_path)
display(path_df)


# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TABLE retail_orders
# MAGIC (
# MAGIC order_id INT,
# MAGIC customer_name STRING,
# MAGIC city STRING,
# MAGIC product STRING,
# MAGIC quantity INT,
# MAGIC price INT,
# MAGIC order_status STRING
# MAGIC )
# MAGIC USING DELTA;

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO retail_orders VALUES
# MAGIC (101,'Amit Sharma','Hyderabad','Laptop',1,75000,'Placed'),
# MAGIC (102,'Priya Reddy','Bangalore','Mobile',2,30000,'Placed'),
# MAGIC (103,'Rohit Mehta','Mumbai','Headphones',3,2000,'Shipped'),
# MAGIC (104,'Sneha Iyer','Chennai','Laptop',1,72000,'Placed'),
# MAGIC (105,'Karan Patel','Ahmedabad','Tablet',2,25000,'Cancelled'),
# MAGIC (106,'Ananya Das','Kolkata','Mobile',1,28000,'Placed');
# MAGIC  

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TEMP VIEW new_orders AS
# MAGIC SELECT * FROM VALUES
# MAGIC (102,'Priya Reddy','Bangalore','Mobile',4,30000,'Delivered'),
# MAGIC (104,'Sneha Iyer','Chennai','Laptop',1,72000,'Shipped'),
# MAGIC (109,'Rahul Verma','Mumbai','Tablet',2,26000,'Placed'),
# MAGIC (110,'Divya Menon','Kochi','Mobile',1,27000,'Placed')
# MAGIC AS new_orders(order_id,customer_name,city,product,quantity,price,order_status);

# COMMAND ----------

#if order exists -> update
#if order not exists -> insert

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO retail_orders AS target
# MAGIC USING new_orders AS source
# MAGIC ON target.order_id = source.order_id
# MAGIC  
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET
# MAGIC target.customer_name = source.customer_name,
# MAGIC target.city = source.city,
# MAGIC target.product = source.product,
# MAGIC target.quantity = source.quantity,
# MAGIC target.price = source.price,
# MAGIC target.order_status = source.order_status
# MAGIC  
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT (
# MAGIC order_id,
# MAGIC customer_name,
# MAGIC city,
# MAGIC product,
# MAGIC quantity,
# MAGIC price,
# MAGIC order_status
# MAGIC )
# MAGIC  
# MAGIC VALUES (
# MAGIC source.order_id,
# MAGIC source.customer_name,
# MAGIC source.city,
# MAGIC source.product,
# MAGIC source.quantity,
# MAGIC source.price,
# MAGIC source.order_status
# MAGIC );

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO retail_orders (
# MAGIC     order_id, customer_name, city, product, quantity, price, order_status
# MAGIC )
# MAGIC VALUES
# MAGIC (201, 'Rahul', 'Chennai', 'Mobile', 2, 25000, 'Delivered'),
# MAGIC (202, 'Priya', 'Bangalore', 'Laptop', 1, 75000, 'Pending');

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE retail_orders
# MAGIC SET price = 78000
# MAGIC WHERE product = 'Laptop';

# COMMAND ----------

# MAGIC %sql 
# MAGIC DELETE FROM retail_orders
# MAGIC WHERE quantity = 1;

# COMMAND ----------

# MAGIC %sql
# MAGIC DROP TEMPORARY TABLE IF EXISTS incoming_orders; CREATE TEMPORARY TABLE incoming_orders AS
# MAGIC SELECT * FROM retail_orders WHERE 1 = 0;

# COMMAND ----------

# MAGIC %sql
# MAGIC DROP TABLE IF EXISTS incoming_orders;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE TEMP TABLE incoming_orders AS
# MAGIC SELECT * FROM retail_orders WHERE 1 = 0;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TEMP VIEW incoming_orders AS
# MAGIC SELECT * FROM VALUES
# MAGIC (301, 'Amit', 'Delhi', 'Tablet', 3, 30000, 'Shipped'),
# MAGIC (302, 'Sneha', 'Mumbai', 'Laptop', 1, 78000, 'Pending')
# MAGIC AS incoming_orders(
# MAGIC     order_id,
# MAGIC     customer_name,
# MAGIC     city,
# MAGIC     product,
# MAGIC     quantity,
# MAGIC     price,
# MAGIC     order_status
# MAGIC );

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO retail_orders AS target
# MAGIC USING incoming_orders AS source
# MAGIC ON target.order_id = source.order_id
# MAGIC
# MAGIC WHEN MATCHED THEN UPDATE SET *
# MAGIC WHEN NOT MATCHED THEN INSERT *;
# MAGIC

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM retail_orders;
# MAGIC