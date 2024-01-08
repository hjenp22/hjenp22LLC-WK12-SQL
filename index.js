const inquirer = require("inquirer");
const { addEmployee } = require("./Assets/config/mysql");


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
            type: "input",
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
        console.log("Prompt answers:", employee);
        addEmployee(employee);
        console.log("After addEmployee"); // Add this line for logging
    })
    .catch(error => {
        console.error("Error during inquirer prompt:", error);
    });

// .then(employee => {
//     addEmployee(employee);
// });

// .then(employee => {
//     console.log(employee);
//     db.query("INSERT INTO employee (first_name, last_name, manager_id) VALUES (?, ?);", [employee.name, employee.role == "Manager"], (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Success!")
//         });