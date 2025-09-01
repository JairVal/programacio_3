let mensaje = "Hola como estas?"
let edad = 10;
let archivo = true;
let vacio = null;
let x;

console.log("Mensaje:", mensaje, "Tipo de variable:", typeof mensaje);
console.log("Edad:", edad, "Tipo de variable:", typeof edad);
console.log("Archivo:", archivo, "Tipo de variable:", typeof archivo);
console.log("Vacio:", vacio, "Tipo de variable:", typeof vacio);
console.log("x:", x, "Tipo de variable:", typeof x);

const persona = {
    nombre: "Nicolas",
    apellido: "Paredes"
}
console.log("Apellido:", persona.apellido, "Tipo de variable:", typeof persona);
persona.apellido="Rivadeneira";
console.log("Apellido:", persona.apellido, "Tipo de variable:", typeof persona);

const frutas = ["peras", "manzana", "naranja", "piña"];
console.log("Frutas:", frutas, "Tipo de variable:", typeof frutas);
const hoy = new Date();
console.log("Fecha Actual:", hoy, "Tipo de variable:", typeof hoy);
console.log("Expresiones regulares");
const regex = /[a-z]+/;
console.log(regex.test("hola"));

console.log("CONVERSIONES");
a = "10";
b = 5;
multiplicacion = a * b;
console.log("a", a, "Tipo de variable:", typeof a);
console.log("b", b, "Tipo de variable:", typeof b);
console.log("Resultado de la multiplicacion:", multiplicacion, "Tipo de variable:", typeof multiplicacion);





