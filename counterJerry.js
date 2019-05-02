const fs = require('fs');

const filePath = __dirname + '/counter1.txt';

fs.readFile(filePath, 'utf8', (err, text) => {
  if (err) {
    writeFile(0);
  } else {
    const startIndex = text.lastIndexOf(' ');
    const num = Number(text.slice(startIndex + 1));
    writeFile(num + 1);
  }
});

function writeFile(count) {
  fs.writeFile(filePath, `Last count was ${count}`, err => {
    console.log('File created', filePath, count);
  });
}
