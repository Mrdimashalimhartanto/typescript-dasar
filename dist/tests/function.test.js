"use strict";
// yang membedakan adalah kita perlu menentukan nilai apa yang di pakai yang balikan apa yang akan di kembalikan
describe("Function test", function () {
    it("should support function test typescript", () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Dimas")).toBe("Hello Dimas");
        // todo: void tanpa mengembalikan nilai
        function printHello(name) {
            console.info(`hello ${name}`);
        }
        printHello("Dimas");
    });
    // todo: support default value
    it("should support default value ", () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Dimas")).toBe("Hello Dimas");
    });
    // todo: rest parameter
    it("should support rest parameter", () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    // todo: function optional parameter
    it("should support optional parameter ", () => {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Dimas")).toBe("Hello Dimas");
        expect(sayHello("Dimas", "Halim")).toBe("Hello Dimas Halim");
    });
    // todo: function overloading | Call me adalah sebuah nama function yang sama namun dengan fungsi yang berbeda
    it("should function overloading", function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(100)).toBe(1000);
        expect(callMe("Dimas")).toBe("DIMAS");
    });
});
