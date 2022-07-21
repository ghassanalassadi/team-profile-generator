// calling classes and js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

// calling js libraries
const fs = require('fs');


// runs the application
function runApp() {
    generateTeam().then((userInput) => {
        switch(userInput.employeeRoleQuestion) {
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
}

// calls the 'generateHTML' file to generate the website
function generateWebsite() {
    console.log('Generating webpage...');
    fs.writeFileSync()
}