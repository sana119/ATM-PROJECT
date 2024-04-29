import inquirer from "inquirer";
let myBalance = 10000; // Dollar
myBalance -= 6000;
console.log(myBalance);
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdrow", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdrow") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your corrent balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
