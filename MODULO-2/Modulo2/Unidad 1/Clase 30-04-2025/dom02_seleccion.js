const tirulo = document.getElementById('titulo');
console.log(tirulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(n => console.log(n.textContent));
const items = document.querySelectorAll('.item');
items.forEach(al => console.log(al.textContent));
