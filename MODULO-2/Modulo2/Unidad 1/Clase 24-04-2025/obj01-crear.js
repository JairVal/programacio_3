//Manipulacion de Objeto
let alumno = {
    nombre: "Christian",
    apellido: "Alcocer",
    direccion: "Av. Amazonas",
    telefono: 39389433434
}

console.log(alumno);

//Acceder a Propiedades
console.log("Apellido del Alumno:", alumno.apellido);
console.log("Nombre del Alumno:",alumno["nombre"]);

//Modificar Propiedades
alumno.apellido = 'Lopez';
alumno["direccion"] = 'Av. Simon Bolivar';

console.log(alumno);

//Incluir una Nueva Propiedad
alumno.promedio = 9;

console.log(alumno);

//Eliminar una Propiedad
delete alumno.promedio;

console.log(alumno);

//Usamos Parametros Rest
alumnoClonado = {...alumno};
alumnoClonado.nombre = 'Antonio';
alumnoClonado.apellido = 'Gonzales';

console.log(alumnoClonado);

//Multiplicar Precio Unitario * Cantidad y Sumarle IVA
//y Asignar el Valor Subtotal
item = {
    precioUnitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: 'laptop',
    subtotal: 0
};

item.subtotal = (item["precioUnitario"] * item["cantidad"]) + item["iva"];

console.log(`Subtotal: ${item["subtotal"]}`);

for(let i in item){
    console.log(i,":",item[i]);
}

//Listar las Claves o Propiedades
console.log(Object.keys(item));

//Listar los Valores
console.log(Object.values(item));

//Metodos o Funciones en Objetos
usuario = {
    nombre: "Luis",
    saludar: function(){
        return 'Hola soy '+ this.nombre;
    }
}
console.log(usuario.saludar());

//Objetos Anidados
categoria = {
    nombre: "Electronica",
    productos: ["Laptop", "Monitor", "Teclado", {cantidad: 12, marca: "Sony"}],
    description: {
        capacidad: "16Hz",
        tamaño: "12 pulgadas"
    }
};

console.log(categoria);