// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");
const Solution = () => {
  fs.writeFileSync("notes.txt", "The world has enough coders ");
  let bufferData = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(bufferData);
  //bufferData += "BE A CODING NINJA!";
  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  bufferData = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(bufferData);
};
Solution();
module.exports = Solution;
