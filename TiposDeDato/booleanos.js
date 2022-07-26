var esNuevo = false;
var deseaImprimir = true;
var aceptaDescuentos = (15 + 19 == 33);
//booleano para comparar strings
var juan = "juan";
var juan2 = "juan";
//console.log('este booleano es: '+ aceptaDescuentos);
var sonNombresIguales = (juan == juan2);
//console.log('este booleano(juan) es: '+ sonNombresIguales);
//comparar ambos booleanos
var sonAmbosVerdaderos = (sonNombresIguales && aceptaDescuentos);
console.log('este booleano(juan y aceptaDescuentos) es: ' + sonAmbosVerdaderos);
//se cumple almenos una condicion
var algunoEsVerdadero = (sonNombresIguales || aceptaDescuentos);
console.log('este booleano(juan o aceptaDescuentos) es: ' + algunoEsVerdadero);
var listNumero1 = 100;
var listNumero2 = 200;
var sonLasListasIguales = (listNumero1 == listNumero2);
var sonLasListasDistinas = (listNumero1 != listNumero2);
console.log('este booleano(listNumero1 y listNumero2 iguales) es: ' + sonLasListasIguales);
console.log('este booleano(listNumero1 y listNumero2 distintas) es: ' + sonLasListasDistinas);
var esAlgunaVerdadera = sonLasListasIguales || sonLasListasDistinas || algunoEsVerdadero || sonAmbosVerdaderos;
console.log('es alguna verdadera: ' + esAlgunaVerdadera);
