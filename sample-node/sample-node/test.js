const chalk = require('chalk');
const boxen = require("boxen");


const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

const log = chalk.green("test complete"); 
const msgBox = boxen( log, boxenOptions );
console.log(msgBox);

