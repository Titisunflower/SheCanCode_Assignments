function calculateFactorial(number) {

    if (number < 0) {
      return "Factorial is not defined for negative numbers.";
    }
  

    let factorialResult = 1;
  
 
    for (let i = 1; i <= number; i++) {
      factorialResult *= i;
    }
  
    return factorialResult;
}
  
const userInput = 5;
const result = calculateFactorial(userInput);
  
console.log(`The factorial of ${userInput} is: ${result}`);
  