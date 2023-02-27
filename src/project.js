import { Todo } from "./todo.js";
import { cleanTodos } from "./user.js";
import addIconSrc from "./icons/add.png";

export function Project(titleArg, userArg) {
  this.projectTitle = titleArg;
  this.user = userArg;
  this.todos = [];

  this.addTodo = function (todoTitleArg, stateArg = 0) {
    const todo = new Todo(
      typeof todoTitleArg === "string" ? todoTitleArg : todoTitleArg.value,
      this,
      stateArg
    );
    this.todos.push(todo);
    this.user.renderTodoList();
    return todo;
  };

  this.deleteTodo = function (todoTitleArg) {
    const todo = this.todos.find((todo) => {
      todo.todoTitle === todoTitleArg;
    });
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.user.renderTodoList();
  };

  this.renderProject = function () {
    cleanTodos();
    const todos = document.getElementById("todos");

    this.todos.map((todo) => {
      const todoDiv = todo.renderTodo();
      todos.appendChild(todoDiv);
    });

    const emptyTodo = this.renderEmptyTodo();
    todos.appendChild(emptyTodo);
  };

  this.renderEmptyTodo = function () {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Do homework";
    todoDiv.appendChild(title);

    const addIcon = document.createElement("img");
    addIcon.src = addIconSrc;
    addIcon.addEventListener("click", this.addTodo.bind(this, title, 0));
    todoDiv.appendChild(addIcon);

    return todoDiv;
  };
}
