function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  } 
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let difference = 0;

  if(arr.length === 0) {
    return 0;
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
  } 
  return difference = max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;
  
  if(arr.length === 0) {
    return 0;
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    } 
  } 
  return difference = sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;
  
  if(arr.length === 0) {
      return 0;
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }  
  return avg = sumEvenElement / countEvenElement;
}


function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let funcArr = arrOfArr[i];
    const funcResult = func(...funcArr);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }

  }
  return maxWorkerResult;
}
