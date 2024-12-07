console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const textInput = document.querySelector('[data-js="textInput"]');  // Assign the input element to a variable
const button = document.querySelector('[data-js="button"]'); // Assign the button element to a variable


// transform on every change the input value to uppercase letters // Add an event listener to the button
button.addEventListener('click', () => {
    textInput.value = textInput.value.toUpperCase();
  });
  