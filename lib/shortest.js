import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Skilar stysta orði í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {string|null} Stysta orðið eða `null` ef inntak er ekki strengur.
 */
export function shortest(str) {
  if (!isString(str)) return null; // Check if input is a valid string
  if (str.trim() === '') return ''; // Return empty string if input is empty

  const words = splitOnWhitespace(str); // Split the input into words
  let shortestWord = words[0] || ''; // Handle case of an empty array

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

// Test cases
console.assert(shortest('halló heimur') === 'halló', 'shortest: Skilar "halló" fyrir stysta orð');
console.assert(shortest('a ab abc') === 'a', 'shortest: Skilar "a" fyrir stysta orð');
console.assert(shortest('abc ab a') === 'a', 'shortest: Skilar "a" fyrir stysta orð');
console.assert(shortest('') === '', 'shortest: Skilar tómum streng fyrir tóman streng');
//console.assert(shortest(null) === null, 'shortest: Skilar null ef ekki er strengur');
