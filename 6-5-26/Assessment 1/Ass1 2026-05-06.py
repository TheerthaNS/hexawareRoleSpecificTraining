# Databricks notebook source
from pyspark.sql.functions import *
from pyspark.sql.window import Window
from delta.tables import *

# COMMAND ----------

patients_data = [
(1001,"Aarav Khan","Hyderabad",29,"Male","Gold","2023-01-10"),
(1002,"Priya Reddy","Bengaluru",34,"Female","Silver","2023-01-15"),
(1003,"Rahul Mehta","Mumbai",41,"Male","Gold","2023-02-02"),
(1004,"Sneha Kapoor","Delhi",26,"Female","Bronze","2023-02-18"),
(1005,"Kiran Patel","Ahmedabad",37,"Male","Silver","2023-03-01"),
(1006,"Ananya Das","Kolkata",31,"Female","Gold","2023-03-12"),
(1007,"Vikram Singh","Chennai",45,"Male","Bronze","2023-03-20"),
(1008,"Meera Nair","Kochi",28,"Female","Silver","2023-04-05"),
(1009,"Farhan Ali","Hyderabad",39,"Male","Gold","2023-04-15"),
(1010,"Divya Menon","Bengaluru",33,"Female","Silver","2023-04-21"),
(1011,"Arjun Iyer","Chennai",52,"Male","Gold","2023-05-01"),
(1012,"Neha Gupta","Delhi",25,"Female","Bronze","2023-05-11"),
(1013,"Sanjay Rao","Mumbai",48,"Male","Silver","2023-05-19"),
(1014,"Kavya Sharma","Hyderabad",30,"Female","Gold","2023-06-01"),
(1015,"Nikhil Verma","Pune",36,"Male","Silver","2023-06-12"),
(1016,"Ayesha Khan","Kolkata",27,"Female","Bronze","2023-06-20"),
(1017,"Manish Yadav","Lucknow",44,"Male","Gold","2023-07-05"),
(1018,"Pooja Shah","Ahmedabad",32,"Female","Silver","2023-07-18"),
(1019,"Rohan Nair","Kochi",40,"Male","Gold","2023-08-01"),
(1020,"Lakshmi Rao","Chennai",35,"Female","Silver","2023-08-14")
]

patients_columns = [
"patient_id","patient_name","city","age",
"gender","membership","registration_date"
]

patients_df = spark.createDataFrame(patients_data, patients_columns)

# COMMAND ----------

doctors_data = [
(201,"Dr Sameer Sharma","Cardiology","Hyderabad",1200),
(202,"Dr Kavita Iyer","Dermatology","Bengaluru",800),
(203,"Dr Imran Khan","Orthopedics","Mumbai",1500),
(204,"Dr Ramesh Reddy","Pediatrics","Delhi",900),
(205,"Dr Anita Mehta","Neurology","Hyderabad",2000),
(206,"Dr Joseph Mathew","Cardiology","Chennai",1300),
(207,"Dr Fatima Ali","Dermatology","Kolkata",850),
(208,"Dr Arvind Rao","Orthopedics","Bengaluru",1400),
(209,"Dr Leela Nair","Neurology","Kochi",1900),
(210,"Dr Ganesh Patil","General Medicine","Pune",700)
]

doctors_columns = [
"doctor_id","doctor_name","specialization",
"doctor_city","consultation_fee"
]

doctors_df = spark.createDataFrame(doctors_data, doctors_columns)

# COMMAND ----------

visits_data = [
(1,1001,201,"2024-03-01","Completed",2),
(2,1002,202,"2024-03-01","Completed",1),
(3,1003,203,"2024-03-02","Completed",3),
(4,1004,204,"2024-03-02","Pending",1),
(5,1005,206,"2024-03-03","Completed",2),
(6,1006,205,"2024-03-03","Completed",4),
(7,1007,207,"2024-03-04","Cancelled",1),
(8,1008,208,"2024-03-04","Completed",2),
(9,1009,201,"2024-03-05","Completed",1),
(10,1010,202,"2024-03-05","Completed",2),
(11,1011,205,"2024-03-06","Pending",3),
(12,1012,204,"2024-03-06","Completed",1),
(13,1013,203,"2024-03-07","Completed",2),
(14,1014,201,"2024-03-07","Completed",3),
(15,1015,210,"2024-03-08","Completed",1),
(16,1016,207,"2024-03-08","Cancelled",2),
(17,1017,209,"2024-03-09","Completed",4),
(18,1018,206,"2024-03-09","Completed",2),
(19,1019,209,"2024-03-10","Completed",3),
(20,1020,206,"2024-03-10","Pending",2),
(21,1001,205,"2024-03-11","Completed",3),
(22,1003,208,"2024-03-11","Completed",2),
(23,1006,201,"2024-03-12","Completed",1),
(24,1009,210,"2024-03-12","Completed",2),
(25,1014,202,"2024-03-13","Completed",1)
]

visits_columns = [
"visit_id","patient_id","doctor_id",
"visit_date","visit_status","tests_count"
]

visits_df = spark.createDataFrame(visits_data, visits_columns)

# COMMAND ----------

payments_data = [
(301,1,5200,"UPI","Paid"),
(302,2,2800,"Credit Card","Paid"),
(303,3,7500,"Cash","Paid"),
(304,4,2900,"UPI","Pending"),
(305,5,5300,"Debit Card","Paid"),
(306,6,10000,"Credit Card","Paid"),
(307,7,2850,"Cash","Cancelled"),
(308,8,5400,"UPI","Paid"),
(309,9,3200,"UPI","Paid"),
(310,10,4800,"Credit Card","Paid"),
(311,11,8000,"UPI","Pending"),
(312,12,2900,"Cash","Paid"),
(313,13,5500,"Credit Card","Paid"),
(314,14,7200,"UPI","Paid"),
(315,15,2700,"Debit Card","Paid"),
(316,16,4850,"Cash","Cancelled"),
(317,17,9900,"Credit Card","Paid"),
(318,18,5300,"UPI","Paid"),
(319,19,7900,"Debit Card","Paid"),
(320,20,5300,"UPI","Pending"),
(321,21,8000,"UPI","Paid"),
(322,22,5400,"Credit Card","Paid"),
(323,23,3200,"Cash","Paid"),
(324,24,4700,"UPI","Paid"),
(325,25,2800,"UPI","Paid")
]

payments_columns = [
"payment_id","visit_id","bill_amount",
"payment_mode","payment_status"
]

payments_df = spark.createDataFrame(payments_data, payments_columns)

# COMMAND ----------

display(patients_df)
display(doctors_df)
display(visits_df)
display(payments_df)

patients_df.printSchema()
doctors_df.printSchema()
visits_df.printSchema()
payments_df.printSchema()

patients_df.count()
doctors_df.count()
visits_df.count()
payments_df.count()

patients_df.show(10)

patients_df.select(
"patient_name","city","membership","age"
).show()

doctors_df.select(
"doctor_name","specialization","consultation_fee"
).show()

visits_df.filter(
col("visit_status")=="Completed"
).show()

visits_df.filter(
col("visit_status")=="Pending"
).show()

patients_df.filter(
col("city").isin("Hyderabad","Bengaluru")
).show()

doctors_df.filter(
col("consultation_fee") > 1000
).show()

# COMMAND ----------

patients_df = patients_df.withColumn(
"registration_date",
to_date("registration_date")
)

visits_df = visits_df.withColumn(
"visit_date",
to_date("visit_date")
)

visits_df = visits_df.withColumn(
"test_cost",
col("tests_count") * 500
)

visits_df = visits_df.withColumn(
"estimated_total_bill",
col("test_cost") + 2000
)

patients_df = patients_df.withColumn(
"age_category",
when(col("age") < 30,"Young")
.when(col("age") < 45,"Middle")
.otherwise("Senior")
)

patients_df = patients_df.withColumn(
"membership_priority",
when(col("membership")=="Gold",1)
.when(col("membership")=="Silver",2)
.otherwise(3)
)

visits_df = visits_df.withColumn(
"visit_priority",
when(col("visit_status")=="Completed","High")
.when(col("visit_status")=="Pending","Medium")
.otherwise("Low")
)

visits_df = visits_df.withColumn(
"high_bill_flag",
when(col("estimated_total_bill") > 3500,"Yes")
.otherwise("No")
)

patients_df = patients_df.withColumnRenamed(
"patient_name","full_name"
)

# COMMAND ----------

patient_visits_df = patients_df.join(
visits_df,
"patient_id"
)

visit_doctor_df = visits_df.join(
doctors_df,
"doctor_id"
)

visit_payment_df = visits_df.join(
payments_df,
"visit_id"
)

final_df = patients_df.join(
visits_df,"patient_id"
).join(
doctors_df,"doctor_id"
).join(
payments_df,"visit_id"
)

display(final_df)

final_df.select(
"full_name",
"city",
"doctor_name",
"specialization",
"visit_status",
"bill_amount"
).show()

final_df.filter(
col("city") != col("doctor_city")
).show()

final_df.filter(
(col("visit_status")=="Completed") &
(col("payment_status")=="Paid")
).show()

final_df.filter(
(col("visit_status")=="Pending") &
(col("payment_status")=="Pending")
).show()

final_df.filter(
(col("visit_status")=="Cancelled") &
(col("payment_status")=="Cancelled")
).show()

final_df.groupBy("patient_id").count() \
.filter(col("count") > 1).show()

# COMMAND ----------

patients_df.groupBy("city").count().show()

patients_df.groupBy("membership").count().show()

doctors_df.groupBy("specialization").count().show()

visits_df.groupBy("visit_status").count().show()

payments_df.groupBy("payment_mode").count().show()

payments_df.agg(
sum("bill_amount")
).show()

payments_df.agg(
avg("bill_amount")
).show()

final_df.groupBy("city").agg(
sum("bill_amount").alias("total_revenue")
).show()

final_df.groupBy("specialization").agg(
sum("bill_amount").alias("total_revenue")
).show()

final_df.groupBy("doctor_name").agg(
sum("bill_amount").alias("total_revenue")
).show()

# COMMAND ----------

patients_df.createOrReplaceTempView("patients")
doctors_df.createOrReplaceTempView("doctors")
visits_df.createOrReplaceTempView("visits")
payments_df.createOrReplaceTempView("payments")
final_df.createOrReplaceTempView("final_table")

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM patients

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM final_table
# MAGIC WHERE specialization='Cardiology'

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT city,
# MAGIC SUM(bill_amount) AS revenue
# MAGIC FROM final_table
# MAGIC GROUP BY city

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT specialization,
# MAGIC SUM(bill_amount) AS revenue
# MAGIC FROM final_table
# MAGIC GROUP BY specialization

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM final_table
# MAGIC ORDER BY bill_amount DESC
# MAGIC LIMIT 5

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT doctor_name,
# MAGIC COUNT(*) AS visits
# MAGIC FROM final_table
# MAGIC GROUP BY doctor_name

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT full_name,
# MAGIC COUNT(*) AS visits
# MAGIC FROM final_table
# MAGIC GROUP BY full_name

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT payment_mode,
# MAGIC AVG(bill_amount)
# MAGIC FROM final_table
# MAGIC GROUP BY payment_mode

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT full_name,
# MAGIC SUM(bill_amount) total_bill
# MAGIC FROM final_table
# MAGIC GROUP BY full_name
# MAGIC HAVING total_bill > 10000

# COMMAND ----------

city_window = Window.partitionBy("city") \
.orderBy(col("bill_amount").desc())

patient_bill_df = final_df.groupBy(
"city","full_name"
).agg(
sum("bill_amount").alias("total_bill")
)

patient_bill_df.withColumn(
"rank",
rank().over(
Window.partitionBy("city")
.orderBy(col("total_bill").desc())
)
).show()

doctor_revenue_df = final_df.groupBy(
"specialization","doctor_name"
).agg(
sum("bill_amount").alias("revenue")
)

doctor_revenue_df.withColumn(
"rank",
rank().over(
Window.partitionBy("specialization")
.orderBy(col("revenue").desc())
)
).show()

patient_bill_df.withColumn(
"row_num",
row_number().over(
Window.partitionBy("city")
.orderBy(col("total_bill").desc())
)
).filter(col("row_num")==1).show()

doctors_df.withColumn(
"dense_rank",
dense_rank().over(
Window.partitionBy("specialization")
.orderBy(col("consultation_fee").desc())
)
).show()

doctor_total_df = final_df.groupBy(
"doctor_name"
).agg(
sum("bill_amount").alias("revenue")
)

doctor_total_df.withColumn(
"rank",
rank().over(
Window.orderBy(col("revenue").desc())
)
).filter(col("rank") <= 2).show()

running_window = Window.orderBy("visit_date")

daily_revenue = final_df.groupBy(
"visit_date"
).agg(
sum("bill_amount").alias("daily_total")
)

daily_revenue.withColumn(
"running_total",
sum("daily_total").over(running_window)
).show()

doctor_window = Window.partitionBy(
"doctor_name"
).orderBy("visit_date")

final_df.withColumn(
"running_revenue",
sum("bill_amount").over(doctor_window)
).show()

city_revenue = final_df.groupBy(
"city"
).agg(
sum("bill_amount").alias("revenue")
)

city_revenue.withColumn(
"rank",
rank().over(
Window.orderBy(col("revenue").desc())
)
).show()

spec_revenue = final_df.groupBy(
"specialization"
).agg(
sum("bill_amount").alias("revenue")
)

spec_revenue.withColumn(
"rank",
rank().over(
Window.orderBy(col("revenue").desc())
)
).show()

final_df.withColumn(
"rank",
rank().over(
Window.partitionBy("payment_mode")
.orderBy(col("bill_amount").desc())
)
).filter(col("rank")==1).show()

# COMMAND ----------

final_df.write.format("delta") \
.mode("overwrite") \
.saveAsTable("hospital_delta")

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO hospital_delta VALUES
# MAGIC (26,1002,'Priya Reddy','Bengaluru',34,'Female',
# MAGIC 'Silver','2023-01-15','Middle',2,201,
# MAGIC 'Dr Sameer Sharma','Cardiology','Hyderabad',
# MAGIC 1200,'2024-03-14','Completed',2,1000,3000,
# MAGIC 'High','No',326,26,5000,'UPI','Paid')

# COMMAND ----------

# MAGIC %sql
# MAGIC
# MAGIC INSERT INTO hospital_delta
# MAGIC (
# MAGIC visit_id,
# MAGIC patient_id,
# MAGIC full_name,
# MAGIC city,
# MAGIC age,
# MAGIC gender,
# MAGIC membership,
# MAGIC registration_date,
# MAGIC age_category,
# MAGIC membership_priority,
# MAGIC doctor_id,
# MAGIC doctor_name,
# MAGIC specialization,
# MAGIC doctor_city,
# MAGIC consultation_fee,
# MAGIC visit_date,
# MAGIC visit_status,
# MAGIC tests_count,
# MAGIC test_cost,
# MAGIC estimated_total_bill,
# MAGIC visit_priority,
# MAGIC high_bill_flag,
# MAGIC payment_id,
# MAGIC bill_amount,
# MAGIC payment_mode,
# MAGIC payment_status
# MAGIC )
# MAGIC
# MAGIC VALUES
# MAGIC (
# MAGIC 26,
# MAGIC 1002,
# MAGIC 'Priya Reddy',
# MAGIC 'Bengaluru',
# MAGIC 34,
# MAGIC 'Female',
# MAGIC 'Silver',
# MAGIC '2023-01-15',
# MAGIC 'Middle',
# MAGIC 2,
# MAGIC 201,
# MAGIC 'Dr Sameer Sharma',
# MAGIC 'Cardiology',
# MAGIC 'Hyderabad',
# MAGIC 1200,
# MAGIC '2024-03-14',
# MAGIC 'Completed',
# MAGIC 2,
# MAGIC 1000,
# MAGIC 3000,
# MAGIC 'High',
# MAGIC 'No',
# MAGIC 326,
# MAGIC 5000,
# MAGIC 'UPI',
# MAGIC 'Paid'
# MAGIC )

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM hospital_delta
# MAGIC WHERE visit_id = 26

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO hospital_delta VALUES
# MAGIC (26,1002,'Priya Reddy','Bengaluru',34,'Female',
# MAGIC 'Silver','2023-01-15','Middle',2,201,
# MAGIC 'Dr Sameer Sharma','Cardiology','Hyderabad',
# MAGIC 1200,'2024-03-14','Completed',2,1000,3000,
# MAGIC 'High','No',326,26,5000,'UPI','Paid')

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE hospital_delta
# MAGIC SET visit_status='Completed'
# MAGIC WHERE visit_status='Pending'

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE hospital_delta
# MAGIC SET payment_status='Paid'
# MAGIC WHERE payment_status='Pending'

# COMMAND ----------

# MAGIC %sql
# MAGIC DELETE FROM hospital_delta
# MAGIC WHERE visit_status='Cancelled'

# COMMAND ----------

completed_df = final_df.filter(
col("visit_status")=="Completed"
)

completed_df.write.format("delta") \
.mode("overwrite") \
.saveAsTable("completed_visits_delta")

# COMMAND ----------

# MAGIC %sql
# MAGIC DESCRIBE HISTORY hospital_delta

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT *
# MAGIC FROM hospital_delta VERSION AS OF 1

# COMMAND ----------

# MAGIC %sql
# MAGIC VACUUM hospital_delta DRY RUN

# COMMAND ----------

daily_visits_data = [
(26,1002,201,"2024-03-14","Completed",2),
(27,1005,210,"2024-03-14","Completed",1),
(11,1011,205,"2024-03-06","Completed",3),
(20,1020,206,"2024-03-10","Completed",2),
(28,1018,203,"2024-03-15","Pending",2)
]

daily_visits_columns = [
"visit_id","patient_id","doctor_id",
"visit_date","visit_status","tests_count"
]

daily_visits_df = spark.createDataFrame(
daily_visits_data,
daily_visits_columns
)

# COMMAND ----------

visits_df.write.format("delta") \
.mode("overwrite") \
.saveAsTable("visits_target")

# COMMAND ----------

daily_visits_df.createOrReplaceTempView(
"daily_visits"
)

# COMMAND ----------

# MAGIC %sql
# MAGIC
# MAGIC MERGE INTO visits_target AS target
# MAGIC USING daily_visits AS source
# MAGIC ON target.visit_id = source.visit_id
# MAGIC
# MAGIC WHEN MATCHED THEN
# MAGIC UPDATE SET
# MAGIC target.patient_id = source.patient_id,
# MAGIC target.doctor_id = source.doctor_id,
# MAGIC target.visit_date = source.visit_date,
# MAGIC target.visit_status = source.visit_status,
# MAGIC target.tests_count = source.tests_count
# MAGIC
# MAGIC WHEN NOT MATCHED THEN
# MAGIC INSERT (
# MAGIC visit_id,
# MAGIC patient_id,
# MAGIC doctor_id,
# MAGIC visit_date,
# MAGIC visit_status,
# MAGIC tests_count
# MAGIC )
# MAGIC
# MAGIC VALUES (
# MAGIC source.visit_id,
# MAGIC source.patient_id,
# MAGIC source.doctor_id,
# MAGIC source.visit_date,
# MAGIC source.visit_status,
# MAGIC source.tests_count
# MAGIC )

# COMMAND ----------

# MAGIC %sql
# MAGIC
# MAGIC SELECT *
# MAGIC FROM visits_target
# MAGIC WHERE visit_id IN (11,20);
# MAGIC
# MAGIC SELECT *
# MAGIC FROM visits_target
# MAGIC WHERE visit_id IN (26,27,28);
# MAGIC
# MAGIC DESCRIBE HISTORY visits_target;

# COMMAND ----------

patients_df.write.mode("overwrite") \
.parquet("/tmp/patients_parquet")

parquet_df = spark.read.parquet(
"/tmp/patients_parquet"
)

display(parquet_df)
parquet_df.write.format("delta") \
.mode("overwrite") \
.save("/tmp/patients_delta")

# COMMAND ----------

delta_df = spark.read.format("delta") \
.load("/tmp/patients_delta")

display(delta_df)

# COMMAND ----------

# MAGIC %sql
# MAGIC UPDATE delta.`/tmp/patients_delta`
# MAGIC SET membership='Gold'
# MAGIC WHERE patient_id=1002