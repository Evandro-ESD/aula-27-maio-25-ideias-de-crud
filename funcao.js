function teste(){
    console.log('Chamada de função!!')
}
// teste();

function soma(x, y){
    z = x + 1
    return z + y
}
console.log(soma(2, 5))

let dobro = function(x){
    return x * 2
}
console.log(dobro(2))

const quadrado = (n) => n * n
console.log('Quadrado: ' + quadrado(5))