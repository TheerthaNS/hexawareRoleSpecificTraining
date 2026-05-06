# Databricks notebook source
# MAGIC %sql
# MAGIC CREATE CATALOG retail_catalog

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE SCHEMA retail_catalog.supply_chain

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE TABLE retail_catalog.supply_chain.final_orders
# MAGIC USING DELTA
# MAGIC LOCATION '/FileStore/delta/final_orders'

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE TABLE retail_catalog.supply_chain.city_revenue
# MAGIC AS
# MAGIC SELECT
# MAGIC supplier_city,
# MAGIC SUM(bill_amount) AS revenue
# MAGIC FROM final_table
# MAGIC GROUP BY supplier_city

# COMMAND ----------

GRANT SELECT
ON TABLE retail_catalog.supply_chain.final_orders
TO `users`