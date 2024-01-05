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
    db.query("INSERTINTO emmployees")
});