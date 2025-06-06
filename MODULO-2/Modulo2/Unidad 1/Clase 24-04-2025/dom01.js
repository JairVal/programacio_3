console.log(document.head);

const titulo = document.getElementById('titulo');
console.log("Elemento Titulo:", titulo);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(n => console.log(n.textContent));

const items = document.querySelectorAll('item');
items.forEach(elemento => console.log(elemento.textContent));

const mensaje = document.getElementById('mensaje');
console.log(mensaje);
mensaje.textContent = "Nuestro h2 se ha Actualizado";
mensaje.style.color = "red";

const enlace = document.getElementById('link');
console.log(enlace);
enlace.textContent = "Ir a Google";
enlace.setAttribute('href','https://www.google.com')