// Crie um array de strings com nomes de produtos que utilize as funções:
let array = ["PC","NOTEBOOK", "TECLADO", "MOUSE", "GABINTE", "SWITCH"]
// Inserir valores no array - push ou splice
array.push("HD")
console.log('Original: '+ array)

// delete o primeiro valor do array
array.shift()
console.log('Delete 1º elemento: '+array)
// Delete o ultimo valor de array
array.pop()
console.log('Delete ultimo elemento: '+array)

// Atualize o valor do indice 2 de seu array
array.splice(2,1,"MEMÓRIA")
console.log('Atualiza valor 2º elemento: ' + array)

// Excluir apartir do indice 2 a quantidade de três elementos
array.splice(2,3)
console.log('Exclui apartir do 2º indice 3 elementos: ' + array)

// conte a quantidade de elementos do seu array
console.log('Quantidade de elementos do array: ' + array.length)

array.forEach(elemento =>{
    letras = elemento.split('')
})
console.log(letras)