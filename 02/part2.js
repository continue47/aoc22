const input = require("fs").readFileSync("input.txt", "utf8");

const combos = input.replace(/ /g, "").split("\r\n");

let comboOutcomes = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

let score = 0;
combos.forEach((combo) => {
  score += comboOutcomes[combo];
});

console.log(score); //13448
