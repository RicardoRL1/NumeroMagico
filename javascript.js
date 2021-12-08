var Nombre = document.getElementById('Nombre');
var NumUsuario = document.getElementById('NumUsuario');
var reloj = document.getElementById('reloj');
reloj.style.color = 'red';
var mensaje = document.getElementById('mensaje');
mensaje.style.color= 'blue';
var intentosRealizados= document.getElementById('intentosRealizados');
intentosRealizados.style.color = 'orange';

var NumMin= 1;
var NumMax= 1000;
var intentos= 0;
var NumAleatorio= Math.floor(Math.random() * NumMax - NumMin +1) + NumMin;




function Numero_Magico() {

    // while (intentos<2) {
        if (NumUsuario.value != null && NumUsuario.value != '') {
            if (NumUsuario.value >= NumMin && NumUsuario.value <= NumMax) {
                if (NumUsuario.value < NumAleatorio) {
                    mensaje.innerHTML=" EL NUMERO ES MAYOR, INTENTOS REALIZADOS: [ "+parseInt(intentos+ 1)+" ]";
                }else if (NumUsuario.value > NumAleatorio) {
                    mensaje.innerHTML=" EL NUMERO ES MENOR, INTENTOS REALIZADOS: [ "+parseInt(intentos+ 1)+" ]";
                }else if (NumUsuario.value == NumAleatorio) {
                    mensaje.innerHTML=" FELICIDADES USTED A ADIVINADO EL NUMERO--> [ "+NumAleatorio+" ]  EN "+ intentos+" INTENTOS";
                }
                if (intentos==9) {
                    mensaje.innerHTML="EL NUMERO DE INTENTOS SE AGOTO  ! GAME OVER !..........NUMERO NO ADIVINADO ["+NumAleatorio+" ]";
                }
                intentos++;
    
            }else{
                mensaje.innerHTML= "DIGITE UN NUMERO DENTRO DEL RANGO 1 Y 1000";
            }
            
        }else{
            mensaje.innerHTML="CAMPO VACIO, FAVOR INGRESAR UN NUMERO";
        }
        
    // }
    
}



function Tiempo() {
    if (NumUsuario.value != null && NumUsuario.value != '') {
        if (NumUsuario.value >= NumMin && NumUsuario.value <= NumMax) {
            const d = new Date();
            document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
        }    
    }
}



function Intentos_Realizados() {
    if (NumUsuario.value != null && NumUsuario.value != '') {
        if (NumUsuario.value >= NumMin && NumUsuario.value <= NumMax) {
            if(typeof(Storage) !== "undefined") {
            if (sessionStorage.clickcount) {
                sessionStorage.setItem("intentosRealizados", "ACEPTAR");
            } else {
                sessionStorage.clickcount = 1;
            }
            document.getElementById("intentosRealizados").innerHTML = "INTENTO ANTERIOR____[ " + NumUsuario.value + " ] ";
            } else {
            document.getElementById("intentosRealizados").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }    
    }    
}

