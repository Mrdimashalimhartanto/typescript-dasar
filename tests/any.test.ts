describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 129,
      name: "Dimas Halim Hartanto",
      age: 26,
      address: "Jl Cipinang Muara",
    };
    console.info(person);
  });

  it("should detect device", () => {
    const deviceActive: any = {
      ip: 11223485,
      device: "iPhone 13 Pro Max",
      location: "Karet kuningan - jakarta selatan",
    };
    console.info(deviceActive);
  });
});
