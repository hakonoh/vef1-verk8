import { isString } from './helpers.js';

/**
 * Returns the input string reversed.
 * @param {string} str - The input string to reverse.
 * @returns {string|null} The reversed string, or `null` if the input is not a valid string.
 */
export function reverse(str) {
  if (!isString(str)) return null; // Return null if input is not a valid string
  if (str === '') return ''; // Return empty string if input is empty

  return str.split('').reverse().join(''); // Split into characters, reverse the array, and join back to a string
}

// Test cases to verify functionality
console.assert(reverse('halló heimur') === 'rumieh óllah', 'reverse: Expected "rumieh óllah" for "halló heimur"');
console.assert(reverse('asdf') === 'fdsa', 'reverse: Expected "fdsa" for "asdf"');
console.assert(reverse('') === '', 'reverse: Expected empty string for an empty input');