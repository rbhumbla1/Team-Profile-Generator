const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email and github username if provided valid arguments", () => {
            const emp = new Engineer("Sarah", 3, "sarah@gmail.com", "sarah1");

            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
            expect(emp.github).toEqual("sarah1");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Engineer();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {

            const cb = () => new Engineer("Sarah");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email", () => {

            const cb = () => new Engineer("Sarah", 4);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a github username", () => {

            const cb = () => new Engineer("Sarah", 4, "sarah@gmail.com");
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Engineer(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Engineer("Sarah", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Engineer("Sarah", -1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Engineer("Sarah", 2, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not valid", () => {
            const cb = () => new Engineer("Sarah", 2, "sarahgmail.com");
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer("Sarah", 2, "sarah@gmail.com", 5);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the name of the engineer", () => {
            const emp = new Engineer("Sarah", 3, "sarah@gmail.com", "sarah1");

            const res = emp.getName();

            expect(res).toEqual("Sarah");
        });
    });

    describe("getId", () => {
        it("should return the id of the engineer", () => {
            const emp = new Engineer("Sarah", 3, "sarah@gmail.com", "sarah1");

            const res = emp.getId();

            expect(res).toEqual(3);
        });
    });

    describe("getEmail", () => {
        it("should return the name of the engineer", () => {
            const emp = new Engineer("Sarah", 3, "sarah@gmail.com", "sarah1");

            const res = emp.getEmail();

            expect(res).toEqual("sarah@gmail.com");
        });
    });

    describe("getGithub", () => {
        it("should return the github username of the engineer", () => {
            const emp = new Engineer("Sarah", 3, "sarah@gmail.com", "sarah1");

            const res = emp.getGithub();

            expect(res).toEqual("sarah1");
        });
    });

    describe("getRole", () => {
        it("should return the role of the engineer", () => {
            const emp = new Engineer("Sarah", 3, "sarah@gmail.com", "sarah1");

            const res = emp.getRole();

            expect(res).toEqual("Engineer");
        });
    });

});
