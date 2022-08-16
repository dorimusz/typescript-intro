const button = document.querySelector("button")!;
// ! cheap workaround for nullable types

function clickHandler(message: string) {
  console.log("Clicked" + message);
}

// if statement makes sure that the button is not null
if (button) {
  // strictBind - false  Won't throw an error if the function is not bound to the button
  button.addEventListener("click", clickHandler.bind(null, "you're welcome"));
}
