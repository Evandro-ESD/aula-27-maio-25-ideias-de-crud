// const frase = "Javascript é incrível"
// const palavras1 = frase.length
// const palavras = frase.split(' ')
// console.log(palavras)


// const nome = "Ana,Bruno,Carlos,André"
// const lista = nome.split(',')
// console.log(lista)

// const letra ="Javascript"
// const p = letra.split("")
// console.log(p)
// Crie uma program que leia uma string e leia o total de vogais existentes

// const text = "Aprendizado constante!"
// let count = 0

// // console.log(text.toLocaleLowerCase().split(""))

// text.toLocaleLowerCase().split("").forEach(letra =>{
//     if("aeiou".includes(letra)){
//         count++
//     }
// })
// console.log(`Quantidade de vogais: ${count}`)



// Utilize o split e foreach para verificar um texto e descobrir  quantidade de espaços
let frase = "A programção é legal !!"
// console.log(frase.split(""))
// let count = 0
let l;
// // frase.split("") Transforma em array ( 'A', ' ',...'ç',' ',...) e
// // percorre esse array com forEach() usando
// // "espaco" primeiro argumento do forEach que é o "valor"
// // if(espaco === " ") compara o valor "espaco" com " " e add +1 ao count
// frase.split("").forEach(espaco => {
    //     if(espaco === " "){
        //         count++
        //     }
        // })
        // console.log(`Quantidade de espaço na frase é ${count}`)
        
let frase2 = "A programção é legal !!"
conta_espaco = (frase)=>{
    let parte = frase.split(" ")
    let numeros_espacos = parte.length - 1
    return numeros_espacos
}
console.log(conta_espaco())