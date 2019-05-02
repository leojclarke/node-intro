const fs = require('fs');

fs.writeFile(__dirname + '/test.txt', 'Hello\nworld', err => {
  if (err) {
    console.log('There was an error');
  } else {
    console.log('File was written');
  }
});
