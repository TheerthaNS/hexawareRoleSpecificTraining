from pyspark.sql import SparkSession
from pyspark.sql.functions import sum, col
spark = SparkSession.builder \
    .appName("ExpenseAnalysis") \
    .getOrCreate()
df = spark.read.csv(
    "expenses.csv",
    header=True,
    inferSchema=True
)
monthly_spend = df.groupBy("category") \
    .agg(sum("amount").alias("total_spend"))
monthly_spend.show()
anomalies = df.filter(col("amount") > 2500)
print("Potential Unusual Spending")
anomalies.show()