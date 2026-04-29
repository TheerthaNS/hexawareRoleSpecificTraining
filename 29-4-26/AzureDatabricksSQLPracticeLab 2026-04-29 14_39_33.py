# Databricks notebook source
# MAGIC %sql
# MAGIC CREATE DATABASE IF NOT EXISTS training_sql_lab;
# MAGIC USE training_sql_lab;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TABLE employees (
# MAGIC emp_id INT,
# MAGIC emp_name STRING,
# MAGIC city STRING,
# MAGIC department STRING,
# MAGIC salary INT,
# MAGIC experience INT
# MAGIC );

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO employees VALUES
# MAGIC (101,'Amit Sharma','Hyderabad','Engineering',92000,6),
# MAGIC (102,'Neha Gupta','Bangalore','Marketing',75000,5),
# MAGIC (103,'Rohit Mehta','Mumbai','Finance',88000,7),
# MAGIC (104,'Pooja Reddy','Chennai','Engineering',97000,8),
# MAGIC (105,'Karan Patel','Ahmedabad','HR',69000,4),
# MAGIC (106,'Sneha Iyer','Chennai','Marketing',72000,4),
# MAGIC
# MAGIC (107,'Vikram Singh','Delhi','Finance',91000,6),
# MAGIC (108,'Meera Nair','Bangalore','Engineering',85000,5),
# MAGIC (109,'Rahul Verma','Mumbai','Finance',93000,8),
# MAGIC (110,'Ananya Das','Kolkata','Engineering',89000,6),
# MAGIC (111,'Farhan Ali','Hyderabad','HR',67000,3),
# MAGIC (112,'Kavya Reddy','Bangalore','Marketing',76000,5),
# MAGIC (113,'Siddharth Rao','Hyderabad','Engineering',94000,7),
# MAGIC (114,'Divya Menon','Kochi','Finance',99000,9),
# MAGIC (115,'Arjun Nair','Chennai','HR',64000,2),
# MAGIC (116,'Aditya Joshi','Pune','Engineering',96000,8),
# MAGIC (117,'Priya Shah','Ahmedabad','Marketing',74000,4),
# MAGIC (118,'Nikhil Gupta','Delhi','Finance',97000,8),
# MAGIC (119,'Lakshmi Krishnan','Chennai','Engineering',88000,6),
# MAGIC (120,'Manish Yadav','Lucknow','Marketing',77000,5),
# MAGIC (121,'Ayesha Khan','Hyderabad','Finance',91000,7),
# MAGIC (122,'Rakesh Mishra','Delhi','Engineering',86000,6),
# MAGIC (123,'Shalini Kapoor','Mumbai','Marketing',72000,4),
# MAGIC (124,'Deepak Chatterjee','Kolkata','Finance',89000,7),
# MAGIC (125,'Ritu Sharma','Jaipur','HR',65000,3),
# MAGIC (126,'Ankit Jain','Indore','Engineering',94000,7),
# MAGIC (127,'Sanjay Bansal','Delhi','Finance',98000,9),
# MAGIC (128,'Swati Agarwal','Bangalore','Marketing',76000,5),
# MAGIC (129,'Vivek Tiwari','Lucknow','Engineering',87000,6),
# MAGIC (130,'Komal Desai','Ahmedabad','HR',66000,3);

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE OR REPLACE TABLE projects (
# MAGIC project_id INT,
# MAGIC project_name STRING,
# MAGIC department STRING,
# MAGIC budget INT
# MAGIC );

# COMMAND ----------

# MAGIC %sql
# MAGIC INSERT INTO projects VALUES
# MAGIC (201,'AI Platform','Engineering',5000000),
# MAGIC (202,'Marketing Automation','Marketing',2000000),
# MAGIC (203,'Financial Risk Model','Finance',3500000),
# MAGIC (204,'HR Analytics','HR',1000000),
# MAGIC (205,'Cloud Migration','Engineering',4500000),
# MAGIC (206,'Digital Campaign','Marketing',1800000),
# MAGIC (207,'Investment Forecast','Finance',3200000),
# MAGIC (208,'Employee Portal','HR',1200000);

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM employees;
# MAGIC SELECT emp_name, city, salary FROM employees;
# MAGIC SELECT DISTINCT department FROM employees;
# MAGIC SELECT COUNT(*) FROM employees;
# MAGIC SELECT * FROM employees WHERE city = 'Hyderabad';
# MAGIC SELECT * FROM employees WHERE city = 'Bangalore';
# MAGIC SELECT * FROM employees WHERE salary > 90000;
# MAGIC SELECT * FROM employees WHERE experience > 6;
# MAGIC SELECT * FROM employees WHERE department = 'Engineering';
# MAGIC SELECT * FROM employees WHERE salary BETWEEN 80000 AND 95000;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM employees ORDER BY salary ASC;
# MAGIC SELECT * FROM employees ORDER BY salary DESC;
# MAGIC SELECT * FROM employees ORDER BY salary DESC LIMIT 5;
# MAGIC SELECT * FROM employees ORDER BY salary ASC LIMIT 5;
# MAGIC SELECT * FROM employees ORDER BY experience DESC;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT AVG(salary) FROM employees;
# MAGIC SELECT MAX(salary) FROM employees;
# MAGIC SELECT MIN(salary) FROM employees;
# MAGIC SELECT department, COUNT(*) FROM employees GROUP BY department;
# MAGIC SELECT department, AVG(salary) FROM employees GROUP BY department;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT department, SUM(salary) FROM employees GROUP BY department;
# MAGIC SELECT department, AVG(experience) FROM employees GROUP BY department;
# MAGIC SELECT city, COUNT(*) FROM employees GROUP BY city;
# MAGIC SELECT city, MAX(salary) FROM employees GROUP BY city;
# MAGIC SELECT department, MIN(salary) FROM employees GROUP BY department;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM employees
# MAGIC WHERE salary > (SELECT AVG(salary) FROM employees);
# MAGIC
# MAGIC SELECT * FROM employees e
# MAGIC WHERE experience > (
# MAGIC     SELECT AVG(experience)
# MAGIC     FROM employees
# MAGIC     WHERE department = e.department
# MAGIC );
# MAGIC
# MAGIC SELECT * FROM employees WHERE salary < 70000;
# MAGIC SELECT * FROM employees WHERE department = 'HR';
# MAGIC
# MAGIC SELECT * FROM employees
# MAGIC WHERE department = 'Finance' AND salary > 90000;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT e.*, p.budget
# MAGIC FROM employees e
# MAGIC JOIN projects p
# MAGIC ON e.department = p.department;
# MAGIC
# MAGIC SELECT e.emp_name, e.department, p.project_name
# MAGIC FROM employees e
# MAGIC JOIN projects p
# MAGIC ON e.department = p.department;
# MAGIC
# MAGIC SELECT department, SUM(budget)
# MAGIC FROM projects
# MAGIC GROUP BY department;
# MAGIC
# MAGIC SELECT DISTINCT e.*
# MAGIC FROM employees e
# MAGIC JOIN projects p
# MAGIC ON e.department = p.department;
# MAGIC
# MAGIC SELECT p.project_name, COUNT(e.emp_id)
# MAGIC FROM projects p
# MAGIC JOIN employees e
# MAGIC ON p.department = e.department
# MAGIC GROUP BY p.project_name;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT * FROM employees
# MAGIC WHERE department = 'Engineering'
# MAGIC ORDER BY salary DESC
# MAGIC LIMIT 3;
# MAGIC
# MAGIC SELECT department, AVG(salary) AS avg_salary
# MAGIC FROM employees
# MAGIC GROUP BY department
# MAGIC ORDER BY avg_salary DESC
# MAGIC LIMIT 1;
# MAGIC
# MAGIC SELECT city, COUNT(*) AS total
# MAGIC FROM employees
# MAGIC GROUP BY city
# MAGIC ORDER BY total DESC
# MAGIC LIMIT 1;
# MAGIC
# MAGIC SELECT * FROM employees e
# MAGIC WHERE salary > (
# MAGIC     SELECT AVG(salary)
# MAGIC     FROM employees
# MAGIC     WHERE department = e.department
# MAGIC );
# MAGIC
# MAGIC SELECT * FROM employees e
# MAGIC WHERE experience = (
# MAGIC     SELECT MAX(experience)
# MAGIC     FROM employees
# MAGIC     WHERE department = e.department
# MAGIC );

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT department, COUNT(*) AS total_employees
# MAGIC FROM employees
# MAGIC GROUP BY department;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT city, COUNT(*) AS total_employees
# MAGIC FROM employees
# MAGIC GROUP BY city;

# COMMAND ----------

# MAGIC %sql
# MAGIC SELECT salary FROM employees;

# COMMAND ----------

# MAGIC %sql
# MAGIC CREATE TABLE employee_salary_analysis AS
# MAGIC SELECT 
# MAGIC     emp_name,
# MAGIC     city,
# MAGIC     department,
# MAGIC     salary,
# MAGIC     experience,
# MAGIC
# MAGIC     CASE
# MAGIC         WHEN salary >= 95000 THEN 'High'
# MAGIC         WHEN salary >= 80000 THEN 'Medium'
# MAGIC         ELSE 'Low'
# MAGIC     END AS salary_category,
# MAGIC
# MAGIC     AVG(salary) OVER (PARTITION BY department) AS department_avg_salary
# MAGIC
# MAGIC FROM employees;