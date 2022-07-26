var cantidadSolicitada = 25;
if (cantidadSolicitada > 15) {
    console.log('aplicar descuento grande');
}
else if (cantidadSolicitada >= 10 && cantidadSolicitada <= 15) {
    console.log('aplicar descuento pequeño');
}
else {
    console.log('no aplicar descuento');
}
