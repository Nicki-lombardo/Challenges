console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la sumisión por defecto del formulario
    
    // Crear un objeto para almacenar los datos del formulario
    const formData = {};
    const formElements = event.target.elements;
    
    for (let element of formElements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
    
    // Loguear los datos del formulario en la consola
    console.log(formData);
    
    // Resetear el formulario
    event.target.reset();
    
    // Enfocar el campo "First Name"
    document.getElementById('firstName').focus();
});
