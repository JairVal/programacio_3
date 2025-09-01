console.log("Operadores");
console.log("1. Operadores Aritmeticos");
a = 10
b = 5
suma = a + b;
console.log("La suma de ->", a, "+", b, "es igual a:", suma);
console.log("La suma de ->", a, "+", b, "es igual a:", a + b);
resta = a - b;
console.log("La resta de ->", a, "-", b, "es igual a:", resta);
multiplicacion = a * b;
console.log("La multiplicacion de ->", a, "*", b, "es igual a:", multiplicacion);
division = a / b;
console.log("La division de ->", a, "/", b, "es igual a:", division);

residuo = a % b;
console.log("El residuo de ->", a, "/", b, "es igual a:", residuo);
potencia = a ** 2;
console.log("La potencia de ->", a, "al cuadrado es igual a:", potencia);

console.log("2. Operadores Logicos");
console.log("La igualdad debil ->", "5" == 5);
console.log("La igualdad estricto ->", "5" === 5);
console.log("La desigualdad debil ->", "5" != 5);
console.log("La desigualdad estricta ->", "5" !== 5);

console.log("'Mayor que' 6 > 5 ->", 6 > 5);
console.log("'Menor que' 6 < 5 ->", 6 < 5);
console.log("'Mayor igual que' 6 >= 5 ->", 6 >= 5);
console.log("'Menor igual que' 6 <= 5 ->", 6 <= 5);

console.log("1. Operadores Logicos");
console.log("'&& AND' 5 > 4 && 2 < 2 ->", 5 > 4 && 2 < 2);
console.log("'|| OR' 5 > 4 || 2 < 2 ->", 5 > 4 || 5 < 2);
console.log("'! NOT' !(5 > 4)", !(2 < 2));