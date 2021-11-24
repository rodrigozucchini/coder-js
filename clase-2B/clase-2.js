alert('Hola somos un almacen que vende 4 productos para consumo diario: YERBA - AZUCAR - ACEITE - GASEOSA');

let producto = prompt('Ingrese el producto a comprar').toUpperCase();

const resultado = () => {
    switch (producto) {
        case 'YERBA':
            alert('La yerba esta $400 pesos');
        break;
        case 'AZUCAR':
            alert('El azucar esta $300 pesos');
        break;
        case 'ACEITE':
            alert('El aceite esta $600 pesos');
        break;
        case 'GASEOSA':
            alert('La gaseosa vale $1500 pesos');
        break;
        default:
            alert('No se introdujo el producto correcto');
        break;
    }
}

resultado();