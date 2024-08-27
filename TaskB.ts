// 100 Days Of Coding Challenge!

/** Question 89: Rounding Numbers:
Create a function that takes a number with decimals (e.g., `3.14159`) and rounds it to two decimal places.*/

//-----------------------------------------------------------------------------------------------------------

/**
 * Rounds a number to two decimal places.
 * @param num - The number to be rounded.
 * @returns The number rounded to two decimal places.
 */

// Function "roundToTwoDecimals" to round a number to two decimal places
function roundToTwoDecimals(num: number): number {
  // Multiplying by 100, rounding, and then dividing by 100 to get two decimal places
  return Math.round(num * 100) / 100;
}

// logging the rounded number
const roundedNum = roundToTwoDecimals(3.14159);
console.log(roundedNum); // Output: 3.14
