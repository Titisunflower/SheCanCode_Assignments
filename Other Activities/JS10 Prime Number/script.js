function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimesInRange(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  const startRange = 0;
  const endRange = 200;
  
  console.log(`Prime numbers in the range ${startRange} to ${endRange}:`);
  printPrimesInRange(startRange, endRange);
  