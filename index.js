const inquirer = require("inquirer");
const db = require("./my");

inquirer.createPromptModule(
    [
        {
            type: "input",
            name: "name",
            message: "Enter Employee Name"
        },
        {
            type: "list",
            name: "name",
            message: "Enter Employee Name",
            choices: ["Employee", "Manager"]
        },    
    ]
)
.then(employee => {
    console.log(employee);
})