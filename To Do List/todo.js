function addTask() {
    const taskInput = document.getElementById("todoInput");
    const task = taskInput.value.trim();

    if (task) {
        const ul = document.getElementById("todoList");
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
        ul.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}
