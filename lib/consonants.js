import { isString } from './helpers.js';

// Define Icelandic consonants
const CONSONANTS = 'bcdfghjklmnpqrstvwxzðþ'.split('');

/**
 * Returns the number of consonants in the given string.
 * @param {string} str - The input string to be checked.
 * @returns {number} The count of consonants in the string. Returns 0 if input is not a valid string.
 */
export function consonants(str) {
  // Check if the input is a valid string
  if (!isString(str)) return 0; // Return 0 for non-string inputs

  let count = 0; // Initialize a counter for consonants
  for (const char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      count++; // Increment the counter if the character is a consonant
    }
  }

  return count; // Return the total count of consonants
}

// Test cases
console.assert(consonants('halló') === 3, 'consonants: Expected 3 for the input "halló"');
console.assert(consonants('') === 0, 'consonants: Expected 0 for an empty string');
console.assert(consonants(null) === 0, 'consonants: Expected 0 for a non-string input (null)');
console.assert(consonants('abc') === 2, 'consonants: Expected 2 for the input "abc"');
console.assert(consonants('ýe') === 0, 'consonants: Expected 0 for the input "ýe" which contains no consonants');
