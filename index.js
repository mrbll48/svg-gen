const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle, Svg } = require("./lib/shapes.js");

const questions = [
  {
    type: "input",
    message: "What text do you want (3 characters max)",
    name: "text",
  },
  {
    type: "input",
    message: "What text color would you like?",
    name: "color",
  },
  {
    type: "list",
    message: "What shape would you like to use?",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message: "What background color would you like?",
    name: "background",
  },
];

inquirer.prompt(questions).then((answers) => {
  let shape;
  switch (answers.shape) {
    case "circle":
      shape = new Circle(answers.background);
      break;

    case "triangle":
      shape = new Triangle(answers.background);
      break;

    case "square":
      shape = new Square(answers.background);
      break;
  }

  const svg = new Svg(answers.text, answers.color, shape.render());
  const completeSvg = svg.render();

  fs.writeFile("logo.svg", completeSvg, (err) =>
    err ? console.log(err) : console.log("successfully generated svg file")
  );
});
