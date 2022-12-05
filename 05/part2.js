const input = require("fs").readFileSync("input.txt", "utf8");
const lines = input.split("\r\n");

//there is an empty line that can be used to separate the crates from the move, get the index of that
const divider = lines.indexOf("");

//the stacks/crates are before that empty line ^
//-1 to get rid of the line with 1 2 3 4...
const stacksInputLines = lines.slice(0, divider - 1);
//the moves are after the empty line
//+1 to start after the empty line after 1 2 3 4
const movesInputLines = lines.slice(divider + 1, lines.length);

let stacks = [];

for (let i = 0; i < stacksInputLines.length; i++) {
  const stackLine = stacksInputLines[i];

  //use regex to match the crates in this line, or lack thereof (the \s{4} accounts for 4 white spaces where a crate would be)
  const findCratesInStackLine = stackLine.match(/((\s{4})|\[[A-Z]\](\s)?)/g);

  for (let j = 0; j < findCratesInStackLine.length; j++) {
    //if the stack at index j does not exist, define it as an empty array []
    if (!stacks[j]) stacks[j] = [];

    //define a current crate var and remove whitespace at start and end
    const currentCrate = findCratesInStackLine[j].trim();

    //add current crate at the beginning of the stack (unshift), if current crate position not empty
    if (currentCrate.length > 0) stacks[j].unshift(currentCrate);
  }
}

for (let i = 0; i < movesInputLines.length; i++) {
  //this will extract the numbers from the line (move 8 from 7 to 1 -> numberOfCrates = 8, from = 7, to = 8)
  const [numberOfCrates, from, to] = movesInputLines[i].match(/\d+/g);

  //vars for source and target stack, -1 because arrays start at 0
  const sourceStack = stacks[from - 1];
  const targetStack = stacks[to - 1];

  //get the crates from the top
  const elementsToMove = sourceStack.slice(-numberOfCrates);

  //add crates to target stack (NOT IN REVERSE BECAUSE OF CrateMover 9001)
  //only difference from part1
  targetStack.push(...elementsToMove);
  //remove crates from source stack
  sourceStack.splice(sourceStack.length - numberOfCrates, numberOfCrates);
}
//console.log("Final stack configuration:", stacks);

let topMostCrates = "";
for (let i = 0; i < stacks.length; i++) {
  topMostCrates += stacks[i][stacks[i].length - 1];
}
console.log(topMostCrates.replace(/\[|\]/g, "")); //CDTQZHBRS
