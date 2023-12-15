"use strict";
// tipe data array
describe("Array", () => {
    it("should  same with javascript", () => {
        const name = ["Dimas", "Lisa"];
        const value = [1997, 1998];
        console.info(name);
        console.info(value);
    });
    // array readonly
    it("should for readonly array", () => {
        const born = [1997, 1998];
        const place = ["Jakarta", "Tanggerang"];
        console.info(born);
        console.info(place);
        console.info([0]);
        console.info([1]);
    });
    // Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan
    it("should for tupple", () => {
        const passedway = [
            "Saugi Haviz",
            "Jakarta",
            2023,
        ];
        console.info(passedway);
        console.info(passedway[0]);
        console.info(passedway[1]);
        console.info(passedway[2]);
    });
});
