// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http");
const fs = require("fs");
// import http from "http";
// import fs from "fs";
// //Note - To use import keyword "type":"module", is needed to be added in package.json
// Write your code here
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./index.html").toString();
  res.end(data);
});
server.listen(8080);
module.exports = server;
