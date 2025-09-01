// funciones con parámetros por defecto
console.log("Funciones con parámetros por defecto");

function saludar(nombre="invitado"){
    console.log("Bienvenido: ",nombre);
}

saludar("Pedro Fu");
saludar();

//Multiplicaciòn de 2 números
console.log(" ------------------MULTIPLICACION ------------------")
function multiplicar(num1 = 5,num2 = 10){
    console.log("Multiplización de: ",num1,"*",num2,"=",num1*num2);
}
multiplicar(3,4);
multiplicar();


//area de un triangulo
console.log(" ------------------AREA DE UN TRIANGULO ------------------")
function area_triangulo(base = 5,altura = 10){
    console.log("Área del triangulo con base ",base," y altura ",altura,"es: ",base*altura/2,"m2");
}
area_triangulo(4,6);
area_triangulo();

// Con un arreglo: Recorrer el arreglo y sacar el promedio

notas = [8,5,6,7,9];

function promedio(arreglo){
    let long = 0;
    let valor = 0;
    while (long < 5){
        valor = valor + arreglo[long];
        long++;
        console.log(long);
    }
    console.log("Promedio: ", valor/long)
}
promedio(notas);
//
function promedio1(arreglo){
    let suma = 0;
    for(let num of arreglo){
        suma +=num;
    }
    return suma/arreglo.length;
}
console.log("El promedio de las notas es ",promedio(notas));