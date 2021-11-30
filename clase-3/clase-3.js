class Producto {
    constructor(marca, precio) {
        this.marca = marca.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    totalImpuestosPrecio() {
        this.precio = this.precio * 40;
    }
}

const autos = []



autos.push(new Producto ("ford", "9500"));
autos.push(new Producto ("fiat", "2500"));
autos.push(new Producto ("renault", "7000"));

console.log(autos);