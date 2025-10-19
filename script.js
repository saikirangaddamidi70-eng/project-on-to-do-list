const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">❌</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  // Mark as complete
  li.querySelector(".completeBtn").addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".deleteBtn").addEventListener("click", function() {
    li.remove();
  });
});
