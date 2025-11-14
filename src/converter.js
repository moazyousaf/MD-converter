// src/converter.js

// Tenta di usare la sintassi ES Module
import { marked } from 'marked';

/**
 * Converte una stringa Markdown in una stringa HTML.
 * @param {string} mdText - Il testo markdown da convertire.
 * @returns {string} Il testo HTML risultante.
 */
export function convertMarkdown(mdText) {
  if (typeof mdText !== 'string' || !mdText) {
    return ''; // Gestisce input nullo o vuoto
  }
  return marked.parse(mdText);
}
