export function Todo(
  titleArg,
  descriptionArg,
  dueArg,
  priorityArg,
  stateArg,
  projectTitleArg
) {
  this.title = titleArg;
  this.description = descriptionArg;
  this.due = dueArg;
  this.priority = priorityArg;
  this.state = stateArg;
  this.projectTitle = projectTitleArg;

  this.renderTodo = function () {};

  this.renderDetail = function () {};

  this.renderEdit = function () {};
}
