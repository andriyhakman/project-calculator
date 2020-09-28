const calculatorResultField = document.querySelector(".calculator-result");

document.querySelectorAll(".digits button").forEach((button)=>button.addEventListener("click", digitPressed));

function digitPressed(event) {
    const digit = event.target.innerText;
    calculatorResultField.value += digit;
}

document.querySelectorAll(".opers button").forEach((button)=>button.addEventListener("click", operPressed));

function operPressed(event) {
  const lastSymbol = Number(calculatorResultField.value[calculatorResultField.value.length - 1]);
  const operator = event.target.innerText;
  if (isNaN(lastSymbol)) {
    console.log(lastSymbol);
    calculatorResultField.value = calculatorResultField.value.substring(0, calculatorResultField.value.length - 1);
  }

  calculatorResultField.value += operator;
}

document.querySelector(".eq").addEventListener("click", eqPressed);

function eqPressed() {
    const result = eval(calculatorResultField.value).toFixed(2);
    if (result === Infinity) {
        alert("Ви не можете ділити на 0");
    } else {
        calculatorResultField.value = result;
    }
}

document.querySelector(".clean-all").addEventListener("click", acPressed);

function acPressed() {
    calculatorResultField.value = "";
}

const clean = document.querySelector(".clean");
clean.addEventListener("click", ()=>{
    calculatorResultField.value = calculatorResultField.value.substring(0, calculatorResultField.value.length - 1);
}
);
