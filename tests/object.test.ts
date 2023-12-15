describe("Object", function () {
  it("should support in typescript ", () => {
    const person: {
      id: number;
      name: string;
      address: string;
      title?: string;
    } = {
      id: 1,
      name: "Dimas Halim Hartanto",
      address: "Jakarta Timur - Indonesia",
    };

    console.info(person);
  });
});
