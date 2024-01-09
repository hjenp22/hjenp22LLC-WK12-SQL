USE company_db

INSERT INTO employee (first_name, last_name) VALUES('Brittney', 'Tong');

SELECT * FROM employee;

INSERT INTO department (name) VALUES ("Management"); 

SELECT * FROM department;

SELECT id, name FROM department

INSERT INTO role (title, salary, department_id) VALUES ("Sales Representative", 82000, 1);

SELECT * FROM role;

SELECT role.id, role.title, role.salary, department.id AS department_id, departments.name AS department_name
FROM role
Join department ON role.departments_id = department.id;

SELECT CONCAT(first_name, ' ', last_name) AS manager_name FROM employee;

SELECT employee.id AS employees_id,
employee.frist_name,
employee.last_name,
role.id AS roles_id,
role.title AS roles_title,
role.salary AS roles_salary,
department.id AS departments_name,
manager.id AS managers_id,
CONCAT(manager.first_name, ' ', manager.last_name) AS managers_name
FROM employee
JOIN role ON employee.roles_id = role.id
JOIN department on role.departments_id = department_id
LEFT JOIN employee AS manager ON employee.managers_id = managers.id or employee.manager_id IS NULL;




SHOW TABLES;
