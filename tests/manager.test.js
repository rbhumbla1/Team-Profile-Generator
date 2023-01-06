const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id,email and officeNumber if provided valid arguments", () => {
            const emp = new Manager("Sarah", 3, "sarah@gmail.com", 456);

            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
            expect(emp.officeNumber).toEqual(456);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Manager();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {

            const cb = () => new Manager("Sarah");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email", () => {

            const cb = () => new Manager("Sarah", 4);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an office number", () => {

            const cb = () => new Manager("Sarah", 4, "sarah@gmail.com");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Manager(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Manager("Sarah", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Manager("Sarah", -1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Manager("Sarah", 2, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not valid", () => {
            const cb = () => new Manager("Sarah", 2, "sarahgmail.com", 456);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is not a number", () => {
            const cb = () => new Manager("Sarah", 2, "sarah@gamil.com", "456");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is less than 0", () => {
            const cb = () => new Manager("Sarah", 2, "sarah@gamil.com", -456);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const emp = new Manager("Sarah", 3, "sarah@gmail.com", 456);

            const res = emp.getName();

            expect(res).toEqual("Sarah");
        });
    });

    describe("getId", () => {
        it("should return the id of the manager", () => {
            const emp = new Manager("Sarah", 3, "sarah@gmail.com", 456);

            const res = emp.getId();

            expect(res).toEqual(3);
        });
    });

    describe("getEmail", () => {
        it("should return the name of the manager", () => {
            const emp = new Manager("Sarah", 3, "sarah@gmail.com", 456);

            const res = emp.getEmail();

            expect(res).toEqual("sarah@gmail.com");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the office number of the manager", () => {
            const emp = new Manager("Sarah", 3, "sarah@gmail.com", 456);

            const res = emp.getOfficeNumber();

            expect(res).toEqual(456);
        });
    });

    describe("getRole", () => {
        it("should return the role of the manager", () => {
            const emp = new Manager("Sarah", 3, "sarah@gmail.com", 456);

            const res = emp.getRole();

            expect(res).toEqual("Manager");
        });
    });

});
