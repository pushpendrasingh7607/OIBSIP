document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText} <span class="timestamp">(${new Date().toLocaleString()})</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById('pendingTasks').appendChild(taskItem);
    taskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.add('completed');

    // Move to completed tasks list
    document.getElementById('completedTasks').appendChild(taskItem);
    button.remove(); // Remove complete button
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}