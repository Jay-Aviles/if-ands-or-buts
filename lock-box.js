
const prompt = require('prompt-sync')();

let password = 00000

let passwordattempt = Number(prompt("Please enter password: "));

if (passwordattempt === password){
    console.log("Success")
} else console.log("Error! incorrect, please try again");
