# Databricks notebook source
df = spark.read.csv(
    "dbfs:/Volumes/expensemonitoringworkspace/default/expensevolume/expenses.csv",
    header=True,
    inferSchema=True
)

display(df)