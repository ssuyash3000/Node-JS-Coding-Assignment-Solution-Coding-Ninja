// Please don't change the pre-written code
// Import the necessary modules here
import path from "path";
export const getProducts = (req, res) => {
  // Wite your code here
  const pathOfView = path.join(path.resolve(), "src", "views", "index.html");
  res.sendFile(pathOfView);
};
