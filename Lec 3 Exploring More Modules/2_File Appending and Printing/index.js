// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      //console.log(JSON.parse(chunk));
      //data += chunk.toString();
      fs.appendFileSync("data.txt", chunk.toString());
    });
    req.on("end", () => {
      //fs.writeFileSync("data.txt", data);

      console.log(fs.readFileSync("data.txt", { encoding: "utf-8" }));

      return;
    });
  }
  res.end("data received");
});

export default server;
