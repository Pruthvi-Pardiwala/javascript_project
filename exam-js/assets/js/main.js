let tasks = [];

class Task {
  constructor(title, description, category, dueDate, priority) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.category = category;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const dashboard = document.querySelector("#dashboard");
const priorityFilter = document.querySelector("#priorityFilter");

taskForm.addEventListener("submit", addTask);
priorityFilter.addEventListener("change", renderTasks);

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem("tasks");
  if (data) tasks = JSON.parse(data);
}

function addTask(e) {
  e.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const desc = document.querySelector("#description").value.trim();
  const cat = document.querySelector("#category").value.trim();
  const due = document.querySelector("#dueDate").value;
  const priority = document.querySelector("#priority").value;

  if (!title || !due) return;

  tasks.push(new Task(title, desc, cat, due, priority));
  saveTasks();
  taskForm.reset();
  renderTasks();
  updateDashboard();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  document.querySelector("#title").value = task.title;
  document.querySelector("#description").value = task.description;
  document.querySelector("#category").value = task.category;
  document.querySelector("#dueDate").value = task.dueDate;
  document.querySelector("#priority").value = task.priority;

  deleteTask(id);
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
  updateDashboard();
}

function renderTasks() {
  taskList.innerHTML = "";
  const priority = priorityFilter.value;

  tasks
    .filter(task => priority === "all" || task.priority === priority)
    .forEach(task => {
      const div = document.createElement("div");
      div.className = "task-card";

      div.innerHTML = `
        <div class="task-info">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p><b>Category:</b> ${task.category}</p>
          <p><b>Due:</b> ${task.dueDate}</p>
          <p><b>Priority:</b> ${task.priority}</p>
        </div>
        <div class="task-actions">
          <button class="rounded-3 inside-btn" onclick="editTask(${task.id})">Edit</button>
          <button class="rounded-3 inside-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>
      `;
      taskList.appendChild(div);
    });
}

function updateDashboard() {
  const total = tasks.length;

  dashboard.innerHTML = `
    <h2 class="text-white">📊 Dashboard</h2>
    <p class="text-white">Total Tasks: ${total}</p>
  `;
}

loadTasks();
renderTasks();
updateDashboard();
