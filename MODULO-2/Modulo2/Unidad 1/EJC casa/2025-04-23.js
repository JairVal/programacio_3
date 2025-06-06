function mostrarResultado(opcion) {
    var mensaje = "";

    if (opcion === 'A') {
        mensaje = "Elegiste la Opción A: ¡Buena elección!";
    } else if (opcion === 'B') {
        mensaje = "Elegiste la Opción B: Es una opción intermedia.";
    } else if (opcion === 'C') {
        mensaje = "Elegiste la Opción C: Es un poco arriesgada.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}

const tomarDecision = (opcion) => {
    mostrarResultado(opcion);
};
