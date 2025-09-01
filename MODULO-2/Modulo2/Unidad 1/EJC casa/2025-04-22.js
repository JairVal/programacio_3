let seguir = true;

function elegirOpcion(opcion) {
    const resultado = document.getElementById("resultado");

    if (!seguir) {
    resultado.textContent = "Ya saliste del programa.";
    return;
    }

    switch (opcion) {
    case "1":
        resultado.textContent = "Buena elección 🍕";
        break;
    case "2":
        resultado.textContent = "¡Película y palomitas! 🎬";
        break;
    case "3":
        resultado.textContent = "Saliendo...";
        seguir = false;

        setTimeout(() => {
        for (let i = 3; i > 0; i--) {
            setTimeout(() => {
            resultado.textContent = `Saliendo en... ${i}`;
            }, (4 - i) * 1000);
        }

        setTimeout(() => {
            resultado.textContent = "¡Hasta luego!";
        }, 4000);
        }, 500);
        break;

    default:
        resultado.textContent = "Opción no válida.";
    }
}