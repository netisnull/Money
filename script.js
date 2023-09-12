document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const todoList = document.getElementById("todoList");
    const doneList = document.getElementById("doneList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = createTaskElement(taskText);
            todoList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    function createTaskElement(taskText) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        const checkboxButton = document.createElement("button");
        checkboxButton.className = "checkbox-button";
        checkboxButton.textContent = "✓";
        checkboxButton.addEventListener("click", function () {
            listItem.remove();
            doneList.appendChild(listItem);
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        const taskLabel = document.createElement("span");
        taskLabel.className = "task-label";
        taskLabel.textContent = taskText;

        listItem.appendChild(checkboxButton);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);

        return listItem;
    }
});
