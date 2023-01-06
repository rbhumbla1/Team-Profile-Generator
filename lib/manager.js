
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {

        //superclass constructor
        super(name, id, email);

        //check for valid officeNum
        if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

        this.officeNumber = officeNum;
    }

    //getter methods for manager
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;