// 100 Days Of Coding Challenge!

/** Question 88: Converting Strings to Numbers:
Write a function that takes a string representation of a number (e.g., `123`) and converts it into an actual number type.*/

//--------------------------------------------------------------------------------------------------------------------------

/**
 * Converts a string representation of a number to an actual number type.
 * @param str - The string representation of the number.
 * @returns The number type of the input string.
 */

// Function "stringToNumber()" takes a string as an argument and returns a number
function stringToNumber(str: string): number {
  // Using the Number constructor to convert the string to a number
  return Number(str);
}

// logging the result of the function "stringToNumber()" to the console
const num = stringToNumber("927");
console.log(num); // Output: 927
