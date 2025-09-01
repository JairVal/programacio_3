const alumnos = ["Luis", "Marcos", "Maria"]
for (const alumno of alumnos){
    console.log("Hola",alumno);
}

const numeros = [10, 5, 122, 54, 20, 50, 30]
for (const numero of numeros){
    if(numero % 10 === 0){
        console.log("Numeros divisibles para 10 son:", numero);
    }
}