process.exit(7);
const fs = require('node:fs');

fs.mkdirSync('dist', { recursive: true });

fs.writeFileSync(
  'dist/index.html',
  '<!doctype html><html><body><h1>Deployed with DeployMe</h1></body></html>',
);

console.log('Static site built successfully.');
