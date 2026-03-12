const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');  

addTaskBtn.addEventListener('click', addTask) 

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;
        const removeTaskBtn = document.createElement('button');     
        removeTaskBtn.textContent = 'Remove';
        removeTaskBtn.addEventListener('click', removeTask);
        const completeTaskCheckbox = document.createElement('input');
        completeTaskCheckbox.type = 'checkbox';
        completeTaskCheckbox.addEventListener('change', completeTask);
        taskListItem.appendChild(completeTaskCheckbox);
        taskListItem.appendChild(removeTaskBtn);
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
}

function removeTask(event) {
    const taskListItem = event.target.parentNode;
    taskList.removeChild(taskListItem);
}
function completeTask(event) {
    const taskListItem = event.target.parentNode;
    if (event.target.checked) {
        taskListItem.style.textDecoration = 'line-through';
    } else {
        taskListItem.style.textDecoration = 'none';
    }
}