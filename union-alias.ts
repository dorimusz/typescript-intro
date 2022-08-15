// UNION TYPE
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

// type alias
type Combinable = number | string; // works with any type
type ConversionDescriptor = "as-number" | "as-string";

// LITERAL TYPES
function combine2(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor //any other string value will not be allowed
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; // force the conversion to number with +; if cannot be converted to number, it will be NaN
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges2 = combine2(30, 27, "as-number");
console.log(combinedAges2);

const combinedStringAges2 = combine2("30", "27", "as-number");
console.log(combinedStringAges2);

const combinedNames2 = combine2("Max", "Anna", "as-string");
console.log(combinedNames2);
