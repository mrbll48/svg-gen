const Shapes = require("./shapes.js");

describe("Triangle", () => {
  it("should be a string equal to triangle", () => {
    const triangle = () => new Shapes("triangle");
    const shape = "triangle";
    expect(triangle).toEqual(shape);
  });
});

describe("Square", () => {
  it("should be a stringe equal to square", () => {
    const square = new Shapes("square");
  });
});

describe("Circle", () => {
  it("should be a stringe equal to circle", () => {
    const circle = new Shapes("circle");
  });
});
