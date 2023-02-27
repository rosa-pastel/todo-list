import { Project } from "./project";
import closeIconSrc from "./icons/close.png";

export function User(nameArg) {
  this.projects = [];
  this.name = nameArg;
  this.currentProject = this.projects[0];

  this.addProject = function (titleArg) {
    const project = new Project(titleArg, this);
    this.projects.push(project);
    this.currentProject = project;
    this.renderTodoList();
    return project;
  };

  this.deleteProject = function (project) {
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
    this.currentProject = this.projects[0];
    this.renderTodoList();
  };

  this.renderSidebar = function () {
    const sidebar = document.getElementById("sidebar");

    const header = document.createElement("h1");
    header.textContent = "Projects";
    sidebar.appendChild(header);

    const projectsList = document.createElement("ul");
    this.projects.map((project) => {
      const li = document.createElement("li");

      const projectDiv = document.createElement("div");
      projectDiv.textContent = project.projectTitle;
      li.appendChild(projectDiv);
      projectDiv.parentNode.addEventListener(
        "click",
        project.renderProject.bind(project)
      );

      const deleteIcon = document.createElement("div");
      deleteIcon.textContent = "-";
      deleteIcon.addEventListener(
        "click",
        this.deleteProject.bind(this, project)
      );
      li.appendChild(deleteIcon);
      projectsList.appendChild(li);
    });
    sidebar.appendChild(projectsList);

    const newProjectBtn = document.createElement("div");
    newProjectBtn.setAttribute("id", "new-project-button");
    newProjectBtn.textContent = "New Project";
    newProjectBtn.addEventListener("click", displayProjectForm);
    sidebar.appendChild(newProjectBtn);
  };

  this.submitProjectForm = function () {
    const titleInput = document.querySelector(
      "div.new-project form input#title"
    );
    const projectTitle = titleInput.value;
    titleInput.value = "";
    this.addProject(projectTitle);
  };

  this.initProjectForm = function () {
    const closeBtn = document.getElementById("close-form");
    closeBtn.src = closeIconSrc;
    closeBtn.addEventListener("click", hideProjectForm);

    const addBtn = document.getElementById("add-project");
    addBtn.addEventListener("click", this.submitProjectForm.bind(this));
  };

  this.initProjectForm();

  this.renderTodoList = function () {
    cleanSidebar();
    cleanTodos();
    this.renderSidebar();
    if (this.currentProject) this.currentProject.renderProject();
  };
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

export function cleanTodos() {
  const todos = document.getElementById("todos");
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }
}
