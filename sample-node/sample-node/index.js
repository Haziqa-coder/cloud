const axios = require('axios');
const chalk = require('chalk');
const boxen = require("boxen");

const url = "https://quotes.rest/qod";

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

// make a get request to the  url
axios({
  method: 'get',
  url: url,
  headers: { 'Accept': 'application/json' }, // this api needs this header set for the request
}).then(res => {
  const quote = res.data.contents.quotes[0].quote
  const author = res.data.contents.quotes[0].author
  const log = chalk.green(`${quote} - ${author}`) // we use chalk to set the color green on successful response
  const msgBox = boxen( log, boxenOptions );
  console.log(msgBox)
}).catch(err => {
  const log = chalk.red(err) // we set the color red here for errors.
  console.log(log)
})