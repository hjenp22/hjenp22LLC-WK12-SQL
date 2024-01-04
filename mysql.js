const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'bleuinChicago22!',
        database:'employee_db'
    },
    console.log("connected to the employee_db database")
);

module.exports = db;