//our choices
// const num1 = document.querySelector(".num1");
// const operator = document.querySelector(".operator");
// const num2 = document.querySelector(".num2");
// const result = document.querySelector(".result");


//function to get stuff we click to show up on display
let nums = document.querySelectorAll('.num');
for (let i=0; i< nums.length; i++){
  let num = nums[i];
  num.addEventListener('click' , () => {
    document.getElementById("display").textContent += num.textContent;
  });
};

let ops = document.querySelectorAll('.op');
for (let i=0; i< ops.length; i++){
  let op = ops[i];
  op.addEventListener('click' , () => {
    document.getElementById("display").textContent += op.textContent;
  });
};


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


