const tasks = [];
let editIndex = -1;

function addTask() {
  const taskInput = document.getElementById('new-task-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    if (editIndex >= 0) {
      tasks[editIndex].text = taskText;
      editIndex = -1;
    } else {
      tasks.push({ text: taskText, completed: false });
    }
    taskInput.value = '';
    render();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

function editTask(index) {
  const taskInput = document.getElementById('new-task-input');
  taskInput.value = tasks[index].text;
  editIndex = index;
  render();
}

function render() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = task.completed ? 'completed' : '';

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.onclick = () => toggleComplete(index);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = () => editTask(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(index);

    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}
