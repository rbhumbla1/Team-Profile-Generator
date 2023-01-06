const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){

          //superclass constructor
        super(name, id, email);

        //check for valid gitHub
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        this.github = github;
    }

    //getter methods for engineer
    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;