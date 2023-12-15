describe("Interface", function () {
    it("should support typescript", () => {
        const seller = {
            id: 1,
            name: "Dimas Halim Hartanto",
            address: "Jl. Kuningan Timur - Jagakarsa",
            // nik & npwp menggunakan readonly properties, nilainya tidak bisa dirubah
            nik: "123123123123",
            npwp: "31231231231",
        };
        seller.name = "Dimas Halim H";
        console.info(seller);
    });
    // todo: function interface
    it("should support function interface", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(3, 2)).toBe(5);
    });
    // todo: Indexable Interface
    it("should support Indexable Interface", () => {
        const names = ["Dimas", "Hallim", "Hartanto"];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });
    // todo: object interface
    it("should support object interface", () => {
        const dictionary = {
            name: "Halim Hartanto",
            address: "Kuningan",
        };
        expect(dictionary["name"]).toBe("Halim Hartanto");
        expect(dictionary["address"]).toBe("Kuningan");
    });
    //   todo: Extend interface
    it("should support extend interface", () => {
        const employee = {
            id: "1",
            name: "Dimas",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "1",
            name: "Dimas",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    //   todo: function in interface
    it("should support function in interface", () => {
        const person = {
            name: "Dimas Halim Hartanto",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Admin"));
    });
    // TODO: intersection types
    it("should support intersection types", () => {
        const domain = {
            id: "1",
            name: "Eko",
        };
        console.info(domain);
    });
    // todo: type assertion interface
    it("should support type assertion", () => {
        const person = {
            name: "Dimas",
            age: 26,
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
