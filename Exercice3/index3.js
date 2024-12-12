document.getElementById("simpleCalcForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;
  
    let result;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number2 !== 0 ? number1 / number2 : "Error (div by 0)";
        break;
      case "%":
        result = number1 % number2;
        break;
    }
  
    document.getElementById("simpleCalcResult").innerText = `Result: ${result}`;
  });

  
  let currentInput = "";
  let operator = "";
  let firstOperand = null;
  
  const display = document.getElementById("display");
  
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
  
      if (!value) return;
  
      if (["+", "-", "*", "/", "%"].includes(value)) {
        if (currentInput) {
          operator = value;
          firstOperand = parseFloat(currentInput);
          currentInput = "";
        }
      } else if (value === "C") {
        currentInput = "";
        operator = "";
        firstOperand = null;
        display.value = ""; // Clear the display
      } else if (value === "=") {
        if (operator && currentInput && firstOperand !== null) {
          const secondOperand = parseFloat(currentInput);
          switch (operator) {
            case "+":
              currentInput = (firstOperand + secondOperand).toString();
              break;
            case "-":
              currentInput = (firstOperand - secondOperand).toString();
              break;
            case "*":
              currentInput = (firstOperand * secondOperand).toString();
              break;
            case "/":
              currentInput = secondOperand !== 0 ? (firstOperand / secondOperand).toString() : "Error";
              break;
            case "%":
              currentInput = (firstOperand % secondOperand).toString();
              break;
          }
          operator = "";
          firstOperand = null;
        }
      } else {
        currentInput += value; // Append the digit or decimal
      }
  
      // Update the display
      display.value = currentInput;
    });
  });
  