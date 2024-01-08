const inquirer = require("inquirer");
const db = require("./Assets/config/mysql");

inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter Employee Name"
        },
        {
            type: "list",
            name: "type",
            message: "Manager or Employee? ",
            choices: ["Employee", "Manager"]
        },    
])
.then(employee => {
    console.log(employee);
    db.query("INSERT INTO employee (first_name, last_name, manager_id) VALUES (?, ?);", [employee.name, employee.role == "Manager"], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!")
        });