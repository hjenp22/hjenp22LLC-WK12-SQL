const mysql = require("mysql2");
const { addEmployee } = require("./Assets/config/mysql");


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'bleuinChicago22!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

  db.connect((err) => {
    if (err) {
      console.error('Error connecting tot he database:', errr);
      return;
    }
    console.log('Connected to the company_db database');
  });

  const addEmployee = (employee) => {
    const { first_name, last_name, role_id, manager_id } = employee;
  
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);",
      [first_name, last_name, role_id, manager_id || null],
      (err, result) => {
        if (err) {
          console.error('Error adding employee to the database:', err);
        } else {
          console.log("Employee added successfully!");
        }
      }
    );
  };

module.exports = { db, addEmployee, closeConnection: () => db.end() };
