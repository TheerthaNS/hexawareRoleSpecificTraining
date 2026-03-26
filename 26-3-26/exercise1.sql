CREATE DATABASE company_training;
USE company_training;
CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(100),
  department VARCHAR(50),
  city VARCHAR(50)
);
CREATE TABLE projects (
  project_id INT PRIMARY KEY,
  emp_id INT,
  project_name VARCHAR(100),
  project_budget DECIMAL(12,2)
  project_status VARCHAR(50)
);
INSERT INTO employees VALUES (1,'Rohan Mehta','IT','Hyderabad'), 
(2,'Sneha Iyer','IT','Bangalore'),
(3,'Kiran Patel','Finance','Mumbai'),
(4,'Ananya Das','HR',NULL),
(5,'Rahul Sharma','IT','Delhi'),
(6,NULL,'Marketing','Chennai');
INSERT INTO projects VALUES (101,1,'AI Chatbot',120000,'Active'),
(102,1,'ML Prediction',90000,'Active'),
(103,2,'Data Warehouse',150000,'Active'),
(104,3,'Financial Dashboard',80000,'Completed'),
(105,NULL,'Website Revmap',60000,'Pending'),
(106,8,'Mobile App',100000,'Active'),
-- 1
SELECT e.emp_name, p.project_name, p.project_budget FROM employees e INNER JOIN projects p ON e.emp_id = p.emp_id;
-- 2
SELECT e.emp_name, p.project_name FROM employees e LEFT JOIN projects p ON e.emp_id = p.emp_id;
-- 3
SELECT e.emp_name, p.project_name FROM employees e RIGHT JOIN projects p ON e.emp_id = p.emp_id;
-- 4
SELECT e.emp_name, p.project_name FROM employees e LEFT JOIN projects p ON e.emp_id = p.emp_id
UNION
SELECT e.emp_name, p.project_name FROM employees e RIGHT JOIN projects p ON e.emp_id = p.emp_id;
-- 5
SELECT e.emp_name, p.project_name FROM employees e CROSS JOIN projects p;
-- 6
SELECT e.emp_name, p.project_name FROM employees e JOIN projects p ON e.emp_id = p.emp_id WHERE e.department = 'IT';
-- 7
SELECT project_name, project_budget FROM projects WHERE project_budget > 100000;
-- 8
SELECT e.emp_name, p.project_name FROM employees e JOIN projects p ON e.emp_id = p.emp_id WHERE e.city = 'Hyderabad';
-- 9
SELECT e.emp_name, COUNT(p.project_id) AS total_projects FROM employees e LEFT JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.emp_name;
-- 10
SELECT e.emp_name, SUM(p.project_budget) AS total_budget FROM employees e LEFT JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.emp_name;
-- 11
SELECT e.department, AVG(p.project_budget) AS avg_budget FROM employees e JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.department;
-- 12
SELECT e.department, COUNT(p.project_id) AS total_projects FROM employees e LEFT JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.department;
-- 13
SELECT e.department, SUM(p.project_budget) AS total_budget FROM employees e JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.department;
-- 14
SELECT city, COUNT(*) AS total_employees FROM employees GROUP BY city;
-- 15
SELECT e.emp_name, COUNT(p.project_id) AS total_projects FROM employees e JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.emp_name HAVING COUNT(p.project_id) > 1;
-- 16
SELECT e.department, SUM(p.project_budget) AS total_budget FROM employees e JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.department HAVING SUM(p.project_budget) > 150000;
-- 17
SELECT e.emp_name, SUM(p.project_budget) AS total_budget FROM employees e JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.emp_name HAVING SUM(p.project_budget) > 100000;
-- capstone
SELECT e.emp_name, e.department, SUM(p.project_budget) AS total_budget
FROM employees e JOIN projects p ON e.emp_id = p.emp_id GROUP BY e.emp_name, e.department HAVING SUM(p.project_budget) > 100000
ORDER BY total_budget DESC;



