// Please do not change the prewritten code

const { default: axios } = require("axios");

const Solution = async () => {
  axios.get("https://api.codingninjas.com/api/v3/event_tags").then((data) => {
    console.log(data.data);
  });
};
Solution();
module.exports = Solution;
