// Note:  Please do not change the prewritten code

// import the required module here
const sum = require("./math.js").sum;
const mean = require("./math.js").mean;
const Solution = () => {
  const nums = [1, 2, 3, 4, 5];
  // write your code here to Display the results of the calculations on the console.
  console.log(sum(nums).toString());
  console.log(mean(nums).toString());
};
Solution();
module.exports = Solution;
