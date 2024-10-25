import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Returns the longest word in a given string.
 * @param {string} str - The input string from which to find the longest word.
 * @returns {string|null} The longest word or `null` if the input is not a valid string.
 */
export function longest(str) {
  // Validate input: check if it's a string
  if (!isString(str)) return null; 

  // If input is empty or contains only whitespace, return an empty string
  if (str.trim() === '') return ''; 

  // Split the input string into words
  const words = splitOnWhitespace(str); 
  let longestWord = ''; // Initialize to an empty string to handle case of an empty array

  // Iterate through the words to find the longest one
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // Update longest word if current word is longer
    }
  }

  return longestWord; // Return the longest word found
}

// Test cases to verify functionality
console.assert(longest('halló heimur') === 'heimur', 'longest: Expected "heimur" for input "halló heimur"');
console.assert(longest('hæhæ halló') === 'halló', 'longest: Expected "halló" for input "hæhæ halló"');
console.assert(longest('a aa aaa') === 'aaa', 'longest: Expected "aaa" for input "a aa aaa"');
console.assert(longest('') === '', 'longest: Expected an empty string for empty input');
console.assert(longest('   ') === '', 'longest: Expected an empty string for input with only spaces');
console.assert(longest(null) === null, 'longest: Expected null for non-string input');
console.assert(longest('word1 word2 word3 word4') === 'word4', 'longest: Expected "word4" for input "word1 word2 word3 word4"');
