const mysql = require("mysql2");
const { addEmployee } = require("./Assets/config/mysql");


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'bleuinChicago22!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );


module.exports = { db, addEmployee };
