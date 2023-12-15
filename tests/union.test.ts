describe("Union Type", () => {
  it("should support in typescript", () => {
    let paymentChannel: string | number | boolean = "Virtual Account";
    console.info(paymentChannel);

    paymentChannel = 223044;
    console.info(paymentChannel);

    paymentChannel = true;
    console.info(paymentChannel);
  });

  // dalam union type perlu menggunakan typeof untuk melakukan pengecekan tipe data
  it("should  support typeof operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }
    expect(process("Dimas")).toBe("DIMAS");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
