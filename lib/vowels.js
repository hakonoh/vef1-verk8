import { isString } from './helpers.js';

// Define Icelandic vowels
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

/**
 * Skilar fjölda sérhljóða í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {number} Fjöldi sérhljóða í streng.
 */
export function vowels(str) {
  if (!isString(str)) return 0; // Check if input is a valid string

  let count = 0;
  for (const char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      count++;
    }
  }

  return count;
}

// Test cases
console.assert(vowels('halló') === 2, 'vowels: Skilar 2 fyrir "halló"');
console.assert(vowels('heimur') === 3, 'vowels: Skilar 3 fyrir "heimur"');
console.assert(vowels('') === 0, 'vowels: Skilar 0 fyrir tóman streng');
//console.assert(vowels(null) === 0, 'vowels: Skilar 0 ef ekki er strengur');
