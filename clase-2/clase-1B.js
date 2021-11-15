const nombreCiudad = prompt ('¿Cómo se llama la ciudad donde vivís?').toUpperCase();
const cantidadHabitantes = prompt('¿Cuántos habitantes tiene la ciudad donde vivis?');

if (cantidadHabitantes >= 10000) {
    alert(`${nombreCiudad} es una ciudad grande`);
}else{
    alert(`${nombreCiudad} es una ciudad pequeña`);
};