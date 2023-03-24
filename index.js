/* eslint-disable no-undef */

const form = document.getElementById("form");
const creditCardNumberInput = document.getElementById("credit-card-number");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const creditCardNumber = creditCardNumberInput.value;
  if (creditCardNumber.length < 16) {
    resultDiv.textContent = `El número de tarjeta de crédito debe tener al menos 16 carácteres.`;
    resultDiv.style.color = "red";
  } else if (isValid(creditCardNumber)) {
    resultDiv.textContent = `La tarjeta con número ${maskify(creditCardNumber)} es válida.`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `La tarjeta con número ${maskify(creditCardNumber)} no es válida.`;
    resultDiv.style.color = "red";
  }
});

creditCardNumberInput.addEventListener("input", function() {
  const creditCardNumber = creditCardNumberInput.value;
  if (creditCardNumber.length < 16) {
    resultDiv.textContent = "";
  }
});

//5176085109803328 número de tarjeta
