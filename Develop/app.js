const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

After you have your html, you're now ready to create an HTML file using the HTML
returned from the `render` function. Now write it to a file named `team.html` in the
`output` folder. You can use the variable `outputPath` above target this location.
Hint: you may need to check if the `output` folder exists and create it if it
does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
  
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Choices = require("inquirer/lib/objects/choices");

// const writeFileAsync = util.promisify(fs.writeFile);


function managerPrompt() {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your managers name?"
        },
        {
        type: "input",
        name: "id",
        message: "What is your managers id number?"
        },
        {
        type: "input",
        name: "email",
        message: "What is your managers email address?"
        },
        {
        type: "input",
        name: "officeNumber",
        message: "What is your managers office number?"
        },
        {
        type: "input",
        name: "newmember",
        message: "What type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "None"]
        },
  ]);
}

function engineerPrompt () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineers name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineers id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineers email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineers Github username?"
        },
        {
            type: "list",
            name: "newmember",
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "None"]
        },
    ]);

}

function internPrompt () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your interns name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your interns id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your interns email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school did your intern attend?"
        },
        {
            type: "list",
            name: "newmember",
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "None"]
            },
        ]);

}


const employees = []




function setManager(response){
    const response = await managerPrompt();
    employees.push(response.name);
    employees.push(response.id);
    employees.push(response.email);
    employees.push(response.officeNumber);
    

}

function setEngineer(response){
    const response = await managerPrompt();
    employees.push(response.name);
    employees.push(response.id);
    employees.push(response.email);
    employees.push(response.github);

}

function setManager(response){
    const response = await managerPrompt();
    employees.push(response.name);
    employees.push(response.id);
    employees.push(response.email);
    employees.push(response.school);

}


function nextEmployee(response){
    if (`${response.newmember}` === "Manager") {
        managerPrompt();
    }
    else if (`${response.newmember}` === "Engineer") {
        engineerPrompt ();
    }
    else if (`${response.newmember}` === "Intern") {
        internPrompt ();
    }
    else if (`${response.newmember}` === "None") {
        render ();
    }
}


setIntern();

setEngineer();

managerPrompt();

nextEmployee();