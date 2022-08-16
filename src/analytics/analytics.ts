console.log("Sending analytics...");
let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true; //it works w variables but not parameters
  console.log(logged);
}

sendAnalytics("the data");

/*
noImplicitAny: true - tells the compiler that every variable must have a type
strictNullChecks: false - tells the compiler that it should allow undefined or null (button element)
strictNullChecks: true - tells the compiler that it should not allow undefined or null
*/
