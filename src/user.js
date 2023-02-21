import { Project } from "./project";

export function User(nameArg) {
  this.projects = [];
  this.name = nameArg;

  this.addProject = function (titleArg) {
    const project = new Project(titleArg, this);
    this.projects.push(project);
  };

  this.deleteProject = function (titleArg) {
    const project = this.projects.find((projectObj) => {
      projectObj.title === titleArg;
    });
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
  };

  this.renderTodoPage = function () {};
}
