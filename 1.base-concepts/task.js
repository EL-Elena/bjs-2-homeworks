"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2 * a));
    arr.push((-b - Math.sqrt(d))/(2 * a));
  } else {
    arr = [];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  };
  if (isNaN(contribution)) {
    return false;
  };
  if (isNaN(amount)) {
    return false;
  }
  let S = amount - contribution;
  let P = (percent / 100) / 12;
  let payment = (S * (P + (P / (Math.pow((1 + P), countMonths) - 1))));
  let totalAmount = +(payment * countMonths).toFixed(2);

  return totalAmount;
}
