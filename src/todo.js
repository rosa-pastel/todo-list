import deleteIconSrc from "./icons/delete.png";
import descriptionIconSrc from "./icons/description.png";
import closeIconSrc from "./icons/close.png";

export function Todo(
  titleArg = "",
  projectArg,
  stateArg = 0,
  descriptionArg = "",
  dueArg = new Date().toISOString().substring(0, 10),
  priorityArg = 0
) {
  this.todoTitle = titleArg;
  this.project = projectArg;
  this.state = stateArg;
  this.description = descriptionArg;
  this.due = dueArg;
  this.priority = priorityArg;

  this.renderTodo = function () {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const state = document.createElement("input");
    state.type = "checkbox";
    state.checked = this.state;
    state.addEventListener("change", this.changeTodoState.bind(this, state));
    todoDiv.appendChild(state);

    const title = document.createElement("input");
    title.type = "text";
    title.value = this.todoTitle;
    title.addEventListener("change", this.changeTodoTitle.bind(this, title));
    todoDiv.appendChild(title);

    const due = document.createElement("input");
    due.type = "date";
    due.value = this.due;
    due.addEventListener("change", this.changeDueDate.bind(this, due));
    todoDiv.appendChild(due);

    const descriptionIcon = document.createElement("img");
    descriptionIcon.src = descriptionIconSrc;
    descriptionIcon.addEventListener(
      "click",
      this.displayDescriptionForm.bind(this)
    );
    todoDiv.appendChild(descriptionIcon);

    const deleteIcon = document.createElement("img");
    deleteIcon.src = deleteIconSrc;
    deleteIcon.addEventListener(
      "click",
      this.project.deleteTodo.bind(this.project, this.todoTitle)
    );
    todoDiv.appendChild(deleteIcon);
    return todoDiv;
  };

  this.displayDescriptionForm = function () {
    const body = document.querySelector("body");

    const div = document.createElement("div");
    div.className = "description-form";

    const form = document.createElement("form");

    const closeIcon = document.createElement("img");
    closeIcon.src = closeIconSrc;
    closeIcon.addEventListener("click", removeDescriptionForm);
    form.appendChild(closeIcon);

    const label = document.createElement("label");
    label.textContent = this.todoTitle;
    label.for = "description";
    form.appendChild(label);

    const description = document.createElement("textarea");
    description.id = "description";
    description.value = this.description;
    description.placeholder = "Describe task...";
    description.addEventListener("change", () => {
      if (description.value != this.description)
        saveBtn.setAttribute("style", "background-color: red");
      else {
        saveBtn.setAttribute("style", "background-color: #081f2c");
      }
    });
    form.appendChild(description);

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", () => {
      this.changeDescription.bind(this, description);
      saveBtn.setAttribute("style", "background-color: #081f2c");
    });
    form.appendChild(saveBtn);

    div.appendChild(form);
    body.appendChild(div);
  };

  this.changeDescription = function (input) {
    this.description = input.value;
  };

  this.changeTodoState = function (checkbox) {
    this.state = checkbox.checked;
  };

  this.changeTodoTitle = function (input) {
    this.todoTitle = input.value;
  };

  this.changeDueDate = function (input) {
    this.due = input.value;
  };
}

function removeDescriptionForm() {
  const body = document.querySelector("body");
  const descriptionFormDiv = document.querySelector(".description-form");
  body.removeChild(descriptionFormDiv);
}
