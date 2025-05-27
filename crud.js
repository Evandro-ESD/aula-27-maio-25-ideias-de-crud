

let pessoas = [];

// create
function adicinar(nome){
    pessoas.push(nome);
}
// Read
function listar(){
    console.log(pessoas);
}
// Update
function atualizar(indice, novoNome){
    pessoas[indice] = novoNome
}
// Delet
function remover(indice){
    pessoas.splice(indice, 1)
}

adicinar("Carlos")
adicinar("Mácia")
listar()
atualizar(2, "Evandro")
listar()
remover(1,1)
listar()