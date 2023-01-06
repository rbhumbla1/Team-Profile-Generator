// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//filename global constant
const fileName = `./dist/index.html`;

// An array of questions for user input on what actiont hey want to perform
const chooseAction = [
    {
        type: 'checkbox',
        message: 'Please select your action:',
        name: 'action',
        choices: ['Add the team manager', 'Add an engineer', 'Add an intern', 'I am done'],
    }
]

const getEmployeeInfo = [
    {
        type: 'input',
        message: 'Please provide your name:',
        name: 'empName',
    },
    {
        type: 'input',
        message: 'Please provide your ID:',
        name: 'empId',
    },
    {
        type: 'input',
        message: 'Please provide your email address:',
        name: 'empEmail',
    }
]

const getManagerInfo = [
    {
        type: 'input',
        message: 'Please provide your office number:',
        name: 'empOffice',
    }
]

const getEngineerInfo = [
    {
        type: 'input',
        message: 'Please provide your GitHub user name:',
        name: 'empGithub',
    },
]
const getInternInfo = [
    {
        type: 'input',
        message: 'Please provide the name of your school:',
        name: 'empSchool',
    },
]


// Function to write the HTML file
function writeToFile(data) {

    //create README file and add content to it
    fs.writeFileSync(fileName, generateHTML(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function appendToFile(data) {

    //create README file and add content to it
    fs.appendFileSync(fileName, appendHTML(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function closeFile(data) {

    //create README file and add content to it
    fs.appendFileSync(fileName, closeHTML(), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function to initialize app
async function init() {

    let finish = false;
    let action;

    //get user's choice of action
    while (!finish) {

        let response = await inquirer.prompt(chooseAction);
        console.log(response);
        action = response.action;

        console.log(action);

        if(action == 'Add the team manager'){
            const questions =  getEmployeeInfo.concat(getManagerInfo);
            
            await inquirer
            .prompt(questions)
            .then((infoData) => {
                console.log(infoData);

                //create the readme file
                // writeToFile(response);

            }
            );
        } else if (action == 'Add an engineer') {
            const questions =  getEmployeeInfo.concat(getEngineerInfo);
            
            await inquirer
                .prompt(questions)
                .then((infoData) => {
                    console.log(infoData);

                    //create the readme file
                    // writeToFile(response);

                }
                );
            
        }else if (action == 'Add an intern') {
            const questions =  getEmployeeInfo.concat(getInternInfo);
            
            await inquirer
                .prompt(questions)
                .then((infoData) => {
                    console.log(infoData);

                    //create the readme file
                    // writeToFile(response);

                }
                );
            
        }else {
            finish = true;
            break;
        }

    }
}

// Function call to initialize app
init();
