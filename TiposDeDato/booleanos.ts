var esNuevo:boolean = false;
var deseaImprimir:boolean = true;

var aceptaDescuentos:boolean = (15+19 ==33);

//booleano para comparar strings

var juan:string = "juan";
var juan2:string = "juan";

//console.log('este booleano es: '+ aceptaDescuentos);


var sonNombresIguales:boolean = (juan == juan2);
//console.log('este booleano(juan) es: '+ sonNombresIguales);

//comparar ambos booleanos
var sonAmbosVerdaderos:boolean = (sonNombresIguales && aceptaDescuentos);
console.log('este booleano(juan y aceptaDescuentos) es: '+ sonAmbosVerdaderos);

//se cumple almenos una condicion
var algunoEsVerdadero:boolean = (sonNombresIguales || aceptaDescuentos);
console.log('este booleano(juan o aceptaDescuentos) es: '+ algunoEsVerdadero);

var listNumero1:number = 100;
var listNumero2:number = 200;

var sonLasListasIguales:boolean = (listNumero1 == listNumero2);
var sonLasListasDistinas:boolean = (listNumero1 != listNumero2);
console.log('este booleano(listNumero1 y listNumero2 iguales) es: '+ sonLasListasIguales);
console.log('este booleano(listNumero1 y listNumero2 distintas) es: '+ sonLasListasDistinas);

var esAlgunaVerdadera:boolean = sonLasListasIguales || sonLasListasDistinas||algunoEsVerdadero||sonAmbosVerdaderos;
console.log('es alguna verdadera: '+ esAlgunaVerdadera);