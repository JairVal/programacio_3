let i = 1;
while(i <= 5){
    console.log("Iteracion While:",i)
    i++;
}

let x = 1;
while(x <= 10){
    console.log("2 x",x,"=",2*x)
    x++;
}

let mult = 1;
console.log("Do... While");
do{
    console.log("5 x", mult,"=",5*mult);
    mult++;
} while(mult <= 10);

//Descendente
let n = 10;
do{
    console.log("n:", n);
    n--;
} while(n >= 1);

let animales = ["perro", "gato", "leon", "tigre", "aguila", "gallina", "pato", "culebra", "elefante", "raton"]
let animal = 0;
do{
    console.log("Animal", animal, "es:", animales[animal]);
    animal++;
} while(animal <= 9);