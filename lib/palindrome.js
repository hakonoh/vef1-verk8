import { isString } from './helpers.js';

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The input string to check.
 * @returns {boolean} `true` if `str` is a palindrome, otherwise `false`.
 */
export function palindrome(str) {
  if (!isString(str)) return false; // Return false if input is not a valid string
  if (str === '') return false; // Return false if input is an empty string (not considered a palindrome)

  const cleanedStr = str.replace(/\s+/g, '').toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the string

  return cleanedStr === reversedStr; // Return true if original and reversed strings match
}
// Test cases to verify functionality
console.assert(palindrome('racecar') === true, 'palindrome: Expected `true` for "racecar"');
console.assert(palindrome('RaceCar') === true, 'palindrome: Expected `true` for "RaceCar" (case-insensitive check)');
console.assert(palindrome('hello') === false, 'palindrome: Expected `false` for "hello"');
console.assert(palindrome('') === false, 'palindrome: Expected `false` for an empty string');
console.assert(palindrome('A man a plan a canal Panama') === false, 'palindrome: Expected `false` for "A man a plan a canal Panama" without ignoring spaces');