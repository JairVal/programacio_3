function mostrarAlerta() {
    alert("Este boton usa un evento en linea")
};

function agregarproducto() {
    const ul = document.getElementById('listaProducto1');
    const li = document.createElement('li');
    li.textContent = "Producto agregado desde un eventoo inline";
    ul.appendChild(li);
}

document.getElementById('boton').addEventListener('click', () => {
    alert('Click Detectado');
});

document.getElementById('campo').addEventListener('click', (e) =>{
    console.log('Escriviendo', e.target.value);
});

document.getElementById('btnagregar').addEventListener('click', () => {
    const ul = document.getElementById('listaProducto2');
    const li = document.createElement('li');
    li.textContent = "item agregado desde un evento con addEvent";
    ul.appendChild(li);
});