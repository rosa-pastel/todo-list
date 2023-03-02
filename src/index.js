import { getLocalUser, init } from "./user";
import { renderTodoList } from "./dom";
import "./style.css";

const localUser = getLocalUser();
const user = init(localUser);

renderTodoList(user);
