// Defino el tipo de dato a recibir (nombre) y a devolver con la funciòn (salida de la funciòn)
function saludar(nombre: string): string{
    return `Hola, ${nombre}`;
}

console.log(saludar("Betty Marmol"));

// Parámetros opcionales
function obtenerApellido(apellido?: string):string{
    return `Mi apellido es, ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));

function obtenerEdad(edad: number=18):string{
    return `Mi edad, ${edad} años`;
}

console.log(obtenerEdad(25));
console.log(obtenerEdad());

// funciones tipo flecha
const sumar = (a:number, b:number):number =>{
    return a+b;
}
console.log("la suma es: ", sumar(5,4));

function mostrarInformacion(informacion: string):void{
    console.log(informacion);
}
mostrarInformacion("Suceso en norte de Quito");

// Tipar funciones como variables

let operacion: (x: number, y: number) =>number;
operacion = function(a,b){
    return a+b;
}
console.log("resultado suma ", operacion(15,30));

//funcion que reciba un arreglo string y saluda a cada persona

function saludo(saludo: string[]):void{
    console.log("Hola ", saludo);
}
saludo(["Juan","Pedro"]);
// ppor probar
function saludo1(persona: string[]):void{
    persona.forEach( (p) => {
        console.log("Hola ", p);
    });    
}
const nombres = ["Juan", "Pablo"];
saludo1(nombres);

