// Packages needed for this application
const fs = require('fs');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function createManagerHTML(fileName, emp){

 let content = "";

 let head = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n&emsp;<meta charset=\"UTF-8\">\&emsp;<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n&emsp;<title>My Team</title>\n&emsp;<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" />\n&emsp;<link rel=\"stylesheet\" href=\"./dist/assets/css/style.css\" />\n</head>\n\n";

 content += head;
 
 let body = "<body>\n\n&emsp;<header class=\"p-1 mb-3 text-light justify-content-center\">\n&emsp;<h1>My Team</h1>\n</header>\n<main class=\"container justify-content-center\">\n&emsp;<section class=\"row mainContainer\">\n";

 content += body;
 
let mgr = `<div class=\"card p-3 m-5 col-12 col-sm-6 col-lg-4\">\n&emsp;<div class=\"card-header text-light\">\n${emp.name} <br>☕ Manager\n&emsp;</div>\n&emsp;<ul class=\"list-group list-group-flush\">\n&emsp;&emsp;<li class="list-group-item">id: ${emp.id}</li>\n&emsp;&emsp;<li class=\"list-group-item\">Email: <a href=\"mailto:${emp.email}">${emp.email}</a></li>\n&emsp;&emsp;<li class=\"list-group-item\">Office Number: ${emp.officeNumber}</li>\n&emsp;</ul>\n</div>\n\n`;

content += mgr;

fs.appendFileSync(fileName, content, (err) =>
        err ? console.log(err) : console.log('Header success!')
    );

}

function appendTeamHTML(fileName, empType, emp){

}

function closeHTML(fielName){

}

function generateHTML(fileName, empType, emp){
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