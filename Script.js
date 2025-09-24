// Get all necessary elements using const, a modern best practice
const taskList = document.getElementById("taskList");
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");

// Function to add a new task
function Add() {
  // 1. Check if the input field is not empty
  if (input.value.trim() === "") {
    alert("Please enter a task.");
    return; // Exit the function if the input is empty
  }

  // 2. Create the new list item safely
  const newItems = document.createElement("li");

  const taskText = document.createTextNode(input.value);
  newItems.appendChild(taskText);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Completed";

  deleteButton.addEventListener("click", function () {
    newItems.remove();
  });

  newItems.appendChild(deleteButton);

  taskList.appendChild(newItems);

  input.value = "";
}

// Attach event listeners to the button
addButton.addEventListener("click", Add);

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    Add();
  }
});
