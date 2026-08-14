//adding comment for my own understanding for later ---STEP BY STEP GUIDE --
//checks if display is empty
//show clicked buttons on display, only show operator if display not empty
//make clear button work by changing textContent of dispay to ''
//make backspace work by slicing text one at a time from dislay textContent
//create operation functions using reduce so you wont have to worry about having multiple args
//map operator symbols to function using object
//create a function that takes the string from display, tokenize it into digits and operators, then loop through it
//initialize result as first number entered, parsed
//if number is found then parse it if it is operator symbol, map it to object, to create the vriable into mapped function
//clear/change display to return final result

//check if display is empty
function isDisplayEmpty() {
    const display = document.querySelector(".display");
    return display.textContent == '';
}

//get stuff we click to show up on display
let nums = document.querySelectorAll('.num');
nums.forEach((num) => {
    num.addEventListener('click', () => {
        document.getElementById("display").textContent += num.textContent; //add what you click into display
    });
})

let ops = document.querySelectorAll('.op');
ops.forEach((op) => {
    op.addEventListener('click', () => {
        if (!isDisplayEmpty()) { //check if display empty EVERYTIME we click an operator
            document.getElementById("display").textContent += op.textContent;
        }
    });
})

//clear display
function clearDisplay() {
    document.getElementById("display").textContent = ""; //clears text
}
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);

//use backsapce
function backSpace() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = displayElement.textContent.slice(0, -1); //slice text 1 at a time
}
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", backSpace);

//OPERTIONS-

const add = (items) => items.reduce((acc, curr) => acc + curr, 0);

const subtract = (items) => items.reduce((diff, num, index) => index === 0 ? num : diff - num, 0);

const multiply = (items) => items.reduce((acc, curr) => acc * curr, 1);

const divide = (items) => items.reduce((quoti, num, index) => {
    if (index === 0) return num;
    if (num === 0) return NaN;
    return quoti / num;
});

//map buttons to functions

const operators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

//calculate results

function calculate() {
    const userInput = document.getElementById("display").textContent;
    const userInputTokens = userInput.match(/\d+\.\d+|\d+|\+|-|\*|\//g); //regex parser

    if (!userInputTokens) return;

    const finalResult = userInputTokens.reduce((acc, curr, ind) => {
        if(ind%2 == 0) return acc;

        const operator = curr;

         const nextNumber = parseFloat(userInputTokens[ind + 1]);


        const mathOperation = operators[operator];
        return mathOperation([acc, nextNumber]);
    }, parseFloat(userInputTokens[0]));

    return document.getElementById("display").textContent = finalResult;
}

const equal = document.querySelector(".equals");
equal.addEventListener("click", calculate);



