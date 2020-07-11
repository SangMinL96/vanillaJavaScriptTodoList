const nameForm = document.querySelector(".js-form");
const nameInput = document.querySelector(".js-form .nameInput");
const userNameText = document.querySelector(".userName");
const userValue = "userValue";

function userNamesave(name) {
  localStorage.setItem(userValue, name);
}
function NameText(userName) {
  nameForm.classList.remove("showing");
  userNameText.classList.add("showing");
  userNameText.innerText = `  ${userName}의 ToDo List!`;
}
function askName() {
  nameForm.classList.add("showing");
  nameForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const nameValue = nameInput.value;
    NameText(nameValue);
    userNamesave(nameValue);
  });
}

function loadName() {
  const localName = localStorage.getItem(userValue);
  if (localName === null) {
    askName();
  } else {
    NameText(localName);
  }
}

function init() {
  loadName();
}
init();
