import { sayHello } from "../src/hello";

describe("SayHello", function () {
  it("should return hello dimas ", () => {
    expect(sayHello("dimas")).toBe("Hello dimas");
  });
});
