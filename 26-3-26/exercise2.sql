CREATE DATABASE capstone_sql;
USE capstone_sql;
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    city VARCHAR(50),
    age INT
);
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_name VARCHAR(100),
    trainer VARCHAR(100),
    fee DECIMAL(10,2)
);
INSERT INTO students (student_id,student_name,city,age) VALUES (1,'Aarav Sharma','Hyderabad',22),
(2,'Priya Reddy','Bangalore',23),
(3,'Rahul Verma','Mumbai',24),
(4,'Sneha Kapoor',NULL,21),
(5,'Vikram Singh','Chennai',25),
(6,NULL,'Delhi',22);
INSERT INTO enrollments (enrollment_id,student_id,course_name,trainer,fee) VALUES (101,1,'MySQL','Abdullah Khan',5000),
(102,1,'Python','Abdullah Khan',7000),
(103,2,'Power BI','Kiran',6000),
(104,3,'Azure Data Factory','Sneha',8000),
(105,NULL,'Excel','Rohan',3000),
(106,8,'Databricks','Ananya',9000);
-- 1
SELECT s.student_name, e.course_name FROM students s INNER JOIN enrollments e ON s.student_id = e.student_id;
-- 2
SELECT s.student_name, e.course_name FROM students s LEFT JOIN enrollments e ON s.student_id = e.student_id;
-- 3
SELECT s.student_name, e.course_name FROM students s RIGHT JOIN enrollments e ON s.student_id = e.student_id;
-- 4
SELECT s.student_name, e.course_name FROM students s LEFT JOIN enrollments e ON s.student_id = e.student_id UNION
SELECT s.student_name, e.course_name FROM students s RIGHT JOIN enrollments e ON s.student_id = e.student_id;
-- 5
SELECT s.student_name, e.course_name FROM students s CROSS JOIN enrollments e;
-- 6
SELECT s.student_name, e.course_name FROM students s JOIN enrollments e ON s.student_id = e.student_id WHERE s.city = 'Hyderabad';
-- 7
SELECT course_name, fee FROM enrollments WHERE fee > 6000;
-- 8
SELECT s.student_name, COUNT(e.course_name) AS total_courses FROM students s LEFT JOIN enrollments e ON s.student_id = e.student_id GROUP BY s.student_name;
-- 9
SELECT s.student_name, SUM(e.fee) AS total_fee FROM students s LEFT JOIN enrollments e ON s.student_id = e.student_id GROUP BY s.student_name;
-- 10
SELECT s.student_name, COUNT(e.course_name) AS total_courses FROM students s JOIN enrollments e ON s.student_id = e.student_id GROUP BY s.student_name HAVING COUNT(e.course_name) > 1;
-- 11
SELECT trainer, SUM(fee) AS total_fee FROM enrollments GROUP BY trainer HAVING SUM(fee) > 10000;
-- 12
SELECT city, COUNT(*) AS total_students FROM students GROUP BY city HAVING COUNT(*) > 1;
-- capstone
SELECT s.student_name,s.city,
SUM(e.fee) AS total_fee_paid FROM students s
JOIN enrollments e ON s.student_id = e.student_id GROUP BY s.student_name, s.city HAVING SUM(e.fee) > 5000 ORDER BY total_fee_paid DESC;
