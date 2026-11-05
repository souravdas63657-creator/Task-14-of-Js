function analyzeNumber(n) {
  console.log(`\n--- Results for Number: ${n} ---`);

  // 1. Find the sum of first n numbers
  let sumFirstN = 0;
  for (let i = 1; i <= n; i++) {
    sumFirstN += i;
  }
  console.log(`Sum of first ${n} numbers:`, sumFirstN);

  // 2. Print table of n
  console.log(`Table of ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }

  // 3. Check if it is a prime number
  let isPrime = n > 1; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(`Is prime number:`, isPrime);

  // 4. Print all its factors
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  console.log(`Factors:`, factors.join(', '));

  // 5. Find sum of all digits of a number
  let tempSum = n;
  let sumOfDigits = 0;
  while (tempSum > 0) {
    sumOfDigits += tempSum % 10; // Extract the last digit
    tempSum = Math.floor(tempSum / 10); // Remove the last digit
  }
  console.log(`Sum of digits:`, sumOfDigits);

  // 6. Check if it is an Armstrong number
  let tempArm = n;
  let sumOfCubes = 0;
  while (tempArm > 0) {
    let digit = tempArm % 10;
    sumOfCubes += Math.pow(digit, 3); // Cube the digit and add to total
    tempArm = Math.floor(tempArm / 10);
  }
  console.log(`Is Armstrong number:`, sumOfCubes === n);
}

// 7. At least 5 different variables to check
let testVar1 = 5;   // Prime number
let testVar2 = 12;  // Number with many factors
let testVar3 = 153; // Known Armstrong number
let testVar4 = 139; // From your example
let testVar5 = 7;   // Another prime number

// 8. Execute the function for each variable
analyzeNumber(testVar1);
analyzeNumber(testVar2);
analyzeNumber(testVar3);
analyzeNumber(testVar4);
analyzeNumber(testVar5);