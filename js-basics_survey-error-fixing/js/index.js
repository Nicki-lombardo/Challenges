console.clear();

// ------------------ 1 & 2 -----------------

// 1. This code selects the "next" button using an ID. This is bad practice. Can you find a better solution?
const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
  console.log("Go to next question");
});

// dos maneras de resolverlo: 1. usando next button como clase:

const nextButton = document.querySelector(".nextButton");
nextButton.addEventListener("click", () => {
  console.log("Go to next question");
});

// pero, aún así, sigue teniendo limitaciones. Ahora, la segunda opcion es usar next button como data attribute:

const nextButton = document.querySelector('[data-action="next]');
nextButton.addEventListener("click", () => {
  console.log("Go to next question");
});

// 2. When clicking the "previous" button, this event listener is not executed. Do you know what's wrong with this code?
const prevButton = document.querySelector('[data-js="click"]');
prevButton.addEventListener("prev", () => {
  console.log("Go to previous question");
});

// se ha corregido el evento cambiandolo por click, que es un evento estandar!

// ------------------ 3 & 4 -----------------

const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const secondChoiceButton = document.querySelector(
  '[data-js="choice-button-2"]'
);

// 3. This event listener is connected properly. When clicked the button is shown active. 
//However, the debug message doesn't appear in the debug console. Where is the error with this code?

firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.add("active-choice");
  secondChoiceButton.classList.remove("active-choice");
  console.log("Selected first choice");
});

// 4. When clicking on the second choice, the button should be shown with an active state. Do you see why it isn't working?
secondChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.remove("active-choice");
  secondChoiceButton.classList.remove("active-choice");
  console.log("Selected second choice");
});


// En vez de remove en el segundo boton, se add

secondChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.remove("active-choice");
  secondChoiceButton.classList.add("active-choice");
  console.log("Selected second choice");
});