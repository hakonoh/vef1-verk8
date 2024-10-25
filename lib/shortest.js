import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Returns the shortest word in a given string.
 * @param {string} str - The input string to analyze.
 * @returns {string|null} The shortest word, or `null` if the input is not a valid string.
 */
export function shortest(str) {
  if (!isString(str)) return null; // Return null if input is not a valid string
  if (str.trim() === '') return ''; // Return empty string if input only contains whitespace

  const words = splitOnWhitespace(str); // Split the input into words based on whitespace
  let shortestWord = words[0] || ''; // Initialize with the first word, or empty if none

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word; // Update shortestWord if current word is shorter
    }
  }

  return shortestWord;
}

// Test cases to verify functionality
console.assert(shortest('halló heimur') === 'halló', 'shortest: Expected "halló" as the shortest word');
console.assert(shortest('a aa aaa') === 'a', 'shortest: Expected "a" as the shortest word');
console.assert(shortest('aaa aa a') === 'a', 'shortest: Expected "a" as the shortest word');
console.assert(shortest('') === '', 'shortest: Expected empty string for an empty input');
