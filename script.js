const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("tasks");

document.getElementById("date").innerText = new Date().toLocaleDateString();

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

taskInput.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    }
});

function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.background = "none";
    removeBtn.style.border = "none";
    removeBtn.style.color = "red";
    removeBtn.style.cursor = "pointer";

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    removeBtn.addEventListener("click", () => {
        li.remove();
    });
}
