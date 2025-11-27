function calcularArea(a,b){
    let resultado = 0;
    if(a&&b){
        resultado = a*b;
    }
    else{
        resultado = null;
    }
    return resultado;
}
console.log(calcularArea(3,2));


