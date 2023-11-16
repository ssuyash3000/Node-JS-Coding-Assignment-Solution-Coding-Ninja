// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  const interfaceForEmailInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  interfaceForEmailInput.question("please enter your mail ", async (data) => {
    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: data,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };
    interfaceForEmailInput.close();
    try {
      await transport.sendMail(mailOptions);
      console.log("Success: Email sent to ", data);
    } catch (err) {
      console.log(err);
    }
  });
};

export default Solution;
