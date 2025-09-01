let opcion1 = "Ir al cine";
        let opcion2 = "Quedarse en casa";
        let votosOpcion1 = 70;
        let votosOpcion2 = 30;

        function tomarDecision(opcion) {
            if (opcion === 1) {
                let probabilidad = (votosOpcion1 / (votosOpcion1 + votosOpcion2)) * 100;
                alert("Elegiste: " + opcion1 + "\nProbabilidad de que otros elijan lo mismo: " + probabilidad.toFixed(2) + "%");
            } else {
                let probabilidad = (votosOpcion2 / (votosOpcion1 + votosOpcion2)) * 100;
                alert("Elegiste: " + opcion2 + "\nProbabilidad de que otros elijan lo mismo: " + probabilidad.toFixed(2) + "%");
            }
        }