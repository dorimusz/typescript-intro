/* UNKNOWN TYPE */
let userInput: unknown; // more restrictive than any, but still unknown
let userInput2: any; // disables type checking
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput; // not assignable, because userInput is unknown, so not guaranteed to be a string; with extra type checking, it will be assignable
}

/* NEVER TYPE */
// its not void, it's never, it's a type that never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {} // infinite loop, never returns
}

//never produces a value, always crashes and breaks, never returns anything, console won't show anything
const result = generateError("An error occurred!", 500);
console.log(result);
generateError("An error occurred!", 500);
