import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Skilar lengsta orði í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {string|null} Lengsta orðið eða `null` ef inntak er ekki strengur.
 */
export function longest(str) {
  if (!isString(str)) return null; // Check if input is a valid string
  if (str.trim() === '') return ''; // Return empty string if input is empty

  const words = splitOnWhitespace(str); // Split the input into words
  let longestWord = words[0] || ''; // Handle case of an empty array

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Test cases
console.assert(longest('halló heimur') === 'heimur', 'longest: Skilar "heimur" fyrir lengsta orð');
console.assert(longest('hæ halló') === 'halló', 'longest: Skilar "halló" fyrir lengsta orð');
console.assert(longest('a ab abc') === 'abc', 'longest: Skilar "abc" fyrir lengsta orð');
console.assert(longest('') === '', 'longest: Skilar tómum streng fyrir tóman streng');
console.assert(longest(null) === null, 'longest: Skilar null ef ekki er strengur');
