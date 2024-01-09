const inquirer = require("inquirer");
const { addDepartment, viewDepartments } = require("./Assets/config/department");


const db = require("./config/mysql");


const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                text: "Choose an option",
                name: "menuChoice",
                choices: [
                    "Add New Department",
                    "View All Departments",
                    "Exit",
                ],
            },
        ])
        .then((answers) => {
            switch (answers.menuChoice) {
                case "Add New Department":
                    addDepartment(mainMenu);
                    break;
                case "View All Departments":
                    viewDepartments(mainMenu);
                    break;
                case "Exit":
                    console.log("Exiting the application.");
                    db.closeConnection(); 
                    break;
                default:
                    console.log("Invalid choice. Please select a valid option.");
                    mainMenu();
                    break;
            }
        })
        .catch((error) => {
            console.error("Error during inquirer prompt:", error);
        });
};


mainMenu();