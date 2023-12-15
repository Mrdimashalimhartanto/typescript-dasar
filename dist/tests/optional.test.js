"use strict";
describe("Optional", function () {
    //todo:   KODE undefined
    it("should support null and undifined", () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Dimas");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
