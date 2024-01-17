USE company_db;

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name) VALUES ('Brittney', 'Tong');

-- Select all records from the employee table
SELECT * FROM employee;

-- Insert data into the department table
INSERT INTO department (name) VALUES ("Management");

-- Select all records from the department table
SELECT * FROM department;

-- Select specific columns from the department table
SELECT id, name FROM department;

-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES ("Sales Representative", 82000, 1);

-- Select all records from the role table
SELECT * FROM role;

-- Select role details with department information
SELECT role.id, role.title, role.salary, department.id AS department_id, department.name AS department_name
FROM role
JOIN department ON role.department_id = department.id;

-- Select manager names
SELECT CONCAT(first_name, ' ', last_name) AS manager_name FROM employee;

-- Select detailed employee information with manager details
SELECT employee.id AS employee_id,
    employee.first_name,
    employee.last_name,
    role.id AS role_id,
    role.title AS role_title,
    role.salary AS role_salary,
    department.id AS department_id,
    department.name AS department_name,
    manager.id AS manager_id,
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee AS manager ON employee.manager_id = manager.id OR employee.manager_id IS NULL;

SELECT CONCAT(first_name, ' ', last_name) AS employees_name from employee;
-- Update employee role
UPDATE employee 
SET role_id = (
    SELECT id
    FROM role
    WHERE title = 'Sales Representative'
    LIMIT 1
)
WHERE first_name = 'Brittney' AND last_name = 'Tong';

-- Update employee manager using JOIN
UPDATE employee AS e1
INNER JOIN employee AS e2 ON e1.manager_id = e2.id
SET e1.manager_id = e2.id
WHERE e1.first_name = 'Jeff' AND e1.last_name = 'Fab'
AND e2.first_name = 'Sean' AND e2.last_name = 'Harrigan';

-- Select specific employee and manager details after update
SELECT e1.*, e2.*
FROM employee AS e1
INNER JOIN employee AS e2 ON e1.manager_id = e2.id
WHERE e1.first_name = 'Sean' AND e1.last_name = 'Harrigan' AND e2.first_name = 'Jeff' AND e2.last_name = 'Fab';

-- Update employee manager by ID
UPDATE employee SET manager_id = 2 WHERE first_name = 'Jaimie' AND last_name = 'Belle';

SHOW TABLE;