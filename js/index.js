const calculatorResultField = document.querySelector(".calculator-result");

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(event) {
  const digit = event.target.innerText;
  calculatorResultField.value += digit;
}

document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", operPressed));

function operPressed(event) {
  const oper = event.target.innerText;
  const resultFieldValue = calculatorResultField.value;
  const lastSymbol = resultFieldValue[resultFieldValue.length - 1];
  //calculatorResultField.value += oper;
  if (lastSymbol === 
}

document.querySelector(".eq").addEventListener("click", eqPressed);

function eqPressed() {
  const result = eval(calculatorResultField.value);
  if (result === Infinity) {
    alert("Ви не можете ділити на 0");
  } else {
    calculatorResultField.value = result;
  }
}

document.querySelector(".cl").addEventListener("click", acPressed);

function acPressed() {
  calculatorResultField.value = "";
}
