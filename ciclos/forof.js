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
//for of
for (var _i = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _i < listadoDeUsuarios_1.length; _i++) {
    var usuario = listadoDeUsuarios_1[_i];
    console.log(usuario.nombre);
}
