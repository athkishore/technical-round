const express = require('express');
const path = require('path');
const staticPath = path.join(__dirname, 'static');

let todosArray = [
  { id: 0, todo: "task 1", deadline: "2022-11-10", done: "false" },
  { id: 1, todo: "task 2", deadline: "2022-11-09", done: "true" },
  { id: 2, todo: "task 3", deadline: "2022-11-13", done: "false" },
  { id: 3, todo: "task 4", deadline: "2022-11-11", done: "true" },
  { id: 4, todo: "task 5", deadline: "2022-12-03", done: "false" },
  { id: 5, todo: "task 6", deadline: "2022-11-22", done: "false" },
  { id: 6, todo: "task 7", deadline: "2022-11-15", done: "false" },
  { id: 7, todo: "task 8", deadline: "2022-11-18", done: "false" },
];

app = express();
app.use('/', express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.get('/api/todos', (req, res) => {
  res.json(todosArray);
});

app.listen(5000);

