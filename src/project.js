import { Todo } from "./todo.js";

export function Project(titleArg, userArg, todosArg = []) {
  this.projectTitle = titleArg;
  this.todos = todosArg;

  this.getUser = function () {
    return userArg;
  };

  this.addTodo = function (todoTitleArg, stateArg = 0) {
    const todo = new Todo(
      typeof todoTitleArg === "string" ? todoTitleArg : todoTitleArg.value,
      this,
      stateArg
    );
    this.todos.push(todo);
    this.getUser().updateLocal();
    return todo;
  };

  this.deleteTodo = function (todoTitleArg) {
    const index = this.todos.findIndex((todo) => {
      return todo.todoTitle === todoTitleArg;
    });
    this.todos.splice(index, 1);
    this.getUser().updateLocal();
  };
}
