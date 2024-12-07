console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

// Assign the input element to a variable
const textInput = document.querySelector('[data-js="textInput"]');

// Assign the button element to a variable
const button = document.querySelector('[data-js="button"]');

// Agregar un event listener al botón para convertir el valor del input a mayúsculas al hacer clic
button.addEventListener('click', () => {
  textInput.value = textInput.value.toUpperCase();
});
