/**
 * Lausn á verkefni 8
 * Sýnilausn á verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';
import { palindrome } from './lib/palindrome.js';
import { reverse } from './lib/reversed.js';

// DOM elements
const formElement = document.querySelector('form');
const textArea = document.getElementById('string');
const longestElement = document.querySelector('.longest');
const shortestElement = document.querySelector('.shortest');
const vowelsElement = document.querySelector('.vowels');
const consonantsElement = document.querySelector('.consonants');
const palindromeElement = document.querySelector('.palindrome');
const reversedElement = document.querySelector('.reversed');
const outputElement = document.querySelector('.output');
const resetButton = document.querySelector('button[type="reset"]');

/**
 * Handler fyrir form submission, skoðar input up updatear DOM
 * @param {Event} event
 */
function submitHandler(event) {
  event.preventDefault();

  let str = '';
  if (textArea instanceof HTMLTextAreaElement) {
    str = textArea.value.trim();
  }

  // Skoða og updatea
  if (longestElement) longestElement.textContent = longest(str) || 'Engin orð';
  if (shortestElement) shortestElement.textContent = shortest(str) || 'Engin orð';
  if (vowelsElement) vowelsElement.textContent = vowels(str)?.toString() || '0';
  if (consonantsElement) consonantsElement.textContent = consonants(str)?.toString() || '0';
  if (palindromeElement) palindromeElement.textContent = palindrome(str) ? 'samhverfur' : 'ekki samhverfur';
  if (reversedElement) reversedElement.textContent = reverse(str) || '';

  // Sýna output
  if (outputElement) {
    outputElement.classList.remove('hidden');
  }
}

/**
 * Handler fyrir reset button, clearar niðurstöður og felur output
 */
function resetHandler() {
    // Check each element before modifying it
    if (longestElement) longestElement.textContent = '';
    if (shortestElement) shortestElement.textContent = '';
    if (vowelsElement) vowelsElement.textContent = '';
    if (consonantsElement) consonantsElement.textContent = '';
    if (palindromeElement) palindromeElement.textContent = 'ekki';
    if (reversedElement) reversedElement.textContent = '';
  
    if (outputElement) outputElement.classList.add('hidden');
  }
  
  // Listeners fyrir breytingum
  if (formElement) formElement.addEventListener('submit', submitHandler);
  if (resetButton) resetButton.addEventListener('click', resetHandler);