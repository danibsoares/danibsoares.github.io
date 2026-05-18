const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, '..', 'cases');
const indexFile = path.join(casesDir, 'index.js');

const names = fs
  .readdirSync(casesDir)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .map(f => f.replace('.js', ''));

const content =
  '[' +
  names.map(n => "'" + n + "'").join(', ') +
  '].forEach(function (name) {\n' +
  "  document.write('<script src=\"cases/' + name + '.js\"><\\/script>');\n" +
  '});\n';

fs.writeFileSync(indexFile, content);
console.log('cases/index.js atualizado:', names.join(', '));
