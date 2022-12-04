const input = require("fs").readFileSync("input.txt", "utf8");

const combos = input.replace(/ /g, "").split("\r\n");

let comboOutcomes = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
};

let score = 0;
combos.forEach((combo) => {
  score += comboOutcomes[combo];
});

console.log(score); //13924
