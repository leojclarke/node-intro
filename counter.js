const fs = require('fs');

let counter = 0;
const filePath = __dirname + '/counter.txt';

function writeCounter() {
  fs.writeFile(filePath, num, err => {
    if (err) {
      console.log("There was an error, but I'll write a zero");
      num = 0;
    } else {
      console.log('File was written');
    }
  });
}

function readCounter() {
  fs.readFile(filePath, 'UTF8', (err, text) => {
    if (err) {
      console.log('There was a read error');
    } else {
      console.log(text);
    }
  });
}
