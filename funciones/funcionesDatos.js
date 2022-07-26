function multiplicar(num1, num2) {
    var total = num1 * num2;
    return total;
}
function calcularPromedio(nota1, nota2, nota3) {
    var total = (nota1 + nota2 + nota3) / 3;
    return total;
}
var numeroResultado = 0;
numeroResultado = multiplicar(5, 5);
console.log(numeroResultado);
var promedio = 0;
promedio = calcularPromedio(60, 80, 90);
console.log(promedio);
