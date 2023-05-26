const { Triangle, Square, Circle, Svg } = require("./shapes.js");

describe("Triangle", () => {
  it("should be a string equal to a color", () => {
    const triangle = new Triangle("red");
    expect(triangle.color).toBe("red");
  });
  it("should render a triangle", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toBe(
      '<polygon points="150,18 244,182 56,182" style="fill:blue"/>'
    );
  });
});

describe("Square", () => {
  it("should be a string equal to a color", () => {
    const square = new Square("black");
    expect(square.color).toBe("black");
  });
  it("should render a square", () => {
    const square = new Square("white");
    expect(square.render()).toBe(
      '<rect x="50" y="20" rx="5" ry="5" width="200" height="200" style="fill:white"/>'
    );
  });
});

describe("Circle", () => {
  it("should be a stringe equal to a color", () => {
    const circle = new Circle("yellow");
    expect(circle.color).toBe("yellow");
  });
  it("should render a circle", () => {
    const circle = new Circle("pink");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="75" style="fill:pink"/>'
    );
  });
});
