CREATE DATABASE expense_monitoring;

USE expense_monitoring;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15)
);

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50)
);

CREATE TABLE expenses (
    expense_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    category_id INT,
    amount DECIMAL(10,2),
    expense_date DATE,
    description VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

INSERT INTO users(full_name, email, phone)
VALUES
('John Doe', 'john@gmail.com', '9876543210'),
('Alice Smith', 'alice@gmail.com', '9123456780');

INSERT INTO categories(category_name)
VALUES
('Food'),
('Travel'),
('Shopping'),
('Bills');

INSERT INTO expenses(user_id, category_id, amount, expense_date, description)
VALUES
(1, 1, 500, '2026-05-01', 'Restaurant'),
(1, 2, 1200, '2026-05-02', 'Bus Ticket'),
(2, 3, 3000, '2026-05-03', 'Clothes'),
(2, 4, 2500, '2026-05-04', 'Electricity Bill');

SELECT * FROM expenses;

UPDATE expenses
SET amount = 1500
WHERE expense_id = 2;

DELETE FROM expenses
WHERE expense_id = 4;

DELIMITER //

CREATE PROCEDURE MonthlyExpenseSummary()
BEGIN
    SELECT 
        c.category_name,
        MONTH(e.expense_date) AS month_number,
        SUM(e.amount) AS total_expense
    FROM expenses e
    JOIN categories c
    ON e.category_id = c.category_id
    GROUP BY c.category_name, MONTH(e.expense_date);
END //

DELIMITER ;

CALL MonthlyExpenseSummary();







