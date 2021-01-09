"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  var n = 2;
  var score = [0, 0];
  for (var i in n) {
    var scoreA = 0;
    var scoreB = 0;
    if (a[i] > b[i]) {
      score[0] = +scoreA++;
    } else if (b[i] > a[i]) {
      score[1] = scoreB++;
    }
    return score;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const a = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((aTemp) => parseInt(aTemp, 10));

//   const b = readLine()
//     .replace(/\s+$/g, "")
//     .split(" ")
//     .map((bTemp) => parseInt(bTemp, 10));

const a = [1,2,3]
const b = [2,3,4]

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
