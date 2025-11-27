//factorial sin recursividad
let num = 4;
function factorial (num){
    for(let i = 1; i < num; i++){
    num = num * i;
    }
    return num;
}
console.log(factorial(num));