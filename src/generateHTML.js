// generates the team card for the manager based on user input
function generateManagerCard(manager) {
    const managerCard = `<div class="card bg-success text-white" style="width: 250px">
            <div class="card-body">
                <div class="card-header bg-success text-white">
                    <h3 class="card-title">${manager.getName()}</h5>
                    <h4>${manager.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-bg-secondary">ID: ${manager.getID()}</li>
                    <li class="list-group-item text-bg-light">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item text-bg-secondary">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`;
    return managerCard;
}

// generates the team card for the engineer based on user input
function generateEngineerCard(engineer) {
    const engineerCard = `<div class="card bg-success text-white" style="width: 250px">
            <div class="card-body">
            <div class="card-header bg-success text-white">
                <h3 class="card-title">${engineer.getName()}</h5>
                <h4>${engineer.getRole()}</h6>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-bg-secondary">ID: ${engineer.getID()}</li>
                    <li class="list-group-item text-bg-light">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item text-bg-secondary">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`;
    return engineerCard;
}

// generates the team card for the intern based on user input
function generateInternCard(intern) {
        const internCard = `<div class="card bg-success text-white" style="width: 250px">
            <div class="card-body">
            <div class="card-header bg-success text-white">
                <h3 class="card-title">${intern.getName()}</h5>
                <h4>${intern.getRole()}</h6>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-bg-secondary">ID: ${intern.getID()}</li>
                    <li class="list-group-item text-bg-light">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item text-bg-secondary">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
        return internCard;
}

// push generated html from previous functions into one array to more easily access data from index.js
function renderer(employees) {
    const page = [];
    page.push(
    employees
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManagerCard(manager))
    );
    page.push(
    employees
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineerCard(engineer)).join('')
    );
    page.push(
    employees
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateInternCard(intern))
    );
    return page.join('');
}

// generates the webpage
function generateHTML(page) {
    const webpage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron bg-success text-white" style="height: 100px">
            <h1 class="display-4 text-center">My Team</h1>
        </div>
        <div class="card-deck mt-5 d-flex flex-row justify-content-around align-items-center">
            ${renderer(page)}
        </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossorigin="anonymous"></script>
    </body>
    </html>
`
    return webpage;
}

module.exports = generateHTML;