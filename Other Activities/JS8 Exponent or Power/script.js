function calculateExponent(base, exponent) {
    const result = Math.pow(base, exponent);
    return result;
}
  
const baseInput = prompt("Enter the base: ");
const exponentInput = prompt("Enter the exponent: ");
  
const base = parseFloat(baseInput);
const exponent = parseFloat(exponentInput);
  
if (!isNaN(base) && !isNaN(exponent)) {
    const result = calculateExponent(base, exponent);
    console.log(`${base} raised to the power of ${exponent} is: ${result}`);
} else {
    console.log("Invalid input. Please enter valid numbers for base and exponent.");
}
  