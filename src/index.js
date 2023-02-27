import { User } from "./user";
import { Todo } from "./todo";
import "./style.css";

const user = new User("cute kitten");
user.renderTodoList();
const fitness = user.addProject("Fitness");
fitness.addTodo("do upper body");
fitness.addTodo("drink protein shake");

const programming = user.addProject("Programming");
programming.addTodo("complete tic tac toe", 1);
programming.addTodo("learn webpack", 1);
programming.addTodo("learn react");
