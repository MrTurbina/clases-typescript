var listadoDeUsuarios = [
    {
        nombre: 'Ana',
        apellido: 'Carcamo'
    },
    {
        nombre: 'Lupita',
        apellido: 'Juarez'
    },
    {
        nombre: 'Elmer',
        apellido: 'Martinez'
    }
];
//for normal
/* for(let cantidadRepetir:number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir++){
    console.log(listadoDeUsuarios[cantidadRepetir].nombre);
} */
//forin
for (var posicion in listadoDeUsuarios) {
    console.log(listadoDeUsuarios[posicion].apellido);
}
