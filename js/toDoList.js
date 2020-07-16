const toDoForm = document.querySelector(".js-toDoform");
const toDoInput = document.querySelector(".js-toDoform .toDoInput");
const toDoText = document.querySelector(".toDoList");
const toDoValue = "toDoValue";
let toDos = [];
function toDoDelete(ev) {
  const btn = ev.target;
  const li = btn.parentNode;
  toDoText.removeChild(li);

  const cleanToDo = toDos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });

  toDos = cleanToDo;
  saveToDo();
}
function saveToDo() {
  localStorage.setItem(toDoValue, JSON.stringify(toDos));
}
function askText(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const newId = toDos.length + 1;
  toDoText.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
  li.id = newId;
  btn.innerText = "❌";
  btn.addEventListener("click", toDoDelete);
  span.innerText = text;
  const toDosObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDosObj);
  saveToDo();
}

function askTodo() {
  toDoForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const textValue = toDoInput.value;

    askText(textValue);
  });
}
function loadToDo() {
  const localTodo = localStorage.getItem(toDoValue);
  if (localTodo !== null) {
    const parseLocalTodo = JSON.parse(localTodo);
    parseLocalTodo.forEach(function (parseLocalTodo) {
      askText(parseLocalTodo.text);
    });
  }
}
function init() {
  loadToDo();
  askTodo();
}
init();
