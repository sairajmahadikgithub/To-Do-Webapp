// script.js
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const timestamp = new Date();
    const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`;

    const taskItem = createTaskItem(taskText, formattedDate);
    document.getElementById('pending-tasks').appendChild(taskItem);

    taskInput.value = '';
}

function createTaskItem(taskText, timestamp) {
    const taskItem = document.createElement('li');
    
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.textContent = taskText;
    
    const taskTimestamp = document.createElement('div');
    taskTimestamp.classList.add('timestamp');
    taskTimestamp.textContent = `Added on: ${timestamp}`;

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskTimestamp);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('btn', 'complete-btn');
    completeButton.addEventListener('click', () => completeTask(taskItem));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'delete-btn');
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function completeTask(taskItem) {
    const completedList = document.getElementById('completed-tasks');
    completedList.appendChild(taskItem);
    taskItem.querySelector('.complete-btn').remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}