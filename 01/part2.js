const input = require("fs").readFileSync("input.txt", "utf8");

let elves = input.split(`\r\n\r\n`);
let calories = [];

elves.forEach((elf) => {
  //go through all the elves
  calories.push(
    elf
      .split(`\r\n`) //split the calories
      .map(Number) // string => int
      .reduce((a, b) => a + b) // sum it all up
  );
});

let highestElvesCalories = [];

while (highestElvesCalories.length < 3) {
  let max = Math.max(...calories);

  highestElvesCalories.push(max);
  calories = calories.filter((item) => item != max); //take out the current highest element
}

console.log(highestElvesCalories.reduce((a, b) => a + b));
