function addTodo() {
  const input = document.getElementById('todo-input');
  const categorySelect = document.getElementById('category-select');
  const todoList = document.getElementById('todo-list');

  if (input.value.trim() === '') {
      alert('Please enter a task.');
      return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  const text = document.createTextNode(`${categorySelect.value}: ${input.value}`);
  const button = document.createElement('button');
  button.innerHTML = 'Delete';
  button.onclick = () => todoList.removeChild(li);

  span.appendChild(text);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  input.value = '';
}

document.getElementById('todo-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      addTodo();
  }
});
