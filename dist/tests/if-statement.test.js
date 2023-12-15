"use strict";
// todo: if statement typescript
describe("if statement typescript", function () {
    it("should support typescript for if statement", () => {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Nilai kamu bagus");
        }
        else if (examValue > 60) {
            console.info("Nilai kamu lumayan");
        }
        else {
            console.info("Coba lagi");
        }
    });
});
