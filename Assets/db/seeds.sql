--departments 
INSERT INTO department (id, name) VALUES 
(1, 'Sales'),
(2, 'Marketing'),
(3, 'IT');

--roles
INSERT INTO ROLE (id, title, salary, department_id) VALUES
(1, 'Sales Manager', 82000, 1),
(2, 'Sales Representative', 62000, 1),
(3, 'Marketing Manager', 85000, 2),
(4, 'Marketing Coordinator', 66000, 2),
(5, 'Software Engineer', 150000, 3),
(6, 'Software Developer', 98000, 3);

--employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Brittney', 'Tong', 1, NULL),
(2, 'Allison', 'Sousan', 2, 1),
(3, 'Halle', 'Rossi', 3, NULL),
(4, 'Anna Charlotte', 'Lavers', 4, 3),
(5, 'Jen', 'Park', 5, NULL),
(6, 'Julia', 'Syrek', 6, 5);