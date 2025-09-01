/*delarcion de una tipo numero */
var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad: ", cantidad);
console.log("Nombre: ", nombre);
console.log("Opcion: ", opcion);
/*cantidad = "1223"; // Aquí da un error*/
var opcional = "comodin any"; /*Variable dinámica: se define este tipo para asignar valores que envíe el backend/frontend cuyo tipo se desconoce*/
opcional = 100;
// Tipos de datos compuestos
// ARREGLOS
var equipos = ["Barcelona", "Real Madrid", "Ecuador", "Vino Tinto", "La liga"];
console.log("Equipos ", equipos);
var edades = [10, 12, 23, 456];
console.log("Edades ", edades);
//TUPLAS: para definir varios tipos de datos. El número de elementos de la tupla debe ser igual al definido.
var persona = ["UTE", 616161];
console.log("Alumno: ", persona);
//ENUMS: usado para clasificar algun tipo de elemento pero no son tan largos para incluir en una BDD; es decir clasificar cosas mas pequeñas
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);
