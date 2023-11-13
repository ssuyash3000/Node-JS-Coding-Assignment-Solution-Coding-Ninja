// Please don't change the pre-written code
// Import the necessary modules here
//1. Importing http module from NodeJs runtime
const http = require("http");
//2. Creating Server using .createServer Method of http
const server = http.createServer((req, res) => {
  res.end("Welcome to Node Js Server");
});

//3. Specifying a port that can listen to client's requests.
server.listen(8080);
// Write your code here

module.exports = server;
