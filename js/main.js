function validateForm(){
	var nombre=document.getElementById("name").value;
	var apellido=document.getElementById("lastname").value;
	var correo=document.getElementById("input-email").value;
	var contrasena=document.getElementById("input-password").value;
	var seleciona=document.getElementsByTagName('select')[0].value;

    //NOMBRE 
    if(nombre == "" ) {
        alert("Debe ingresar su nombre");
        return ;
    }
    else if (!nombre.match(/^[ a-z A-Z áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ]+$/)){
        alert("Su nombre solo puede contener letras de la a-z");
        return false;
    }
    else if (nombre[0]!=nombre[0].toUpperCase()) {
        alert("Su nombre debe comenzar con una letra mayúscula");
        return false;
    }

    //APELLIDO
    else if ( apellido == "" ) {
        alert("Debe ingresar su apellido");
        return ;
    }
    else if (!apellido.match(/^[ a-z A-Z áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ]+$/)){
        alert("Su apellido solo puede contener letras de la a-z");
        return false;
    }
    
    else if (apellido[0]!=apellido[0].toUpperCase()) {
        alert("Su apellido debe comenzar con una letra mayúscula");
        return false;
    }

    //CORREO 
    else if (correo == "" ) {
        alert("Debe ingresar su correo");
        return false;
    }

    else if (!correo.match(/^[ /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)){
        alert("No es un correo válido");
        return false;
    }

    //CONTRASENA 
    else if(contrasena == "" ) {
        alert("Debe ingresar una contraseña");
        return false;
    } 
    else if( contrasena.length < 6) {
        alert("Debes ingresar una contraseña de 6 caracteres");
        return false;
    }
    
    else if( contrasena.length > 6) {
        alert("Debes ingresar una contraseña de 6 caracteres");
        return false;
    }
    
    else if( contrasena == "123456" || contrasena == "098754" || contrasena == "password"){
        alert("No es una contraseña válida");
        return false;
    }

    //TIPO DE BICI
    else if( seleciona == null || seleciona == 0 ) {
        alert("Debes seleccionar al menos una bici");
        return false;
      }
    
}

