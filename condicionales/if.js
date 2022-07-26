var cantidadSolicitada = 25;
var deseaImprimir = true;
if (cantidadSolicitada > 10) {
    console.log('tienes que aplicar descuento');
}
/* if (deseaImprimir){
    console.log('imprimiendo');
    cantidadSolicitada = 50;

    console.log('cantidad solicitada: ' + cantidadSolicitada);
} */
if (deseaImprimir) {
    console.log('imprimiendo');
    if (cantidadSolicitada > 10) {
        console.log('aplicar descuento');
    }
}
/* if (deseaImprimir && cantidadSolicitada > 10) {
    console.log('imprimiendo');
    console.log('tienes que aplicar descuento');
} */
/* if (deseaImprimir || cantidadSolicitada > 10) {
    console.log('imprimiendo');
    console.log('tienes que aplicar descuento');
} */ 
