//FORMA CLASICA

function saludar(){
    console.log("Hola desde aqui");
}
saludar();
saludar();
saludar();

function suma(){
    console.log("suma 1 +2 =", 1+2);
}

function resta(){
    console.log("Resta 10-2",10-2);
}

suma();
resta();
suma();
resta();
resta();

// funciòn con parámetro y retorno

function dividir(a,b){
    return a/b;
}

let resultado = dividir(40,8);
console.log("Resultado: ", resultado);

/** hacer una funcion que pase un numero e imprima . dentro de la funcion incluir el ciclo y hacer la tabla de multiplicar */



function tabla1(numero){
    let i = 1;
    while(i<=10){
        console.log(i,"*",numero,"=",i*numero);
        i++;
    }
}
tabla1(6);






/** ejecutar en consola con node.js
 * PS Y:\GPS\Prog3\Modulo-23Abril2025> dir  
 * PS Y:\GPS\Prog3\Modulo-23Abril2025> cd .\MODULO2_UNIDAD_1\FUNCIONES\
 * PS Y:\GPS\Prog3\Modulo-23Abril2025\MODULO2_UNIDAD_1\FUNCIONES> node funciones01-forma-clasica.js
 */