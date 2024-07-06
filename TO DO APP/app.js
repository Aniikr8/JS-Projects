var textValue = document.querySelector(".text");
var txt = document.getElementById("textt");
var arr = [];

// Load tasks from local storage if available
if (localStorage.getItem("tasks")) {
  arr = JSON.parse(localStorage.getItem("tasks"));
  updateTextContainer();
}

function myfn1() {
  if (textValue.value !== "") {
    arr.push(textValue.value);
    updateTextContainer();
    saveTasksToLocalStorage();
    textValue.value = "";
  }
}

function updateTextContainer() {
  txt.innerHTML = arr
    .map(word => `
      <p class="textt">${capitalizeFirstLetter(word)} <button class="done" onclick="myfn3('${word}')"><i class="fa fa-trash-o"></i></button></p>
    `)
    .join("");
}
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

function myfn3(word) {
  var index = arr.indexOf(word);
  if (index !== -1) {
    arr.splice(index, 1);
    updateTextContainer();
    saveTasksToLocalStorage();
  }
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(arr));
}

