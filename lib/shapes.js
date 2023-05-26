class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="150,18 244,182 56,182" style="fill:${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="50" y="20" rx="5" ry="5" width="200" height="200" style="fill:${this.color}"/>`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;
  }
}

class Svg {
  constructor(text, color, shape) {
    this.text = text;
    this.color = color;
    this.shape = shape;
  }
  render() {
    return `<svg width='300' height='200'>${this.shape}<text text-anchor="middle" x='50%' y='50%' fill="${this.color}" font-size=25px>${this.text}</text></svg>`;
  }
}

module.exports = {
  Triangle,
  Square,
  Circle,
  Svg,
};
