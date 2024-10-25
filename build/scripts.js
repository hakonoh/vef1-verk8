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

// Select DOM elements
const formElement = document.querySelector('form');
const textArea = document.getElementById('string');
const outputElement = document.querySelector('.output');
const resetButton = document.querySelector('button[type="reset"]');

// Result display elements and default values
const resultElements = {
  longest: { el: document.querySelector('.longest'), defaultText: 'No words', fn: longest },
  shortest: { el: document.querySelector('.shortest'), defaultText: 'No words', fn: shortest },
  vowels: { el: document.querySelector('.vowels'), defaultText: '0', fn: vowels },
  consonants: { el: document.querySelector('.consonants'), defaultText: '0', fn: consonants },
  palindrome: { el: document.querySelector('.palindrome'), defaultText: 'not a palindrome', fn: (str) => (palindrome(str) ? 'palindrome' : 'not a palindrome') },
  reversed: { el: document.querySelector('.reversed'), defaultText: '', fn: reverse }
};

/**
 * Handler for form submission; processes input text and updates the DOM with results.
 * @param {Event} event - The event triggered by form submission.
 */
function submitHandler(event) {
  event.preventDefault();

  const str = textArea?.value.trim();
  if (!str) return; // If input is empty, do nothing

  // Update each element with its respective function output
  for (const key in resultElements) {
    const { el, defaultText, fn } = resultElements[key];
    el.textContent = fn(str) || defaultText;
  }

  // Display the output section
  outputElement?.classList.remove('hidden');
}

/**
 * Handler for the reset button; clears all results and hides the output section.
 */
function resetHandler() {
  // Reset each element to its default value
  for (const key in resultElements) {
    const { el, defaultText } = resultElements[key];
    el.textContent = defaultText;
  }

  // Hide the output section
  outputElement?.classList.add('hidden');
}

// Attach event listeners
formElement?.addEventListener('submit', submitHandler);
resetButton?.addEventListener('click', resetHandler);