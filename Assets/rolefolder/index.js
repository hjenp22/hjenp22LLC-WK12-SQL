const inquirer = require("inquirer");
const {addRole, viewRoles} = require("../rolefolder/index.js");

const db = require("../config/mysql.js")

const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "menuChoice",
                message: "Select an option:",
                choices: [
                    "Add a new role",
                    "View all roles",
                    "EXIT",
                ],
            },
        ])
        .then((answers) => {
            switch (answers.menuChoice) {
              case "Add New Role":
                addRole(mainMenu);
                break;
              case "View All Roles":
                viewRoles(mainMenu);
                break;
              case "Exit":
                console.log("Exiting the application.");
                db.closeConnection(); // Close the database connection
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
      
      // Start the main menu
      mainMenu();

      