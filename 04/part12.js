const input = require("fs").readFileSync("input.txt", "utf8");
const lines = input.split("\r\n");

let fullyContainedRanges = 0;
let overlaps = 0;

lines.forEach((line) => {
  const sections = line.split(",");
  const firstRange = sections[0].split("-").map(Number);
  const secondRange = sections[1].split("-").map(Number);
  //console.log(firstRange, secondRange);

  //same thing but easier to read in the if conditions below
  const R1N1 = firstRange[0];
  const R1N2 = firstRange[1];
  const R2N1 = secondRange[0];
  const R2N2 = secondRange[1];

  if ((R1N1 <= R2N1 && R1N2 >= R2N2) || (R2N1 <= R1N1 && R2N2 >= R1N2)) {
    //console.log(fullyContainedRanges, "+1");
    fullyContainedRanges++;
  }
  if ((R2N1 >= R1N1 && R2N1 <= R1N2) || (R1N1 >= R2N1 && R1N1 <= R2N2)) {
    //console.log(overlaps, "+1");
    overlaps++;
  }
});

console.log("Part 1 solution: ", fullyContainedRanges); //528
console.log("Part 2 solution: ", overlaps); //881
