const submitFunction = (event) => {
    if(!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();
        alert(
            "Nombre: " + document.getElementById("nombre").value + "\n" +
            "Apellido: " + document.getElementById("apellido").value + "\n" +
            "DNI: " + document.getElementById("dni").value + "\n" +
            "Edad: " + document.getElementById("edad").value + "\n" +
            "Email: " + document.getElementById("email").value + "\n" +
            "Nivel de estudio: " + document.getElementById("nivel").value + "\n" +
            "Lenguaje: " + document.getElementById("lenguaje").value + "\n"
        )
    }
}

document.getElementById("formulario").addEventListener("submit", submitFunction); // para "escuchar" el envío del formulario

function validarFormulario(){ // el campo de texto ¿está correcto o está incorrecto?
    let validarCorrecto = true; // está correcto

    // para validar el campo de texto:
    const texto = document.querySelectorAll('input[type="text"]'); // se selecciona el campo de texto
    texto.forEach(texto => {
        let errorTexto = document.getElementById("error" + texto.id.charAt(0).toUpperCase() + texto.id.slice(1)); // se selecciona el error del campo de texto
        if(texto.value.length == ""){
            validarCorrecto = false;
            mostrarError(errorTexto, "¡Los datos son inválidos!");
        }else if(texto.value.length > 0 && texto.value.length < 2){
            validarCorrecto = false;
            mostrarError(errorTexto, "¡Los datos son inválidos!");
        }else{
            ocultarError(errorTexto);
        }
    })
    
    // para validar el campo de edad:
    const edad = document.getElementById("edad"); // se selecciona el campo de edad
    const errorEdad = document.getElementById("errorEdad"); // se selecciona el error del campo de edad
    if(edad.value < 18){
        mostrarError(errorEdad, "¡Los datos son inválidos!");
        validarCorrecto = false;
    }else{
        ocultarError(errorEdad);
    }

    // para validar el campo de email:
    const email = document.getElementById("email"); // se selecciona el campo de email
    const errorEmail = document.getElementById("errorEmail"); // está incorrecto
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // expresión regular para validar el email
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail, "¡Los datos son inválidos!");
    }

    // para validar el campo de nivel de estudio:
    const nivel = document.getElementById("nivel"); // se selecciona el campo de nivel de estudio
    const errorNivel = document.getElementById("errorNivel"); // se selecciona el error del campo de estudio
    if(nivel.value == ""){
        mostrarError(errorNivel, "¡Los datos son inválidos!");
        validarCorrecto = false;
    }else{
        ocultarError(errorNivel);
    }

    // para validar el campo de lenguaje:
    const lenguaje = document.getElementById("lenguaje"); // se selecciona el campo de lenguaje
    const errorLenguaje = document.getElementById("errorLenguaje"); // se selecciona el error del campo de lenguaje
    if(lenguaje.value == ""){
        mostrarError(errorLenguaje, "¡Los datos son inválidos!");
        validarCorrecto = false;
    }else{
        ocultarError(errorLenguaje);
    }

    // para validar los términos y las condiciones:
    const termino = document.getElementById("termino"); // se selecciona el campo de términos y condiciones
    const errorTermino = document.getElementById("errorTermino"); // se selecciona el error del campo de términos y condiciones
    if(!termino.checked){
        mostrarError(errorTermino, "¡Los datos son inválidos!");
        validarCorrecto = false;
    }else{
        ocultarError(errorTermino);
    }

    return validarCorrecto; // para determinar si está completo o si está incompleto
}

// para mostrar el mensaje:
const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

// para ocultar el mensaje:
const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";
}