// tipe data array
describe("Array", () => {
  it("should  same with javascript", () => {
    const name: string[] = ["Dimas", "Lisa"];
    const value: number[] = [1997, 1998];

    console.info(name);
    console.info(value);
  });

  // array readonly
  it("should for readonly array", () => {
    const born: ReadonlyArray<number> = [1997, 1998];
    const place: ReadonlyArray<string> = ["Jakarta", "Tanggerang"];

    console.info(born);
    console.info(place);
    console.info([0]);
    console.info([1]);
  });

  // Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan
  it("should for tupple", () => {
    const passedway: readonly [string, string, number] = [
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
