const inquirer = require("inquirer");
const db = require("./Assets/config/mysql");


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
            { name: "Add a Department", value: "addDepartment" },
            { name: "Add a Role", value: "addRole" },
            { name: "Add an Employee", value: "addEmployee" },
            { name: "Update an Employee Role", value: "updateEmployeeRole" },
            { name: "Exit", value: "Exit" },
          ],
        },
      ])
      .then((answer) => {
        switch (answer.action) {
          case "departmentList":
            viewDepartment()
            break;
          case "addDepartment":
            addDepartment()
            break;
          case "rolesList":
            viewRoles()
            break;
          case "addRole":
            addRole()
            break;
          case "employeesList":
            viewEmployee()
            break;
          case "addEmployee":
             addEmployee()
            break;
          case "updateEmployeeRole":
            updateEmployeeRole()
            break;
          default:
            process.exit()
            break;
        }
      });
  };
  
  menu();

  function viewDepartment(){
    db.query("SELECT * FROM department;", (err, movies) => {
      console.table(movies);
      menu();
  })
}

function addDepartment(){
  //ask for the name of department 
  inquirer
  .prompt([
    {
      name: "departmentName",
      message: "What department do you want to add?"
    }
  ])
  .then((answers)=> {
    console.log(answers);
    db.query(`INSERT INTO department (name) VALUES ("${answers.departmentName}");`, (err, data)=> {
      console.log("Department has been added");
      menu();
    })
  })
}


function viewRoles(){
  db.query("SELECT role.id, role.title, role.salary, department.id AS department_id, department.name AS department_name FROM role JOIN department ON role.department_id = department.id;", (err, roles) => {
    if (err) {
      console.error("Error fetching roles:", err);
    } else {
      console.table(roles);
    }
    menu();
  });
}

function addRole(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What role do you want to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role",
      },
    ])
    .then((answers) => {
      console.log(answers);
      menu();
    });
}
// Function to view all employees
function viewEmployee() {
  // Execute the query to fetch employee data
  db.query("SELECT * FROM employee;", (err, employees) => {
    if (err) {
      console.error("Error fetching employees:", err);
    } else {
      // Display the employee data in a tabular format
      console.table(employees);
    }
    // Display the menu again
    menu();
  });
}

function addEmployee() {
  // Fetch roles from the database to provide a list of choices
  db.query("SELECT id, title FROM role", (err, roles) => {
    if (err) {
      console.error("Error fetching roles:", err);
    } else {
      // Extract role titles from the fetched data to use as choices
      const roleChoices = roles.map((role) => ({ name: role.title, value: role.id }));

      // Prompt user for employee details including role selection
      inquirer
        .prompt([
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
            type: "list",
            name: "role_id",
            message: "Select the employee's role",
            choices: roleChoices,
          },
        ])
        .then((employee) => {
          // Insert the employee details into the database
          db.query(
            `INSERT INTO employee (name, type, manager_id, role_id) VALUES (?, ?, ?, ?);`,
            [employee.employeeName, employee.type, employee.manager_id, employee.role_id],
            (err, data) => {
              if (err) {
                console.error("Error adding employee:", err);
              } else {
                console.log("Employee has been added");
              }
              // Display the menu again
              menu();
            }
          );
        })
        .catch((error) => {
          console.error("Error during inquirer prompt:", error);
        });
    }
  });
}

function updateEmployeeRole() {
  // Fetch employee names and roles from the database to provide choices
  db.query("SELECT id, CONCAT(first_name, ' ', last_name) AS employee_name FROM employee", (err, employees) => {
    if (err) {
      console.error("Error fetching employees:", err);
    } else {
      const employeeChoices = employees.map((employee) => ({ name: employee.employee_name, value: employee.id }));

      db.query("SELECT id, title FROM role", (err, roles) => {
        if (err) {
          console.error("Error fetching roles:", err);
        } else {
          const roleChoices = roles.map((role) => ({ name: role.title, value: role.id }));

          // Prompt user for employee and new role selection
          inquirer
            .prompt([
              {
                type: "list",
                name: "employee_id",
                message: "Select the employee to update",
                choices: employeeChoices,
              },
              {
                type: "list",
                name: "new_role_id",
                message: "Select the new role for the employee",
                choices: roleChoices,
              },
            ])
            .then((answers) => {
              // Update the employee's role in the database
              db.query(
                `UPDATE employee SET role_id = ? WHERE id = ?;`,
                [answers.new_role_id, answers.employee_id],
                (err, data) => {
                  if (err) {
                    console.error("Error updating employee role:", err);
                  } else {
                    console.log("Employee role has been updated");
                  }
                  // Display the menu again
                  menu();
                }
              );
            })
            .catch((error) => {
              console.error("Error during inquirer prompt:", error);
            });
        }
      });
    }
  });
}
