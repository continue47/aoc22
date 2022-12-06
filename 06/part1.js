const input = require("fs").readFileSync("input.txt", "utf8");

let currentMarker = "";
for (let i = 0; i < input.length; i++) {
  currentMarker += input[i];
  if (currentMarker.length > 4) {
    currentMarker = currentMarker.substr(1);
    //https://stackoverflow.com/a/37932256
    if (new Set(currentMarker).size == currentMarker.length) {
      console.log(i + 1);
      return;
    }
  }
}
