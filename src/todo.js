export function Todo(
  titleArg = "",
  project,
  stateArg = 0,
  descriptionArg = "",
  dueArg = new Date().toISOString().substring(0, 10),
  priorityArg = 0
) {
  this.todoTitle = titleArg;
  this.state = stateArg;
  this.description = descriptionArg;
  this.due = dueArg;
  this.priority = priorityArg;

  this.getProject = function () {
    return project;
  };
  this.getUser = function () {
    return this.getProject().getUser();
  };
  this.changeDescription = function (input) {
    this.description = input.value;
    this.getUser().updateLocal();
  };

  this.changeTodoState = function (checkbox) {
    this.state = checkbox.checked;
    this.getUser().updateLocal();
  };

  this.changeTodoTitle = function (input) {
    this.todoTitle = input.value;
    this.getUser().updateLocal();
  };

  this.changeDueDate = function (input) {
    this.due = input.value;
    this.getUser().updateLocal();
  };
}
