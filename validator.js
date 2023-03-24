/* eslint-disable no-unused-vars */
function isValid(creditCardNumber) {
  const reversedNumberArray = creditCardNumber.split("").reverse();
  let sum = 0;
  for (let i = 0; i < reversedNumberArray.length; i++) {
    let digit = parseInt(reversedNumberArray[i]);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

function maskify(creditCardNumber) {
  if (creditCardNumber.length <= 4) {
    return creditCardNumber;
  }
  const lastFourDigits = creditCardNumber.slice(-4);
  const maskedNumber = "#".repeat(creditCardNumber.length - 4);
  return maskedNumber + lastFourDigits;
}
