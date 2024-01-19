const prompt = require("prompt-sync")({ sigint: true });

function calculateA(a, b, c, d) {
  //check if each value is REAL number
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    throw new Error("Input Error, Please enter REAL number!🥰");
  }
  //check if c plus d is not equal to zero
  if (c + d === 0) {
    throw new Error(
      "zero is not allowed for c and d, Please enter REAL number for c and d!"
    );
  }
  //run calculation if
  return (a + b) / (c + d);
}

try {
  const a = parseFloat(prompt("Please enter value of A:"));
  const b = parseFloat(prompt("Please enter value of B:"));
  const c = parseFloat(prompt("Please enter value of C:"));
  const d = parseFloat(prompt("Please enter value of D:"));
  const result = calculateA(a, b, c, d);
  console.log("Result:", result);
} catch (error) {
  console.error(error.message);
}
