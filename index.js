const inquirer = require("inquirer");
const db = require("./mysql");

inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter Employee Name"
        },
        {
            type: "list",
            name: "name",
            message: "Enter Employee Name",
            choices: ["Employee", "Manager"]
        },    
])
.then(employee => {
    console.log(employee);
});