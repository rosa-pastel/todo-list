import { Todo } from "./todo";

export function Project(titleArg, userArg) {
  this.projectTitle = titleArg;
  this.user = userArg;
  this.todos = [];

  this.addTodo = (function (
    todoTitleArg,
    descriptionArg,
    dueArg,
    priorityArg,
    stateArg
  ) {
    const todo = new Todo(
      todoTitleArg,
      descriptionArg,
      dueArg,
      priorityArg,
      stateArg,
      this.projectTitle
    );
    this.todos.push(todo);
  })();

  this.deleteTodo = function (todoTitleArg) {
    const todo = this.todos.find((todo) => {
      todo.title === todoTitleArg;
    });
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  };

  this.renderProject = function () {};
}
