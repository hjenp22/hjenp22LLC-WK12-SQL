USE company_db

INSERT INTO employee (first_name, last_name, manager_id) VALUES("Brittney", 'Tong');

SELECT * FROM employee;

INSERT INTO department (name) VALUES ("Management"); 

SELECT * FROM department;

SELECT id, name FROM department

INSERT INTO role (title, salary, department_id) VALUES ("Sales Representative", 82000, 1);

SELECT * FROM role;





SHOW TABLES;
