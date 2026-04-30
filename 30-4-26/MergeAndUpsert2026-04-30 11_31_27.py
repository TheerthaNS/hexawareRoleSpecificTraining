# Databricks notebook source
# MAGIC %sql
# MAGIC CREATE OR REPLACE TABLE ecommerce_orders
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
# MAGIC INSERT INTO ecommerce_orders VALUES
# MAGIC (101,'Amit Sharma','Hyderabad','Laptop',1,75000,'Placed'),
# MAGIC (102,'Priya Reddy','Bangalore','Mobile',2,30000,'Placed'),
# MAGIC (103,'Rohit Mehta','Mumbai','Headphones',3,2000,'Shipped'),
# MAGIC (104,'Sneha Iyer','Chennai','Laptop',1,72000,'Placed'),
# MAGIC (105,'Karan Patel','Ahmedabad','Tablet',2,25000,'Cancelled'),
# MAGIC (106,'Ananya Das','Kolkata','Mobile',1,28000,'Placed'),
# MAGIC (107,'Vikram Singh','Delhi','Camera',1,55000,'Placed'),
# MAGIC (108,'Meera Nair','Bangalore','Laptop',1,80000,'Placed');

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO ecommerce_orders VALUES
# MAGIC (109,'Rahul Verma','Mumbai','Tablet',1,27000,'Placed');
# MAGIC
# MAGIC INSERT INTO ecommerce_orders VALUES
# MAGIC (110,'Arjun Nair','Kochi','Mobile',1,25000,'Placed'),
# MAGIC (111,'Kavya Reddy','Hyderabad','Laptop',1,78000,'Placed');
# MAGIC
# MAGIC INSERT INTO ecommerce_orders VALUES
# MAGIC (112,'Suresh Kumar','Delhi','Camera',1,50000,'Shipped');
# MAGIC
# MAGIC INSERT INTO ecommerce_orders VALUES
# MAGIC (113,'Deepak Jain','Jaipur','Headphones',5,2200,'Placed');
# MAGIC
# MAGIC INSERT INTO ecommerce_orders VALUES
# MAGIC (114,'Ravi Teja','Hyderabad','Mobile',1,26000,'Placed'),
# MAGIC (115,'Pooja Sharma','Hyderabad','Tablet',2,24000,'Placed'),
# MAGIC (116,'Kiran Rao','Hyderabad','Laptop',1,77000,'Placed');

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE ecommerce_orders
# MAGIC SET order_status = 'Shipped'
# MAGIC WHERE order_id = 101;
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET quantity = quantity + 1
# MAGIC WHERE order_id = 102;
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET price = 78000
# MAGIC WHERE product = 'Laptop';
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET city = 'Secunderabad'
# MAGIC WHERE customer_name = 'Amit Sharma';
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET order_status = 'Delivered'
# MAGIC WHERE product = 'Mobile';
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET price = 2500
# MAGIC WHERE product = 'Headphones';
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET price = price + 1000
# MAGIC WHERE product = 'Tablet';
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET order_status = 'Processing'
# MAGIC WHERE city = 'Bangalore';
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET quantity = 2
# MAGIC WHERE quantity = 1;
# MAGIC
# MAGIC UPDATE ecommerce_orders
# MAGIC SET city = 'Surat'
# MAGIC WHERE city = 'Ahmedabad';

# COMMAND ----------

# MAGIC %sql
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE order_status = 'Cancelled';
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE quantity > 3;
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE product = 'Camera';
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE city = 'Kolkata';
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE price < 5000;
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE customer_name LIKE 'A%';
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE product = 'Tablet';
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE city = 'Mumbai' AND quantity = 1;
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE price > 80000;
# MAGIC
# MAGIC DELETE FROM ecommerce_orders
# MAGIC WHERE order_id = (SELECT MAX(order_id) FROM ecommerce_orders);

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders AS target
# MAGIC USING incoming_orders AS source
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
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TEMP VIEW incoming_orders AS
# MAGIC SELECT * FROM VALUES
# MAGIC (102,'Priya Reddy','Bangalore','Mobile',4,30000,'Delivered'),
# MAGIC (104,'Sneha Iyer','Chennai','Laptop',1,72000,'Shipped'),
# MAGIC (109,'Rahul Verma','Mumbai','Tablet',2,26000,'Placed'),
# MAGIC (110,'Divya Menon','Kochi','Mobile',1,27000,'Placed'),
# MAGIC (111,'Farhan Ali','Hyderabad','Laptop',1,79000,'Placed')
# MAGIC AS incoming_orders(order_id,customer_name,city,product,quantity,price,order_status);

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders AS target
# MAGIC USING incoming_orders AS source
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
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM ecommerce_orders ORDER BY order_id;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *,
# MAGIC CASE
# MAGIC   WHEN order_id IN (SELECT order_id FROM incoming_orders)
# MAGIC   THEN 'Updated/Inserted'
# MAGIC   ELSE 'Existing'
# MAGIC END AS status_flag
# MAGIC FROM ecommerce_orders;

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING incoming_orders s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET t.order_status = s.order_status
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING incoming_orders s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED AND s.quantity > t.quantity THEN
# MAGIC UPDATE SET t.quantity = s.quantity
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING incoming_orders s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED AND s.order_status != 'Cancelled' THEN
# MAGIC UPDATE SET *
# MAGIC
# MAGIC WHEN NOT MATCHED AND s.order_status != 'Cancelled' THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC -- 9 (insert only Laptop)
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING incoming_orders s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN NOT MATCHED AND s.product = 'Laptop' THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING incoming_orders s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED AND s.price > t.price THEN
# MAGIC UPDATE SET t.price = s.price
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING daily_updates s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET
# MAGIC t.quantity = s.quantity,
# MAGIC t.price = s.price,
# MAGIC t.order_status = s.order_status
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TEMP VIEW daily_updates AS
# MAGIC SELECT * FROM VALUES
# MAGIC (103,'Rohit Mehta','Mumbai','Headphones',5,2200,'Delivered'),
# MAGIC (106,'Ananya Das','Kolkata','Mobile',2,28000,'Shipped'),
# MAGIC (112,'Sanjay Gupta','Delhi','Tablet',1,24000,'Placed')
# MAGIC AS daily_updates(order_id,customer_name,city,product,quantity,price,order_status);

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING daily_updates s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET
# MAGIC t.quantity = s.quantity,
# MAGIC t.price = s.price,
# MAGIC t.order_status = s.order_status
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *;
# MAGIC
# MAGIC

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING daily_updates s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET t.quantity = s.quantity;

# COMMAND ----------

# MAGIC %sql
# MAGIC MERGE INTO ecommerce_orders t
# MAGIC USING daily_updates s
# MAGIC ON t.order_id = s.order_id
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT *;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT COUNT(*) AS updated_rows
# MAGIC FROM ecommerce_orders t
# MAGIC JOIN daily_updates s
# MAGIC ON t.order_id = s.order_id;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT COUNT(*) AS inserted_rows
# MAGIC FROM daily_updates s
# MAGIC LEFT JOIN ecommerce_orders t
# MAGIC ON s.order_id = t.order_id
# MAGIC WHERE t.order_id IS NULL;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM ecommerce_orders
# MAGIC ORDER BY price DESC;