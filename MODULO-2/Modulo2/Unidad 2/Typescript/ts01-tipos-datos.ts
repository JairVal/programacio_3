/*delarcion de una tipo numero */
let cantidad: number = 19;
let nombre: string = "JOSE ZAMBRANO";
let opcion: boolean = true;
console.log("cantidad: ",cantidad);
console.log("Nombre: ", nombre);
console.log("Opcion: ",opcion);

/*cantidad = "1223"; // Aquí da un error*/

let opcional: any = "comodin any"; /*Variable dinámica: se define este tipo para asignar valores que envíe el backend/frontend cuyo tipo se desconoce*/
opcional = 100; 

// Tipos de datos compuestos

// ARREGLOS
let equipos: string[]=["Barcelona","Real Madrid","Ecuador","Vino Tinto","La liga"];
console.log("Equipos ", equipos);
let edades: Array<number> = [10,12,23,456];
console.log("Edades ", edades);

//TUPLAS: para definir varios tipos de datos. El número de elementos de la tupla debe ser igual al definido.
let persona: [string, number] = ["UTE",616161];
console.log("Alumno: ", persona);

//ENUMS: usado para clasificar algun tipo de elemento pero no son tan largos para incluir en una BDD; es decir clasificar cosas mas pequeñas
enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);