// src/converter.js

// Tenta di usare la sintassi ES Module
const { marked } = require('marked'); //importa l'oggetto marked dalla libreria -> per usare marked.parse()

/**
 * Converte una stringa Markdown in una stringa HTML.
 * @param {string} mdText - Il testo markdown da convertire.
 * @returns {string} Il testo HTML risultante.
 */
function convertMarkdown(mdText) {
  if (typeof mdText !== 'string' || !mdText) {
    return ''; // Gestisce input nullo o vuoto
  }
  return marked.parse(mdText);
}
module.exports = { convertMarkdown };
