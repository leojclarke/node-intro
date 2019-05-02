const express = require('express');
const uuidv4 = require('uuid/v4');

const app = express(); // function that creates new express server instance called 'app'
app.use(express.json()); //Middleware
let i = 0;

const users = [
  { id: uuidv4(), name: 'Joe', role: 'mechanic' },
  { id: uuidv4(), name: 'Dr Who', role: 'time traveller' },
  { id: uuidv4(), name: 'MacReady', role: 'scientist' },
  { id: uuidv4(), name: 'Jack Reacher', role: 'detective' },
  { id: uuidv4(), name: 'John McClane', role: 'time traveller' }
];

app.get('/', (request, response) => {
  // if a request ist received, repond with "Hello world"
  response.send(`Hello whole new world ${i++}`);
});

app.get('/users', (request, response) => {
  response.json(users);
});

app.get('/users/:id', (request, response) => {
  // :index is a placeholder for something
  const { id } = request.params; // get user with id from the array
  response.json(users.find(user => user.id === id)); // if id is equal to user id
});

app.post('/users', (request, response) => {
  const user = { ...request.body, id: uuidv4() };
  users.push(user);
  console.log(users);
  response.json(user);
});

app.listen(3000, err => {
  // listen on port 3000 and console log if the server is ready
  err ? console.log(err) : console.log('Server ready');
});
