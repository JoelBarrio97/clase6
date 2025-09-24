// validacion.js
// Script para manejar la funcionalidad de alto contraste y validación del formulario

// Funcionalidad de alto contraste
document.getElementById('contraste-btn').addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
})

// Opcional: Validación simple del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos, ' + document.getElementById('nombre').value + '!');
    this.reset();
});

// Aquí podrías agregar validaciones adicionales si es necesario
// Por ejemplo, verificar que el correo electrónico tenga un formato válido
// o que el mensaje no esté vacío.
document.getElementById('correo').addEventListener('input', function() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!this.value.match(emailPattern)) {
        this.setCustomValidity('Por favor, ingresa un correo electrónico válido.');
    } else {
        this.setCustomValidity('');
    }
});
