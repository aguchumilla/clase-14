/*
Autor: Agustin Chumilla   
version: 1.0
fecha: 23/04/24 
El siguiente script simula un login con estructura if-else
*/

// 1 - Declaración de variables
let usr;
let clave;

// 2 - Inicialización de las variables por inputs, prompt(); Entradas
usr = prompt("Ingrese usuario o email válido");
clave = prompt("Ingrese una clave válida");

//prompt() siempre carga tipo  alfanumerico.


// 3 - Procesos ; Estructura de control if else
if (usr === "codo" || usr==="codo@codo.com" && clave === "123"){
    document.write("<h2>Ingreso exitoso!</h2>");
} else {
    alert("Usuario o clave incorrectos, intentelo nuevamente");
}