// Import required module
const readline = require("readline");
const Solution = () => {
  // Write your code here
  const interfaceForUse = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // The use of the keyword interface is not permitted, as it may function correctly
  // on a local machine but will result in test failures on the backend.
  interfaceForUse.question("Enter the first number: ", (num1) => {
    interfaceForUse.question("Enter the second number: ", (num2) => {
      console.log(
        "The maximum of the two numbers is: ",
        num1 > num2 ? num1 : num2
      );
    });
  });
};

Solution();
module.exports = Solution;
