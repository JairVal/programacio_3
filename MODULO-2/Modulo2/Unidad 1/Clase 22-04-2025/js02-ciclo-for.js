for(let i = 1; i <= 5; i++){
    console.log("Iteracion: ", i);
}

console.log("Tabla del 2");
for(let i = 1; i <= 10; i++){
    console.log(i,"x 2 =",i*2);
}

let sum = 0;
for(let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        console.log("Numero par", i);
        sum += i;
    }
}
console.log("la suma de los numeros pares es: ", sum);


for(let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i, "** 2 =", i**2);
    }
}

for(let i = 1; i <= 10; i++){
    console.log("El cuadrado de",i, "es", i**2);
}

let palabra = "Welcome to JavaScript";
for(let i = 0; i <= palabra.length; i++){
    console.log( palabra[i]);
}