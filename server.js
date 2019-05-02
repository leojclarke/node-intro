const express = require('express');

const app = express(); // function that creates new express server instance called 'app'

let i = 0;

app.get('/', (request, response) => {
  // if a request ist received, repond with "Hello world"
  response.send(`Hello world ${i++}`);
});

app.listen(3000, err => {
  // listen on port 3000 and console log if the server is ready
  err ? console.log(err) : console.log('Server ready');
});
