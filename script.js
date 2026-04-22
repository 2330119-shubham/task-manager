function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete";

    delBtn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}