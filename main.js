// // // . Miles-to-Kilometers Converter (Operators) (TASK NO 1)
// let miles = 130;
// let kilometer = miles * 1.60934;
// console.log(`The Distance of ${kilometer} Kilometer is Equal to Miles is : ${miles} `);
import inquirer from 'inquirer';
const dynamicNumber = 10;
async function compareNumbers() {
    const { enteredNumber } = await inquirer.prompt({
        type: 'number',
        name: 'enteredNumber',
        message: 'Enter a number:',
    });
    if (enteredNumber > dynamicNumber) {
        console.log(`${enteredNumber} is greater than ${dynamicNumber}`);
    }
    else if (enteredNumber < dynamicNumber) {
        console.log(`${enteredNumber} is less than ${dynamicNumber}`);
    }
    else {
        console.log(`${enteredNumber} is equal to ${dynamicNumber}`);
    }
}
compareNumbers();
// // // // // Friend Checker Game....  (TASK NO:3)
// import inquirer from 'inquirer';
// const knownFriends = ["Ahsan", "Rizwan", "Danish"];
// function checkFriend(name:any) {
//    switch (name){
//     case "Ahsan":
//         return `Yes, Ahsan is your friend.`;
// break
//     case "Rizwan":
//         return `Yes, Rizwan is your friend.`;
// break
//     case "Danish":
//       return `Yes, Danish is your friend.`;
// break
//      default:
//         return `Sorry, I don't recognize that name ${name} as your friend.`
//    }
// }
// let userinput = inquirer
//     .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Enter a name:',
//     },
// ])
//     .then(answers => {
//      const name = answers['name'];
//     const result = checkFriend(name);
//     console.log(result);
// })
//     .catch(error => {
//     console.log('Error occurred:', error);
// });
// // // Function (TASK NO 4)
// function addition(a:number, b:number) {
//     return a + b;
// }
// var num1 = 5;
// var num2 = 7;
// console.log("Result of first call Number is:", addition(num1, num2));
// var num3 = 10;
// var num4 = 3;
// console.log("Result of second call Number is:", addition(num3, num4));
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        default:
            return "Invalid operator";
    }
}
let operand1 = 10;
let operand2 = 5;
let operator = "+";
console.log(`Result of ${operand1} ${operator} ${operand2} = ${calculate(operand1, operand2, operator)}`);
operator = "-";
// Call the function again with updated operator
console.log(`Result of ${operand1} ${operator} ${operand2} = ${calculate(operand1, operand2, operator)}`);
// // // Anonymous Function (TASK NO4)
const printArgument = function (para) {
    console.log(para);
};
printArgument("Hello from anonymous function...");
function printArgumentRegular(para) {
    console.log(para);
}
printArgumentRegular("Hello from simple function...");
