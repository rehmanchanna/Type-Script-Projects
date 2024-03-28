#! /usr/bin/env node
import inquirer from "inquirer";
let author = "ARC";
console.log(`Welcome to ${author} ATM Machine.`);
let myBalance = 20000;
let MyPinCode = 1101;
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter Your Pin Number: ",
        name: "yourPin",
        type: "number"
    }
]);
if (pinAnswer.yourPin === MyPinCode) {
    let actionAns = await inquirer.prompt([
        {
            name: "action",
            message: "Please Select Option",
            type: "list",
            choices: ["Deposit Amount", "Fast Cash", "Withdraw Amount", "Check Balance"]
        }
    ]);
    console.log(actionAns);
    if (actionAns.action === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                message: "Enter Your Amount: ",
                name: "amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Your Balance is Insufficient!! ");
        }
        else if (amountAns.amount <= myBalance) {
            let remaining = myBalance - amountAns.amount;
            console.log(`Your Amount ${amountAns.amount} is Successfully Withdrawn From ${myBalance}. \n Now Your Balance is ${remaining}`);
            console.log(`Thanks for Using ${author} ATM Machine.`);
        }
    }
    if (actionAns.action === "Fast Cash") {
        let amountOptions = await inquirer.prompt([
            {
                name: "amtOption",
                type: "list",
                message: "Select an amount",
                choices: ["2000", "5000", "10000", "20000"]
            }
        ]);
        let remaining = myBalance - amountOptions.amtOption;
        console.log(`Your Amount ${amountOptions.amtOption} is Successfully  Withdrawn From ${myBalance}. \n Now Your Balance is ${remaining}.`);
        console.log(`Thanks for Using ${author} ATM Machine.`);
    }
    if (actionAns.action === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
    if (actionAns.action === "Deposit Amount") {
        let depositBalance = await inquirer.prompt([
            {
                name: "deposit",
                message: "Enter Your Deposit Amount: ",
                type: "number"
            }
        ]);
        let newBalance = depositBalance.deposit + myBalance;
        console.log(`Your Amount ${depositBalance.deposit} has been Successfully  deposited in your Account. \n Now Your Balance is ${newBalance}`);
        console.log(`Thanks for Using ${author} ATM Machine.`);
    }
}
else {
    console.log("Incorrect Your Pin Number!! \n Please Type Currect Pin Number.");
}
