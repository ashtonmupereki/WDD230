const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list"); // Update the selector to use ID instead of class

button.addEventListener('click', () => {
  if (input.value !== "") {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    input.value = "";
    input.focus();
  } else {
    // Display a message or take any other desired action when the input is blank
    input.focus();
  }
});