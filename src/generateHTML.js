// Packages needed for this application
const fs = require('fs');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function createManagerHTML(fileName, emp) {

    let content = "";

    let head = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n<meta charset=\"UTF-8\">\<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>My Team</title>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" />\n<link rel=\"stylesheet\" href=\"./assets/css/style.css\" />\n</head>\n\n";

    content += head;

    let body = "<body>\n\n<header class=\"p-1 mb-3 text-light justify-content-center\">\n<h1>My Team</h1>\n</header>\n<main class=\"container justify-content-center\">\n<section class=\"row mainContainer\">\n";

    content += body;

    let mgr = `<div class=\"card p-3 m-5 col-12 col-sm-6 col-lg-4\">\n<div class=\"card-header text-light\">\n${emp.name} <br>☕ Manager\n</div>\n<ul class=\"list-group list-group-flush\">\n<li class="list-group-item">id: ${emp.id}</li>\n<li class=\"list-group-item\">Email: <a href=\"mailto:${emp.email}">${emp.email}</a></li>\n<li class=\"list-group-item\">Office Number: ${emp.officeNumber}</li>\n</ul>\n</div>\n\n`;

    content += mgr;

    fs.appendFileSync(fileName, content, (err) =>
        err ? console.log(err) : console.log('Manager success!')
    );

}

function appendTeamHTML(fileName, empType, emp) {

    let content = "";

    let team = "";

    if (empType === "engineer") {

        team = `<div class=\"card p-3 m-5 col-12 col-sm-6 col-lg-4\">\n<div class=\"card-header text-light\">\n${emp.name} <br>👓 Engineer\n</div>\n<ul class=\"list-group list-group-flush\">\n<li class="list-group-item">id: ${emp.id}</li>\n<li class=\"list-group-item\">Email: <a href=\"mailto:${emp.email}">${emp.email}</a></li>\n<li class=\"list-group-item\">GitHub: <a
        href=\"https://github.com/${emp.github}\" target=\"_blank\">${emp.github}</a></li>\n</ul>\n</div>\n\n`;

    } else {

        team = `<div class=\"card p-3 m-5 col-12 col-sm-6 col-lg-4\">\n<div class=\"card-header text-light\">\n${emp.name} <br>🎓Intern\n</div>\n<ul class=\"list-group list-group-flush\">\n<li class="list-group-item">id: ${emp.id}</li>\n<li class=\"list-group-item\">Email: <a href=\"mailto:${emp.email}">${emp.email}</a></li>\n<li class=\"list-group-item\">School: ${emp.school}</li>\n</ul>\n</div>\n\n`;

    }

    content += team;

    fs.appendFileSync(fileName, content, (err) =>
        err ? console.log(err) : console.log('Team success!')
    );

}

function closeHTML(fileName) {

    let content = "</section>\n</main>\n</section>\n</body>\n</html>";

    fs.appendFileSync(fileName, content, (err) =>
        err ? console.log(err) : console.log('Close success!')
    );

}

function generateHTML(fileName, empType, emp) {
    //create index.html file and add headers and content to it for manager
    if (empType === "manager") {
        createManagerHTML(fileName, emp);
    } //append engineers and interns
    else if (empType === "engineer" || empType === "intern") {
        appendTeamHTML(fileName, empType, emp);
    } else { //close the file 
        closeHTML(fileName);
    }
}

module.exports = generateHTML;