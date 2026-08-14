//our choices
const num1 = document.querySelector(".num1");
const operator = document.querySelector(".operator");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");


let buttons = document.querySelectorAll('.num');
for (let i=0; i< buttons.length; i++){
  let button = buttons[i];
  button.addEventListener('click' , () => {
    document.getElementById("display").innerHTML += button.innerHTML
  })
}



const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}


