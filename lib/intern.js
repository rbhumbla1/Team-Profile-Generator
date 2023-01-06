const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
         //superclass constructor
        super(name, id, email);

        //check for valid school
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;