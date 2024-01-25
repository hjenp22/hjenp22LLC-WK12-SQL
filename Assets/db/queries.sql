USE company_db;
--calling these queries using JS--
-- Insert data into the employee table
INSERT INTO employee (first_name, last_name) VALUES ('Brittney', 'Tong');

-- Select all records from the employee table
SELECT * FROM employee;

-- Select all records from the department table
SELECT * FROM department;

-- Select specific columns from the department table
SELECT id, name FROM department;

-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES ("Sales Representative", 82000, 1);

-- Select all records from the role table
SELECT * FROM role;



-- Select manager names
SELECT CONCAT(first_name, ' ', last_name) AS manager_name FROM employee;


SELECT CONCAT(first_name, ' ', last_name) AS employees_name from employee;
-- Update employee role

