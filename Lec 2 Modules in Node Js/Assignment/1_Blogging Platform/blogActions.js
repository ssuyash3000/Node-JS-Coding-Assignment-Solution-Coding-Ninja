// Write your code here
// const fs = require("fs");
import * as fs from "fs";
// const path = require("path");
// const readLine = require("readline");
// const blogPath = path.join("myblog.txt");

export const writeBlog = (path, data) => {
  //   const interFaceForWrite = readLine.createInterface({
  //     input: process.stdin,
  //     output: process.stdout,
  //   });
  //   interFaceForWrite.question("Write in the blog - ", (data) => {

  //   });
  fs.writeFileSync(path, data);
};

export const publishBlog = (path) => {
  //console.log("I am getting called ");
  return fs.readFileSync(path, { encoding: "utf-8" });
};

// module.exports = {
//   writeBlog,
//   publishBlog,
// };
