console.log("----------------- Sequence Control");
console.log("----- ex1 ---");
function myCalculator(num1, num2) {
  return num1 + num2;
}

function displayer(some) {
  console.log(some);
}

displayer(myCalculator(2, 6)); //8

console.log("--- ex2 ---");
function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  displayer2(sum);
}

myCalculator2(3, 3); //6

function displayer2(some) {
  console.log(some);
}

console.log("---------------- callback javascript");
console.log("------------------- ex2");

function myCalculator3(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator3(2, 5, displayer3); //7

function displayer3(some) {
  console.log(some);
}

console.log("------------------- ex2");
const myNums = [4, 1, -20, -7, 5, 9, -6];

const posNums = removeNeg(myNums, (x) => x >= 0);

function removeNeg(numbers, callback) {
  let myArr = [];
  for (let x of numbers) {
    if (callback(x)) {
      myArr.push(x);
    }
  }
  return myArr;
}

console.log(posNums); //[ 4, 1, 5, 9 ]
