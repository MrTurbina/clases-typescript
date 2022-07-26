function multiplicar(num1:number, num2:number):number {
    var total = num1 * num2;
    return total;
}

function calcularPromedio(nota1:number, nota2:number, nota3:number):number {
    var total = (nota1 + nota2 + nota3) / 3;
    return total;
}
    
var numeroResultado:number = 0;

numeroResultado = multiplicar(5,5);

console.log(numeroResultado);

var promedio:number=0;

promedio = calcularPromedio(60,80,90);
console.log(promedio);

