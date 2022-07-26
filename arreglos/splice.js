var nombres = ["Juan", "Pedro", "Maria"];
console.log(nombres);
//eliminar un elemento del arreglo
nombres.splice(1, 1);
console.log(nombres);
/* nombres.splice(1,2);
console.log(nombres);

nombres.splice(0,1);
console.log(nombres); */
//sustituir un elemento del arreglo
nombres.splice(1, 0, "Carmen");
console.log(nombres);
