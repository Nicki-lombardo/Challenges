console.clear();

/*

Convert the input value to lowercase when clicking a second button

– [ ] Add a second button to the index.html . It should have a down arrow (&darr;) as text content.
– [ ] Assign the second button to a variable.
– [ ] Add an event listener to the second button and have the input value converted to lowercase when it is clicked.

Hint: Access the value by using `.value` on the input element

*/

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
// Asignar el segundo botón a una variable
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

  // Agregar un event listener al primer botón para convertir el valor del input a mayúsculas al hacer clic
  uppercaseButton.addEventListener("click", () => {
    input.value = input.value.toUpperCase();
  });



  // Agregar un event listener al segundo botón para convertir el valor del input a minúsculas al hacer clic
  lowercaseButton.addEventListener("click", () => {
    input.value = input.value.toLowerCase();
  });

