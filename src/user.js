import { Project } from "./project";
import { Todo } from "./todo";
import { initProjectForm } from "./dom";

export function User(nameArg, projectsArg = []) {
  this.name = nameArg;
  this.projects = projectsArg;
  this.currentProject;
  initProjectForm(this);

  this.addProject = function (titleArg) {
    const project = new Project(titleArg, this);
    this.projects.push(project);
    if (!this.currentProject) this.changeCurrentProject(project);
    this.updateLocal();
    return project;
  };

  this.deleteProject = function (project) {
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
    if (this.currentProject === project)
      this.changeCurrentProject(this.projects[0]);
    this.updateLocal();
  };

  this.changeCurrentProject = function (project) {
    this.currentProject = project;
  };

  this.updateLocal = function () {
    localStorage.setItem("user", JSON.stringify(this));
  };
}

export function getLocalUser() {
  if (!localStorage.getItem("user")) {
    const user = new User("cute kitten");

    console.log(user);
    const fitness = user.addProject("Fitness");
    fitness.addTodo("do upper body");
    fitness.addTodo("drink protein shake");

    const programming = user.addProject("Programming");
    programming.addTodo("complete tic tac toe", 1);
    programming.addTodo("learn webpack", 1);
    programming.addTodo("learn react");

    localStorage.setItem("user", JSON.stringify(user));
  }
  return JSON.parse(localStorage.getItem("user"));
}

export function init(localUser) {
  const user = new User(localUser.name, localUser.projects);
  user.projects = user.projects.map((project) => {
    return new Project(project.projectTitle, user, project.todos);
  });
  user.projects.map((project) => {
    project.todos = project.todos.map((todo) => {
      return new Todo(
        todo.todoTitle,
        project,
        todo.state,
        todo.description,
        todo.due,
        todo.priority
      );
    });
  });
  user.changeCurrentProject(user.projects[0]);
  return user;
}
