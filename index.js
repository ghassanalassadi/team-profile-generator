const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');


// runs the application
function runApp() {

}

function addManager() {

}

function addEngineer() {

}

function addIntern() {

}

// generates team
function generateTeam() {

}

const questions = [
    {
        type: 'list',
        name: 'position',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email'
    }
]