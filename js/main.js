// Traemos los elementos desde html
var contenedor = document.getElementsByClassName("contenedor")[0];
var rosa = document.getElementById("rosa");
var azul = document.getElementById("azul");
var verde = document.getElementById("verde");
var amarillo = document.getElementById("amarillo");

// Propiedades del contenedor
contenedor.style.position = "relative";
contenedor.style.background = "DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

// Propiedades caja azul
azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0";