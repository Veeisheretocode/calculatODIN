//check if display is empty
function isDisplayEmpty() {
    const display = document.querySelector(".display");
    return display.textContent == '';
}

//function to get stuff we click to show up on display
let nums = document.querySelectorAll('.num');
for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    num.addEventListener('click', () => {
        document.getElementById("display").textContent += num.textContent;
    });
};

let ops = document.querySelectorAll('.op');
for (let i = 0; i < ops.length; i++) {
    let op = ops[i];
    op.addEventListener('click', () => {
        if (!isDisplayEmpty()) {
            document.getElementById("display").textContent += op.textContent;
        }
    });
};

//function to clear display
function clearDisplay() {
    document.getElementById("display").textContent = "";
}
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);

//function to use backsapce
function backSpace() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = displayElement.textContent.slice(0, -1);
}
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", backSpace);


















// const add = function(a,b){
//     return a+b;
// }

// const subtract = function(a,b){
//     return a-b;
// }

// const multiply = function(a,b){
//     return a*b;
// }

// const divide = function(a,b){
//     return a/b;
// }


