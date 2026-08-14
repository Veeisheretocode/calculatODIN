# calculatODIN

## Basic rundown of how i approached the problem-

## checks if display is empty
## show clicked buttons on display, only show operator if display not empty
## make clear button work by changing textContent of dispay to ''
## make backspace work by slicing text one at a time from dislay textContent
## create operation functions using reduce so you wont have to worry about having multiple args
## map operator symbols to function using object
## create a function that takes the string from display, tokenize it into digits and operators, then loop through it
## initialize result as first number entered, parsed
## if number is found then parse it if it is operator symbol, map it to object, to create the vriable into mapped function
## clear/change display to return final result
