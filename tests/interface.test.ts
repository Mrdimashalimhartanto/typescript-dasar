import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe("Interface", function () {
  it("should support typescript", () => {
    const seller: Seller = {
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
    // interface function menggunakan function {}
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(3, 2)).toBe(5);
  });

  // todo: Indexable Interface
  it("should support Indexable Interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Dimas", "Hallim", "Hartanto"];
    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);
  });

  // todo: object interface
  it("should support object interface", () => {
    interface StringDictionary {
      [key: string]: string;
    }
    const dictionary: StringDictionary = {
      name: "Halim Hartanto",
      address: "Kuningan",
    };
    expect(dictionary["name"]).toBe("Halim Hartanto");
    expect(dictionary["address"]).toBe("Kuningan");
  });

  //   todo: Extend interface
  it("should support extend interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Dimas",
      division: "IT",
    };
    console.info(employee);
    const manager: Manager = {
      id: "1",
      name: "Dimas",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });

  //   todo: function in interface
  it("should support function in interface", () => {
    const person: Person = {
      name: "Dimas Halim Hartanto",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Admin"));
  });

  // TODO: intersection types
  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;
    const domain: Domain = {
      id: "1",
      name: "Eko",
    };

    console.info(domain);
  });

  // todo: type assertion interface
  it("should support type assertion", () => {
    const person: any = {
      name: "Dimas",
      age: 26,
    };
    const person2: Person = person as Person;

    console.info(person2);
  });
});
