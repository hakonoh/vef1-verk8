import { isString } from './helpers.js';

// íslenskaa
const CONSONANTS = 'bcdfghjklmnpqrstvwxzðþ'.split('');

/**
 * Skilar fjölda samhljóða í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {number} Fjöldi samhljóða í streng.
 */
export function consonants(str) {
  if (!isString(str)) return 0;

  let count = 0;
  for (const char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      count++;
    }
  }

  return count;
}

// Test
console.assert(consonants('halló') === 3, 'consonants: Skilar 3 fyrir "halló"');
console.assert(consonants('') === 0, 'consonants: Skilar 0 fyrir tóman streng');
//console.assert(consonants(null) === 0, 'consonants: Skilar 0 ef ekki strengur');
