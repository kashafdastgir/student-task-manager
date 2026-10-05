let tasks = [];
const form = document.getElementById('task-form');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  if (!title) return;
  tasks.push({ title: title, description: description, done: false });
  form.reset();
  render();
});

function render() {
  list.innerHTML = '';
  tasks.forEach(function (task, index) {
    const li = document.createElement('li');
    li.className = 'task-card' + (task.done ? ' completed' : '');
    const heading = document.createElement('strong');
    heading.textContent = task.title;
    const text = document.createElement('p');
    text.textContent = task.description;
    const doneBtn = document.createElement('button');
    doneBtn.textContent = task.done ? 'Undo' : 'Complete';
    doneBtn.onclick = function () { task.done = !task.done; render(); };
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = function () { tasks.splice(index, 1); render(); };
    li.append(heading, text, doneBtn, ' ', delBtn);
    list.appendChild(li);
  });
}