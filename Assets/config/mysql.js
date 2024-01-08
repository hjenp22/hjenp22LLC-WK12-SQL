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







module.exports = { db, addEmployee };
