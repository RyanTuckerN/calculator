// *** *** *** DOM buttons *** *** *** //
const num1 = document.querySelectorAll(".grey-button")[6];
const num2 = document.querySelectorAll(".grey-button")[7];
const num3 = document.querySelectorAll(".grey-button")[8];
const num4 = document.querySelectorAll(".grey-button")[3];
const num5 = document.querySelectorAll(".grey-button")[4];
const num6 = document.querySelectorAll(".grey-button")[5];
const num7 = document.querySelectorAll(".grey-button")[0];
const num8 = document.querySelectorAll(".grey-button")[1];
const num9 = document.querySelectorAll(".grey-button")[2];
const num0 = document.querySelectorAll(".grey-button")[9];
const decimal = document.querySelectorAll(".grey-button")[10];
const allClear = document.querySelectorAll(".white-button")[0];
const backSpace = document.querySelectorAll(".white-button")[1];
const dividedBy = document.querySelectorAll(".blue-button")[0];
const times = document.querySelectorAll(".blue-button")[1];
const minus = document.querySelectorAll(".blue-button")[2];
const plus = document.querySelectorAll(".blue-button")[3];
const equals = document.querySelectorAll(".blue-button")[4];

// *** DISPLAY *** //
const problem = document.querySelector("#problem");
const solution = document.querySelector("#solution");

// *** VARIABLES *** //
let firstNumber = "";
let operator = "";
let secondNumber = "";
let answer = "";

/*
Every time the user puts on or takes away a number from the calculator screen,
there is an equal occurance happening behind the scenes. see 'problem.innerText' 
vs. firstNumber, operator, and secondNumber. As far as I can tell, there are no
instances where these conflict, but if I were to do this over again, I would 
probably try to figure out a more efficient way of dealing with that! 
*/

// *** *** *** FUNCTIONS *** *** *** //
const add = (a, b) => a * 1 + b * 1;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b == '0' ? "lol" : a / b);

const operate = (a, b, op) => {
  //main function for operating
  switch (op) {
    case "+":
      answer = add(a, b);
      break;
    case "-":
      answer = subtract(a, b);
      break;
    case "/":
      answer = divide(a, b);
      break;
    case "*":
      answer = multiply(a, b);
      break;
    default:
      answer = "ERROR";
  }
  answer === 'lol'? solution.innerText = 'lol' :
  solution.innerText = Math.round(answer * 10000000) / 10000000; //to help with floating decimals
};

const clickPlus = () => {
  //runs every time user pushes '+'
  if (operator === "" && firstNumber !== "" && secondNumber === "") {
    operator = "+";
    problem.innerText += "+";
  } else if (secondNumber !== "") {
    operate(firstNumber, secondNumber, operator);
    firstNumber = answer.toString();
    operator = "+";
    secondNumber = "";
    answer = "";
    problem.innerText = firstNumber + "+";
    solution.innerText = "";
  }
};
const clickMinus = () => {
  //runs every time user pushes '-'
  if (operator === "" && firstNumber !== "" && secondNumber === "") {
    operator = "-";
    problem.innerText += "-";
  } else if (secondNumber !== "") {
    operate(firstNumber, secondNumber, operator);
    firstNumber = answer.toString();
    operator = "-";
    secondNumber = "";
    answer = "";
    problem.innerText = firstNumber + "-";
    solution.innerText = "";
  }
};
const clickTimes = () => {
  //runs every time user pushes '×'
  if (operator === "" && firstNumber !== "" && secondNumber === "") {
    operator = "*";
    problem.innerText += "×";
  } else if (secondNumber !== "") {
    operate(firstNumber, secondNumber, operator);
    firstNumber = answer.toString();
    operator = "*";
    secondNumber = "";
    answer = "";
    problem.innerText = firstNumber + "×";
    solution.innerText = "";
  }
};
const clickDividedBy = () => {
  //runs every time user pushes '÷'
  if (operator === "" && firstNumber !== "" && secondNumber === "") {
    operator = "/";
    problem.innerText += "/";
  } else if (secondNumber !== "") {
    operate(firstNumber, secondNumber, operator);
    firstNumber = answer.toString();
    operator = "/";
    secondNumber = "";
    answer = "";
    problem.innerText = firstNumber + "÷";
    solution.innerText = "";
  }
};
const clickEquals = () => {
  //runs every time user pushes '='
  if (firstNumber !== "" && secondNumber === "" && operator !== "") {
    operate(firstNumber, firstNumber, operator);
  } else if (firstNumber !== "" && secondNumber === "" && operator === "") {
    operate(firstNumber, "0", "+");
  } else {
    operate(firstNumber, secondNumber, operator);
  }
};

const clickAllClear = () => {
  //runs every time user pushes 'AC'
  operator = "";
  firstNumber = "";
  secondNumber = "";
  answer = "";
  problem.innerText = "";
  solution.innerText = "";
};
const clickBackSpace = () => {
  //runs every time user pushes 'C'
  if (secondNumber === "" && firstNumber !== "" && operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    problem.innerText = problem.innerText.slice(0, -1);
  } else if (secondNumber === "" && operator !== "") {
    operator = "";
    problem.innerText = problem.innerText.slice(0, -1);
  } else {
    secondNumber = secondNumber.slice(0, -1);
    problem.innerText = problem.innerText.slice(0, -1);
  }
};

//NUMBER EVENTS
num0.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "" && firstNumber !== "") {
    firstNumber += "0";
  } else if (firstNumber === "") {
    return;
  } else if (secondNumber === "") {
    secondNumber += "0";
  } else if (secondNumber !== "") {
    secondNumber += "0";
  }
  problem.innerText += "0";
});
num1.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "1";
  } else {
    secondNumber += "1";
  }
  problem.innerText += "1";
});
num2.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "2";
  } else {
    secondNumber += "2";
  }
  problem.innerText += "2";
});
num3.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "3";
  } else {
    secondNumber += "3";
  }
  problem.innerText += "3";
});
num4.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "4";
  } else {
    secondNumber += "4";
  }
  problem.innerText += "4";
});
num5.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "5";
  } else {
    secondNumber += "5";
  }
  problem.innerText += "5";
});
num6.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "6";
  } else {
    secondNumber += "6";
  }
  problem.innerText += "6";
});
num7.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "7";
  } else {
    secondNumber += "7";
  }
  problem.innerText += "7";
});
num8.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "8";
  } else {
    secondNumber += "8";
  }
  problem.innerText += "8";
});
num9.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (operator === "") {
    firstNumber += "9";
  } else {
    secondNumber += "9";
  }
  problem.innerText += "9";
});
decimal.addEventListener("click", () => {
  if (answer !== "") {
    return;
  } else if (firstNumber.includes(".") && operator === "") {
    return;
  } else if (operator === "") {
    firstNumber += ".";
  } else if (secondNumber.includes(".")) {
    return;
  } else {
    secondNumber += ".";
  }
  problem.innerText += ".";
});

//OPERATOR ASSIGNMENTS

backSpace.addEventListener("click", clickBackSpace);
dividedBy.addEventListener("click", clickDividedBy);
times.addEventListener("click", clickTimes);
minus.addEventListener("click", clickMinus);
plus.addEventListener("click", clickPlus);
equals.addEventListener("click", clickEquals);
allClear.addEventListener("click", clickAllClear);
