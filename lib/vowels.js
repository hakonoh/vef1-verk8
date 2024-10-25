import { isString } from './helpers.js';

// Define Icelandic vowels as a constant array
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

/**
 * Returns the number of vowels in a given string.
 * @param {string} str - The input string to analyze.
 * @returns {number} The number of vowels in the string.
 */
export function vowels(str) {
  if (!isString(str)) return 0; // Return 0 if input is not a valid string

  let count = 0;
  for (const char of str.toLowerCase()) { // Convert to lowercase to ensure case-insensitive matching
    if (VOWELS.includes(char)) {
      count++; // Increment count if character is a vowel
    }
  }

  return count;
}

// Test cases to verify functionality
console.assert(vowels('halló') === 2, 'vowels: Expected 2 vowels in "halló"');
console.assert(vowels('heimur') === 3, 'vowels: Expected 3 vowels in "heimur"');
console.assert(vowels('') === 0, 'vowels: Expected 0 vowels in an empty string');
