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
        {
            type: "type",
            name: "manager_id",
            message: "Enter Manager's ID if applicable",
            when: (answers) => answers.type === "Employee"
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter your job Role",
        },
        
])
.then(employee => {
    addEmployee(employee);
});

// .then(employee => {
//     console.log(employee);
//     db.query("INSERT INTO employee (first_name, last_name, manager_id) VALUES (?, ?);", [employee.name, employee.role == "Manager"], (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Success!")
//         });