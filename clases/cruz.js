var n = 9

const cruz = (n) => {
    resultado=""
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            resultado += (j==i || j==n-i-1) ? "X" : "_";
        }
        resultado+="\n";
    }
    return resultado;
    
};

console.log(cruz(n));