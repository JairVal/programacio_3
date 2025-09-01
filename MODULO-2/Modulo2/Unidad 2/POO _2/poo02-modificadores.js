var Libro = /** @class */ (function () {
    function Libro(nombre, paginas) {
        this.nombre = nombre;
        this.paginas = paginas;
    }
    Libro.prototype.cantidadPaginas = function () {
        return "Cantidad de  p\u00E1ginas del libro ".concat(this.paginas);
    };
    return Libro;
}());
var mylibro = new Libro("La Dama de Rosa", 350);
console.log(mylibro.nombre);
console.log(mylibro.cantidadPaginas());
