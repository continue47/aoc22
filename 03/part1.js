const input = require("fs").readFileSync("input.txt", "utf8");

const lines = input.split("\r\n");
const allLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sumOfPriorities = 0;

lines.forEach((line) => {
  const firstHalf = line.slice(0, line.length / 2);
  const secondHalf = line.slice(line.length / 2, line.length);

  for (let i = 0; i < firstHalf.length; i++) {
    const currentLetter = firstHalf[i];
    //finding the letter in the second half
    const index = secondHalf.indexOf(currentLetter);
    if (index > -1) {
      //arrays start at 0, so the index will be 1 less than the "priority"
      sumOfPriorities += allLetters.indexOf(currentLetter) + 1;
      return;
    }
  }
});

console.log(sumOfPriorities); //7917
