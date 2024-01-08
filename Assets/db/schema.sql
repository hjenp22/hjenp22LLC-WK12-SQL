DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

--department TABLE
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

--role TABLE
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    SALARY DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

--employee TABLE
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

ALTER TABLE role
ADD COLUMN manager_id INT,
ADD FOREIGN KEY (manager_id) REFERENCES employee(id);

ALTER TABLE employee
ADD COLUMN role_id INT,
ADD FOREIGN KEY (role_id) REFERENCES role(id);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);