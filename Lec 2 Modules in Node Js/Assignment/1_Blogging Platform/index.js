// Write your code here
// import { log } from "console";
import { writeBlog, publishBlog } from "./blogActions.js";
import { resolve } from "path";
import { createInterface } from "readline";
const blogPath = resolve("myblog.txt");
// log(blogPath);
const interFaceForWrite = createInterface({
  input: process.stdin,
  output: process.stdout,
});
interFaceForWrite.question("Enter your blog: ", (data) => {
  writeBlog(blogPath, data);
  interFaceForWrite.close();
  console.log(publishBlog(blogPath));
  //process.exit();
});
