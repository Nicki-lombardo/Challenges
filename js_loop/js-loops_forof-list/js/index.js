console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

// Usando el bucle for...of para iterar sobre cada elemento del array
for (const language of programmingLanguages) {
    // Crear un nuevo elemento <li> para cada lenguaje
    const li = document.createElement('li');
    
    // Establecer el texto del <li> al valor del lenguaje actual
    li.textContent = language;
    
    // Añadir el <li> al <ol>
    ol.appendChild(li);
}


// --^-- write/change code here --^--
