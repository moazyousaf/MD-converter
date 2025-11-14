#!/usr/bin/env node
// index.js

// Tenta di usare la sintassi ES Module
import fs from 'fs';
import path from 'path';
import { convertMarkdown } from './src/converter.js';

// BUG LOGICO: Nessun controllo sugli argomenti!
// process.argv[2] è l'input file (es. 'test.md')
// process.argv[3] è l'output file (es. 'test.html')

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Se inputFile o outputFile sono undefined, questo codice andrà in crash
console.log(`Converting ${inputFile} to ${outputFile}...`);

try {
  const fullInputPath = path.resolve(inputFile);
  const mdContent = fs.readFileSync(fullInputPath, 'utf8');

  const htmlContent = convertMarkdown(mdContent);

  const fullOutputPath = path.resolve(outputFile);
  fs.writeFileSync(fullOutputPath, htmlContent);

  console.log(`✅ Success! File saved to ${fullOutputPath}`);
} catch (err) {
  console.error('❌ Error during conversion:');
  console.error(err.message);
  process.exit(1);
}
