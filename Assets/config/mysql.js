const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'bleuinChicago22!',
      database: 'empoloyee_db'
    },
    console.log(`Connected to the emoloyee_db database.`)
  );

module.exports = db;