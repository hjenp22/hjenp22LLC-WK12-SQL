const inquirer = require('inquirer');
const {
    addEmployee,
    viewEmployees,
    updateEmployeeRole,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
} = require("../config/mysql");

const mainMenu = () => {
    inquirer
    .prompt([
        {
          type: "list",
          name: "menuChoice",
          message: "What would you like to do?",
          choices: [
            "Add New Employee",
            "View All Employees",
            "Update Employee Role",
            "Update Employee Manager",
            "View Employees by Manager",
            "View Employees by Department",
            "Exit",
          ],
        },
      ])
      .then((answers) => {
        switch (answers.menuChoice) {
          case "Add New Employee":
            addEmployee(mainMenu);
            break;
          case "View All Employees":
            viewEmployees(mainMenu);
            break;
          case "Update Employee Role":
            updateEmployeeRole(mainMenu);
            break;
          case "Update Employee Manager":
            updateEmployeeManager(mainMenu);
            break;
          case "View Employees by Manager":
            viewEmployeesByManager(mainMenu);
            break;
          case "View Employees by Department":
            viewEmployeesByDepartment(mainMenu);
            break;
          case "Exit":
            console.log("Exiting the Employee Management System.");
            break;
          default:
            console.log("Invalid choice. Please select a valid option.");
            mainMenu();
            break;
        }
      });
  };
  
  
  console.log("Welcome to the Employee Management System!");
  mainMenu();