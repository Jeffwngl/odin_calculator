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

const calculate = document.getElementById("output");
const symbols = ['+', '-', '÷', '×'];

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

//get output
calculate.addEventListener('click', () => {
  const n = input.length;
  if (symbols.includes(input[n - 1])) {
    input = [];
    display.textContent = 'ERROR';
    return
  }

  // Step 1: Cleans string into operations and floats
  console.log(input);
  let cleanedArray = [];
  let cleanedValue = '';
  let prevValue;
  let p = 0;
  if (input[0] == '-') {
    cleanedArray.push('-');
    p = 1;
  }
  for (let i = p; i < n; i++) {
    // if (prevValue == '÷' || prevValue == '×' && input[i] == '÷' || input[i] == '×') {
    //   display.textContent = 'ERROR';
    //   input = [];
    //   console.log(input[i]);
    //   console.log(prevValue);
    //   return
    // }
    if (symbols.includes(input[i])) {
      cleanedArray.push(parseFloat(cleanedValue));
      cleanedArray.push(input[i]);
      cleanedValue = '';
    } 
    else {
      cleanedValue += input[i];
    };

    if (i == n - 1) {
      cleanedArray.push(parseFloat(cleanedValue));
    }
    prevValue = input[i];
  }
  // debugging
  console.log(cleanedArray);


  // Step 2: First Pass - Handle Multiplication and Division
  let intermediateArray = [];
  let tempValue = 0;
  let k = 1;
  if (cleanedArray[0] == '-') {
    tempValue -= cleanedArray[1];
    k = 2;
  } 
  else {
    tempValue = cleanedArray[0];
  }

  for (let i = k; i < cleanedArray.length; i += 2) {
    let operator = cleanedArray[i];
    let nextValue = cleanedArray[i + 1];

    if (operator === '×') {
      tempValue *= nextValue;
    } else if (operator === '÷') {
      if (nextValue === 0) { // handle division by 0
        display.textContent = 'ERROR';
        return;
      }
      tempValue /= nextValue;
    } else {
      intermediateArray.push(tempValue);
      intermediateArray.push(operator);
      tempValue = nextValue;
    }
  }
  intermediateArray.push(tempValue);

  console.log("After Multiplication/Division:", intermediateArray);

  // Step 3: Second Pass - Handle Addition and Subtraction
  let total = intermediateArray[0];

  for (let i = 1; i < intermediateArray.length; i += 2) {
    let operator = intermediateArray[i];
    let nextValue = intermediateArray[i + 1];

    if (operator === '+') {
      total += nextValue;
    } else if (operator === '-') {
      total -= nextValue;
    }
  }

  console.log("Final Result:", total);
  display.textContent = total;
});