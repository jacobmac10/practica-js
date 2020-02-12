//console.log("Hola amigo"); Comprobar que el js funciona


var elemLoginButton = document.getElementById("login_button");
console.log(elemLoginButton);


//Centralizar las constantes
const ERROR_MESSAGE_ELEMENT_CLASS = "user_message";


var ValidMessage = false;

elemLoginButton.onclick = function () {
    console.log("Login button cliked!");


    function showMessage(message, isError) { //congunto de codigo reutilizable con nombre

        var elemPreviousMessage = document.getElementById (ERROR_MESSAGE_ELEMENT_CLASS);

        //Borrar mensaje anterior en caso de existir
        if (elemPreviousMessage) {
            elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
        }

        //Crear mensaje de bienvenida / elemento p
        var elemMessage = document.createElement("p");
        elemMessage.innerText = message;
        elemMessage.id = ERROR_MESSAGE_ELEMENT_CLASS;
        if (isError){
            elemMessage.className = "error-message";
        }
        

        //Mostrar mensaje de bienvenida
        var elemMain_div = document.getElementById("main_div");
        elemMain_div.appendChild(elemMessage);
    }


    var elemUsername = document.getElementById("username");
    console.log(elemUsername);

    var elemPassword = document.getElementById("password");
    console.log(elemPassword);

    var username = elemUsername.value;
    console.log(username);

    var password = elemPassword.value;
    console.log(password);

    if(username)
    


    if (username === "admin" && password === "admin") {

        //Colocamos el mensaje de bienvenida en una variable message (linea 16)

        showMessage("Bienvenido " + username);

    } else {
        showMessage("Credenciales incorrectas", true);

    }
    
    if(username === ""){
        showMessage("el campo vacio de usuario esta vacio",true);
    }
    if(password === ""){
        showMessage("campo de contraseña vacio",true);
    }
    if(username === "" && password === ""){
        showMessage("tus campos no pueden estra vacios", true);
    }

}