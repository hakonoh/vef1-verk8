import { isString } from './helpers.js';

/**
 * Athugar hvort strengur sé samhverfur.
 * @param {string} str Inntaksstrengur.
 * @returns {boolean} `true` ef `str` er samhverfur, annars `false`.
 */
export function palindrome(str) {
  if (!isString(str)) return false; // Check if input is a valid string
  if (str === '') return false; // Empty string is not a palindrome

  const cleanedStr = str.toLowerCase(); // Case-insensitive check
  const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the string

  return cleanedStr === reversedStr; // Compare original and reversed strings
}


// Test cases
console.assert(palindrome('anna') === true, 'palindrome: Skilar `true` fyrir "anna"');
console.assert(palindrome('racecar') === true, 'palindrome: Skilar `true` fyrir "racecar"');
console.assert(palindrome('halló') === false, 'palindrome: Skilar `false` fyrir "halló"');
console.assert(palindrome('') === false, 'palindrome: Skilar `false` fyrir tómum streng');
//console.assert(palindrome(null) === false, 'palindrome: Skilar `false` ef ekki er strengur');
