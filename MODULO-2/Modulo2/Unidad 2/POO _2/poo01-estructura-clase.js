/*unidad 2-modulo2*/
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log(" Hola Soy, ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os"));
    };
    Persona.prototype.set_edad = function (age) {
        this.edad = age;
        console.log(" Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os"));
    };
    return Persona;
}());
var ana = new Persona("Ana", 30);
ana.saludar();

ana.set_edad(18);
