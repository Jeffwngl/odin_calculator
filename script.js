document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
let input = [];

// operations
add.addEventListener('click', () => {
  input.push("+");
  display.textContent = input.join('');
});

subtract.addEventListener('click', () => {
  input.push("-");
  display.textContent = input.join('');
});

multiply.addEventListener('click', () => {
  input.push("×");
  display.textContent = input.join('');
});

divide.addEventListener('click', () => {
  input.push("÷");
  display.textContent = input.join('');
});

clear.addEventListener('click', () => {
  input = [];
  display.textContent = input;
})

decimal.addEventListener('click', () => {
  input.push('.');
  display.textContent = input.join('');
})

// numbers
zero.addEventListener('click', () => {
  input.push('0');
  display.textContent = input.join('');
})

one.addEventListener('click', () => {
  input.push('1');
  display.textContent = input.join('');
})

two.addEventListener('click', () => {
  input.push('2');
  display.textContent = input.join('');
})

three.addEventListener('click', () => {
  input.push('3');
  display.textContent = input.join('');
})

four.addEventListener('click', () => {
  input.push('4');
  display.textContent = input.join('');
})

five.addEventListener('click', () => {
  input.push('5');
  display.textContent = input.join('');
})

six.addEventListener('click', () => {
  input.push('6');
  display.textContent = input.join('');
})

seven.addEventListener('click', () => {
  input.push('7');
  display.textContent = input.join('');
})

eight.addEventListener('click', () => {
  input.push('8');
  display.textContent = input.join('');
})

nine.addEventListener('click', () => {
  input.push('9');
  display.textContent = input.join('');
})

