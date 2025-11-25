let tasks = [];

class Task {
  constructor(title, description, category, dueDate) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.category = category;
    this.dueDate = dueDate;
    this.completed = false;
  }
  complete() { this.completed = true; }
}

const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const dashboard = document.querySelector("#dashboard");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");

taskForm.addEventListener("submit", addTask);
searchInput.addEventListener("input", renderTasks);
statusFilter.addEventListener("change", renderTasks);

function addTask(e) {
  e.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const desc = document.querySelector("#description").value.trim();
  const cat = document.querySelector("#category").value.trim();
  const due = document.querySelector("#dueDate").value;
  if (!title || !desc || !cat || !due) return;
  tasks.push(new Task(title, desc, cat, due));
  taskForm.reset();
  renderTasks();
  updateDashboard();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  updateDashboard();
}

function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.complete();
  renderTasks();
  updateDashboard();
}

function getStatus(task) {
  if (task.completed) return "Completed";
  const today = new Date().toISOString().split("T")[0];
  return task.dueDate < today ? "Overdue" : "Pending";
}

function renderTasks() {
  taskList.innerHTML = "";
  const search = searchInput.value.toLowerCase();
  const filter = statusFilter.value;

  tasks
    .filter(task => {
      const status = getStatus(task).toLowerCase();
      const matchesSearch =
        task.title.toLowerCase().includes(search) ||
        task.category.toLowerCase().includes(search);
      const matchesFilter = filter === "all" || filter === status;
      return matchesSearch && matchesFilter;
    })
    .forEach(task => {
      const status = getStatus(task);
      const div = document.createElement("div");
      div.className =
        "task-card " +
        (status === "Completed" ? "border-completed" :
         status === "Overdue" ? "border-overdue" :
         "border-pending");

      div.innerHTML = `
        <div class="task-info">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p><strong>Category:</strong> ${task.category}</p>
          <p><strong>Due:</strong> ${task.dueDate}</p>
          <p><strong>Status:</strong> ${status}</p>
        </div>
        <div class="task-actions">
          <button class="btn btn-green" onclick="completeTask(${task.id})" ${task.completed ? "disabled" : ""}>Complete</button>
          <button class="btn btn-red" onclick="deleteTask(${task.id})">Delete</button>
        </div>
      `;
      taskList.appendChild(div);
    });
}

function updateDashboard() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const today = new Date().toISOString().split("T")[0];
  const overdue = tasks.filter(t => !t.completed && t.dueDate < today).length;
  const pending = total - completed - overdue;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  dashboard.innerHTML = `
    <h2>📊 Dashboard Summary</h2>
    <p>Total Tasks: <b>${total}</b></p>
    <p>Completed: <b>${completed}</b></p>
    <p>Pending: <b>${pending}</b></p>
    <p>Overdue: <b>${overdue}</b></p>
    <p>Progress: <b>${progress}%</b></p>
  `;
}

renderTasks();
updateDashboard();