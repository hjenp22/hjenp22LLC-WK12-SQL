const inquirer = require("inquirer");
const db = require("./db");

inquirer.createPromptModule(
    [
        {
            type: "input",
            name: "name",
            message: "Enter Employee Name"
        },
        {
            type: "input",
            name: "name",
            message: "Enter Employee Name"
        },    
    ]
)
