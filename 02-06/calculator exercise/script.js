'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

numbers.forEach(function(numbers, index){
    numbers.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("fsgafa");
        input.innerHTML += numbers.innerHTML;
        console.log(numbers);
    });
});

clear.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("fsgafa");
    input.innerHTML = "";
    console.log("cleared");
});

operators.forEach(function(operators, index){
  operators.addEventListener("click", function(e) {
      e.preventDefault();
      console.log("fsgafa");
      input.innerHTML += operators.innerHTML;
      console.log(numbers);
  });
});
