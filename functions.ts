/* FUNCTIONS */

// return is a number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// return is a string
function addToBeString(n1: number, n2: number) {
  return n1.toString() + n2.toString();
}

//dont need to specify the return type, let ts do the work
function addResultTypeGiven(n1: number, n2: number): number {
  return n1 + n2;
}

// do NOT use undefined, use void instead
function printResult(num: number): void {
  // void = function does not return anything, however it executes its code
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(5, 12));
// console.log(printResult(add(5, 12))); //undefined, because a function is not allowed to return undefined, so use void in this case!!!

// let combineValues: Function; // as any kind of function
let combineValues: (a: number, b: number) => number; // as a function that takes 2 numbers and returns a number

combineValues = add; //can access to add function because it's points there, PLUS it's a function that takes two numbers and returns a number (just what i wanted in the prev line)
// combineValues = printResult; //mismatch: function w one argument and nothing to return, so it's not allowed to use this function
// combineValues = 5;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  //   alert(result);
  console.log(result);
  return result; //by specifying void on our callback, it will ignore any kind of result so return won't work
});
