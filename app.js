document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const clearAllBtn = document.getElementById('clearAllBtn'); // Clear All button
    const taskList = document.getElementById('taskList');

    // Function to add a task
    function addTask(taskText) {
        if (!taskText.trim()) return; // Don't add if input is empty

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete">Delete</button>
        `;

        // Mark task as completed when clicked
        li.addEventListener('click', () => {
            li.querySelector('.task-text').classList.toggle('completed');
        });

        // Delete task when the "Delete" button is clicked
        li.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from triggering the "completed" toggle
            taskList.removeChild(li); // Remove the task from the list
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Clear input field
    }

    // Add task when the "Add Task" button is clicked
    addTaskBtn.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add task when the Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Clear all tasks when the "Clear All" button is clicked
    clearAllBtn.addEventListener('click', () => {
        taskList.innerHTML = ''; // Clear all tasks
    });
});
