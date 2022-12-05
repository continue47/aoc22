const input = require("fs").readFileSync("input.txt", "utf8");

const groupsOfThree = input.match(/(.+)\r\n(.+)\r\n(.+)/g);
const allLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sumOfPriorities = 0;

groupsOfThree.forEach((group) => {
  const lines = group.split("\r\n");
  for (let i = 0; i < lines[0].length; i++) {
    const letter = lines[0][i];
    if (lines[1].includes(letter) && lines[2].includes(letter)) {
      sumOfPriorities += allLetters.indexOf(letter) + 1;
      return; //once found, go to next group, again for the reason that some lines can contain the same letter multiple times
    }
  }
});

console.log(sumOfPriorities); //2585
