import addIconSrc from "./icons/add.png";
import closeIconSrc from "./icons/close.png";
import deleteIconSrc from "./icons/delete.png";
import descriptionIconSrc from "./icons/description.png";

export function renderTodoList(user) {
  cleanSidebar();
  cleanTodos();
  renderSidebar(user);
  if (user.currentProject) renderProject(user.currentProject);
}

function renderSidebar(user) {
  const sidebar = document.getElementById("sidebar");

  const header = document.createElement("h1");
  header.textContent = "Projects";
  sidebar.appendChild(header);

  const projectsList = document.createElement("ul");
  user.projects.map((project) => {
    const li = document.createElement("li");

    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.projectTitle;
    li.appendChild(projectDiv);
    li.addEventListener("click", (event) => {
      if (event.target !== deleteIcon) {
        user.changeCurrentProject(project);
        renderProject(user.currentProject);
      }
    });

    const deleteIcon = document.createElement("div");
    deleteIcon.textContent = "-";
    deleteIcon.addEventListener("click", () => {
      user.deleteProject(project);
      renderTodoList(user);
    });
    li.appendChild(deleteIcon);
    projectsList.appendChild(li);
  });
  sidebar.appendChild(projectsList);

  const newProjectBtn = document.createElement("div");
  newProjectBtn.setAttribute("id", "new-project-button");
  newProjectBtn.textContent = "New Project";
  newProjectBtn.addEventListener("click", displayProjectForm);
  sidebar.appendChild(newProjectBtn);
}

function submitProjectForm(user) {
  const titleInput = document.querySelector("div.new-project form input#title");
  const projectTitle = titleInput.value;
  titleInput.value = "";
  user.addProject(projectTitle);
  renderTodoList(user);
}

export function initProjectForm(user) {
  const closeBtn = document.getElementById("close-form");
  closeBtn.src = closeIconSrc;
  closeBtn.addEventListener("click", hideProjectForm);

  const addBtn = document.getElementById("add-project");
  addBtn.addEventListener("click", submitProjectForm.bind(user, user));
}

function displayProjectForm() {
  const form = document.querySelector("div.new-project");
  form.setAttribute("style", "display: flex");
}

function hideProjectForm() {
  const form = document.querySelector("div.new-project");
  form.setAttribute("style", "display: none");
}

function cleanSidebar() {
  const sidebar = document.getElementById("sidebar");
  while (sidebar.firstChild) {
    sidebar.removeChild(sidebar.firstChild);
  }
}

function cleanTodos() {
  const todos = document.getElementById("todos");
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }
}

function renderProject(project) {
  cleanTodos();
  const todos = document.getElementById("todos");

  project.todos.map((todo) => {
    const todoDiv = renderTodo(todo);
    todos.appendChild(todoDiv);
  });

  const emptyTodo = renderEmptyTodo(project);
  todos.appendChild(emptyTodo);
}

function renderEmptyTodo(project) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  const title = document.createElement("input");
  title.type = "text";
  title.placeholder = "Do homework";
  todoDiv.appendChild(title);

  const addIcon = document.createElement("img");
  addIcon.src = addIconSrc;
  addIcon.addEventListener("click", () => {
    project.addTodo(title, 0);
    renderTodoList(project.getUser());
  });
  todoDiv.appendChild(addIcon);

  return todoDiv;
}

function renderTodo(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  const state = document.createElement("input");
  state.type = "checkbox";
  state.checked = todo.state;
  state.addEventListener("change", todo.changeTodoState.bind(todo, state));
  todoDiv.appendChild(state);

  const title = document.createElement("input");
  title.type = "text";
  title.value = todo.todoTitle;
  title.addEventListener("change", todo.changeTodoTitle.bind(todo, title));
  todoDiv.appendChild(title);

  const due = document.createElement("input");
  due.type = "date";
  due.value = todo.due;
  due.addEventListener("change", todo.changeDueDate.bind(todo, due));
  todoDiv.appendChild(due);

  const descriptionIcon = document.createElement("img");
  descriptionIcon.src = descriptionIconSrc;
  descriptionIcon.addEventListener(
    "click",
    displayDescriptionForm.bind(todo, todo)
  );
  todoDiv.appendChild(descriptionIcon);

  const deleteIcon = document.createElement("img");
  deleteIcon.src = deleteIconSrc;
  deleteIcon.addEventListener("click", () => {
    todo.getProject().deleteTodo(todo.todoTitle);
    renderProject(todo.getProject());
  });
  todoDiv.appendChild(deleteIcon);
  return todoDiv;
}

function displayDescriptionForm(todo) {
  const body = document.querySelector("body");

  const div = document.createElement("div");
  div.className = "description-form";

  const form = document.createElement("form");

  const closeIcon = document.createElement("img");
  closeIcon.src = closeIconSrc;
  closeIcon.addEventListener("click", removeDescriptionForm);
  form.appendChild(closeIcon);

  const label = document.createElement("label");
  label.textContent = todo.todoTitle;
  label.for = "description";
  form.appendChild(label);

  const description = document.createElement("textarea");
  description.id = "description";
  description.placeholder = "Describe task...";
  description.value = todo.description;
  description.addEventListener("change", () => {
    if (description.value != todo.description)
      saveBtn.setAttribute("style", "background-color: red");
    else {
      saveBtn.setAttribute("style", "background-color: #081f2c");
    }
  });
  form.appendChild(description);

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    todo.changeDescription(description);
    saveBtn.setAttribute("style", "background-color: #081f2c");
  });
  form.appendChild(saveBtn);

  div.appendChild(form);
  body.appendChild(div);
}

function removeDescriptionForm() {
  const body = document.querySelector("body");
  const descriptionFormDiv = document.querySelector(".description-form");
  body.removeChild(descriptionFormDiv);
}
