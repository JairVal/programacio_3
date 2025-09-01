const persona = {
    nombre: "Christian",
    apellido: "Alcocer",
    edad: 24,
    direccion: "Av. Amazonas",
    telefono: "099999999"
}

console.log("Nombre",persona["nombre"]);
console.log("Apellido",persona["apellido"]);
console.log("Edad",persona["edad"]);

console.log("Ciclo For In");
for(const clave in persona){
    console.log(clave,":",persona[clave]);
}

console.log("PRODUCTO");
const producto = {
    nombre: "Laptop",
    precio: "$1000",
    descripcion: "i7 13va generacion 500 gb SSD 32GbRAM"
}

for(const prod in producto){
    console.log(prod,":",producto[prod]);
}