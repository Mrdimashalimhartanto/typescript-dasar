describe("Optional", function () {
  //todo:   KODE undefined
  it("should support null and undifined", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Dimas");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
