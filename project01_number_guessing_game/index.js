#! /usr/bin/env node
import inquirer from "inquirer";
const randomGenNo = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Please Insert Your Guess Number (b/w 1 to 10) :"
    }
]);
let { userGuess } = answer;
console.log("Your Guess Number is:", userGuess, "\nRandom Guess Number is:", randomGenNo);
if (userGuess === randomGenNo) {
    console.log("Congratulations! \n Your Guess Number is Correct.");
}
else {
    console.log("Don't Worry! \n Please Insert Your Guess Number Again.");
}
