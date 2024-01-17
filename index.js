const inquirer = require("inquirer");
const { addEmployee } = require("./Assets/config/mysql");


const promptEmployeeDetails = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "employeeName",
        message: "Enter Employee Name",
      },
      {
        type: "list",
        name: "type",
        message: "Manager or Employee? ",
        choices: ["Employee", "Manager"],
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter Manager's ID if applicable",
        when: (answers) => answers.type === "Employee",
      },
      {
        type: "input",
        name: "role_id",
        message: "Enter your job Role",
      },
    ]);
  };
  
 
  const addEmployeeAndShowMenu = () => {
    promptEmployeeDetails()
      .then((employee) => {
        console.log("Prompt answers:", employee);

        addEmployee(db, employee);
        console.log("After addEmployee"); 
      })
      .catch((error) => {
        console.error("Error during inquirer prompt:", error);
      })
      .finally(() => {
        // Display the menu again
        menu();
      });
  };


const menu = () => {
    inquirer
      .prompt([
        {
          type: "list",
          text: "What would you like to do?",
          name: "action",
          choices: [
            { name: "View all Departments", value: "departmentList" },
            { name: "View all Roles", value: "rolesList" },
            { name: "View all Employees", value: "employeesList" },
            { name: "View Employees by Manager", value: "employeesByManager" },
            { name: "View Employees by Department", value: "employeesByDepartment" },
            { name: "Add a Department", value: "addDepartment" },
            { name: "Add a Role", value: "addRole" },
            { name: "Add an Employee", value: "addEmployee" },
            { name: "Update an Employee Role", value: "updateEmployeeRole" },
            { name: "Update an Employee Manager", value: "updateEmployeeManager" },
          ],
        },
      ])
      .then((answer) => {
        switch (answer.action) {
          case "departmentList":
            viewDepartments(menu);
            break;
          case "addDepartment":
            addDepartment(menu);
            break;
          case "rolesList":
            viewRoles(menu);
            break;
          case "addRole":
            addRole(menu);
            break;
          case "employeesList":
            viewEmployees(menu);
            break;
          case "employeesByManager":
            viewEmployeesByManager(menu);
            break;
          case "employeesByDepartment":
            viewEmployeesByDepartment(menu);
            break;
          case "addEmployee":
            addEmployeeAndShowMenu(); 
            break;
          case "updateEmployeeRole":
            updateEmployeeRole(menu);
            break;
          case "updateEmployeeManager":
            updateEmployeeManager(menu);
            break;
          default:
            break;
        }
      });
  };
  
  menu();

// inquirer.prompt([
//         {
//             type: "input",
//             name: "employeeName",
//             message: "Enter Employee Name"
//         },
//         {
//             type: "list",
//             name: "type",
//             message: "Manager or Employee? ",
//             choices: ["Employee", "Manager"]
//         },
//         {
//             type: "input",
//             name: "manager_id",
//             message: "Enter Manager's ID if applicable",
//             when: (answers) => answers.type === "Employee"
//         },
//         {
//             type: "input",
//             name: "role_id",
//             message: "Enter your job Role",
//         },
        
// ])

//     .then(employee => {
//         console.log("Prompt answers:", employee);
//         addEmployee(employee);
//         console.log("After addEmployee"); // Add this line for logging
//     })
//     .catch(error => {
//         console.error("Error during inquirer prompt:", error);
//     });

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