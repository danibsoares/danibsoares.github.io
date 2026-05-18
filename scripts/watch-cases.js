const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const casesDir = path.join(__dirname, '..', 'cases');
const buildScript = path.join(__dirname, 'build-cases.js');

function rebuild() {
  try {
    execSync('node "' + buildScript + '"', { stdio: 'inherit' });
  } catch (e) {}
}

rebuild();

fs.watch(casesDir, function (event, filename) {
  if (!filename || !filename.endsWith('.js') || filename === 'index.js') return;
  rebuild();
});

console.log('Observando cases/ — adicione ou remova arquivos .js livremente.');
