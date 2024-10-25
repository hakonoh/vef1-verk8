import { isString } from './helpers.js';

/**
 * Skilar strengnum í öfugri röð.
 * @param {string} str Inntaksstrengur.
 * @returns {string|null} Öfugur strengur eða `null` ef inntak er ekki strengur.
 */
export function reverse(str) {
  if (!isString(str)) return null; // Check if input is a valid string
  if (str === '') return ''; // Return empty string if input is empty

  return str.split('').reverse().join(''); // Reverse the string and join back
}

// Test cases
console.assert(reverse('halló') === 'óllah', 'reverse: Skilar "óllah" fyrir "halló"');
console.assert(reverse('heimur') === 'rumieh', 'reverse: Skilar "rumieh" fyrir "heimur"');
console.assert(reverse('') === '', 'reverse: Skilar tómum streng fyrir tóman streng');
//console.assert(reverse(null) === null, 'reverse: Skilar `null` ef ekki er strengur');
