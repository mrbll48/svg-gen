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
    return `<rect x="50" y="20" width="150" height="150" style="fill:${this.color}"/>`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="50" cy="50" r="40" style="fill:${this.color}"/>`;
  }
}

class Svg {
  constructor(text, color, shape) {
    this.text = text;
    this.color = color;
    this.shape = shape;
  }
  render() {
    return `<svg width='300' height='200'>${this.shape}<text text-anchor="middle" x='50' y='55' fill="${this.color}">${this.text}</text></svg>`;
  }
}

module.exports = {
  Triangle,
  Square,
  Circle,
  Svg,
};
