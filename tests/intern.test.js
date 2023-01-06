const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email and school if provided valid arguments", () => {
            const emp = new Intern("Sarah", 3, "sarah@gmail.com", "ucb");

            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
            expect(emp.school).toEqual("ucb");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Intern();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {

            const cb = () => new Intern("Sarah");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email", () => {

            const cb = () => new Intern("Sarah", 4);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a school", () => {

            const cb = () => new Intern("Sarah", 4, "sarah@gmail.com");
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Intern(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Intern("Sarah", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Intern("Sarah", -1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Intern("Sarah", 2, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not valid", () => {
            const cb = () => new Intern("Sarah", 2, "sarahgmail.com");
            const err = new Error("Expected parameter 'email' to be a non-empty and valid email address");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' is not a string", () => {
            const cb = () => new Intern("Sarah", 2, "sarah@gmail.com", 5);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("should return the name of the intern", () => {
            const emp = new Intern("Sarah", 3, "sarah@gmail.com", "ucb");

            const res = emp.getName();

            expect(res).toEqual("Sarah");
        });
    });

    describe("getId", () => {
        it("should return the id of the intern", () => {
            const emp = new Intern("Sarah", 3, "sarah@gmail.com", "ucb");

            const res = emp.getId();

            expect(res).toEqual(3);
        });
    });

    describe("getEmail", () => {
        it("should return the name of the intern", () => {
            const emp = new Intern("Sarah", 3, "sarah@gmail.com", "ucb");

            const res = emp.getEmail();

            expect(res).toEqual("sarah@gmail.com");
        });
    });

    describe("getSchool", () => {
        it("should return the school of the intern", () => {
            const emp = new Intern("Sarah", 3, "sarah@gmail.com", "ucb");

            const res = emp.getSchool();

            expect(res).toEqual("ucb");
        });
    });

    describe("getRole", () => {
        it("should return the role of the intern", () => {
            const emp = new Intern("Sarah", 3, "sarah@gmail.com", "ucb");

            const res = emp.getRole();

            expect(res).toEqual("Intern");
        });
    });

});
