// calling classes and js files
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generateHTML.js');

// calling js libraries
const fs = require('fs');
const inquirer = require('inquirer');

const employeeArray = [];
// runs the application
function runApp() {
    generateTeam();
}

function addManager() {
    const managerQuestions = [
        {
            type: 'input',
            name: 'managerName',
            message: "Enter the manager's name"
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Enter the manager's employee ID"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Enter the manager's office number"
        }
    ]
    inquirer.prompt(managerQuestions).then((response) => {
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber);
        employeeArray.push(manager);
        generateTeam();
    })
}

function addEngineer() {
        const engineerQuestions = [
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the engineer's name"
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Enter the engineer's employee ID"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter the engineer's email"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter the engineer's github username"
        }
    ]
    inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
        employeeArray.push(engineer);
        generateTeam();
    })
}

function addIntern() {
        const internQuestions = [
        {
            type: 'input',
            name: 'internName',
            message: "Enter the intern's name"
        },
        {
            type: 'input',
            name: 'internID',
            message: "Enter the intern's employee ID"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter the intern's email"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter the name of the school the intern attends"
        }
    ]
    inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        employeeArray.push(intern);
        generateTeam();
    })
}

// generates team
function generateTeam() {
    const employeeRoleQuestion = [
        {
            type: 'list',
            name: 'employeeRole',
            message: "Which employee role would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'None']
        }
    ]
    inquirer.prompt(employeeRoleQuestion).then((userInput) => {
        switch(userInput.employeeRole) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'None':
                generateWebsite();
                break;
            default:
                generateWebsite();
        }
    })
}

// calls the 'generateHTML' file to generate the website
function generateWebsite() {
    console.log('Generating webpage...');
    // console.log(employeeArray);
    fs.writeFileSync('./dist/index.html', generateHTML(employeeArray), 'utf-8');
}

runApp();