// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//filename global constant
const fileName = `./dist/index.html`;

// An array of questions for user input on what action they want to perform
const chooseAction = [
    {
        type: 'checkbox',
        message: 'Please select your action:',
        name: 'action',
        choices: ['Add an engineer', 'Add an intern', 'I am done'],
    }
]

//common questions for all employees
const getEmployeeInfo = [
    {
        type: 'input',
        message: 'Please provide the employee name:',
        name: 'empName',
    },
    {
        type: 'input',
        message: 'Please provide the employee ID:',
        name: 'empId',
    },
    {
        type: 'input',
        message: 'Please provide the employee email address:',
        name: 'empEmail',
    }
]

//questions specific to a manager
const getManagerInfo = [
    {
        type: 'input',
        message: 'Please provide the employee office number:',
        name: 'empOffice',
    }
]

//question specific to an engineer
const getEngineerInfo = [
    {
        type: 'input',
        message: 'Please provide the employee GitHub username:',
        name: 'empGithub',
    },
]

//question specific to an intern
const getInternInfo = [
    {
        type: 'input',
        message: 'Please provide the employee name of your school:',
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

    console.log("Please start by providing the Team Manager's information before adding other team members:");
    const questions = getEmployeeInfo.concat(getManagerInfo);

    await inquirer
        .prompt(questions)
        .then((info) => {
            console.log(info);

            //create manager object
            let manager = new Manager(info.empName, parseInt(info.empId), info.empEmail, parseInt(info.empOffice));

            //create the  file
            //writeToFile(manager);

        }
        );

    //get user's choice of action
    while (!finish) {

        let response = await inquirer.prompt(chooseAction);
        console.log(response);
        action = response.action;

        console.log(action);

        if (action == 'Add an engineer') {
            const questions = getEmployeeInfo.concat(getEngineerInfo);

            await inquirer
                .prompt(questions)
                .then((info) => {
                    console.log(info);

                    //create Engineer object
                    let engineer = new Engineer(info.empName, parseInt(info.empId), info.empEmail, info.empGithub);

                    //create the readme file
                    // writeToFile(engineer);

                }
                );

        } else if (action == 'Add an intern') {
            const questions = getEmployeeInfo.concat(getInternInfo);

            await inquirer
                .prompt(questions)
                .then((info) => {
                    console.log(info);

                     //create Intern object
                     let intern = new Intern(info.empName, parseInt(info.empId), info.empEmail, info.empSchool);

                    //create the readme file
                    // writeToFile(intern);

                }
                );

        } else {
            finish = true;
            break;
        }

    }
}

// Function call to initialize app
init();
