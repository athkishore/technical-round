const response = await fetch('/api/todos');
const data = await response.json();

console.log(data);

///////////////////////////////////////////////////////

const newTodo = document.getElementById('newTodo');
const deadline = document.getElementById('deadline');
const createButton = document.getElementById('createButton');

async function createNewTodo() {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ todo: newTodo.value, deadline: deadline.value, done: false })
  });

  newTodo.value = '';
  deadline.value = '';
}

createButton.onclick = createNewTodo;