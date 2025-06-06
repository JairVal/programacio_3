class Libro {
    public nombre: string;
    private paginas: number;
    protected dni: string = "1124552145";

    constructor(nombre: string, paginas: number){
        this.nombre = nombre;
        this.paginas = paginas;
    }

    cantidadPaginas():string{
        return`Cantidad de  páginas del libro ${this.paginas}`;
    }
}

const mylibro = new Libro("La Dama de Rosa",350);
console.log(mylibro.nombre);
console.log(mylibro.cantidadPaginas());