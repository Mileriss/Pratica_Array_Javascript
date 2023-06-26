const frutas = ["limao", "laranja", "uva", "manga", "abacaxi"]
const verduras = ["repolho", "abobora", "mandioca"]

/*Exibe a quantidade de itens no array*/
function qtdeItens() {
    console.log("A lista tem: " + frutas.length + " items")
}

/*Exibe os itens armazenados no array*/
function converterString(){
    console.log("Os itens da lista são estes: " + frutas.toString())
}

/*Vai remover o ultimo item do array*/
function removerItem(){
    console.log("lista atual: " + frutas.toString())
    console.log("Removendo o ultimo item... " + frutas.pop())
    console.log("Itens restantes na lista: " + frutas.toString())
}


/*Adicionando um novo item no fim da lista*/
function adicionandoItem(){
    console.log("Itens da lista: " + frutas.toString())
    console.log("Adicionando item no indice: " + frutas.push("Morango"))
    console.log("lista atualizada: " + frutas.toString())
}

/*Removendo o primeiro item*/
function removerPrimeiro(){
    console.log("Itens da lista: " + frutas.toString())
    console.log("Removendo o item: " + frutas.shift())
    console.log("Lista atualizada: " + frutas.toString())
}


/*Adicionando um item na primeira posição*/
function adicionandoPrimeiro(){
    console.log("Itens da lista: " + frutas.toString())
    console.log("Adicionando um novo item...")
    frutas.unshift("Melão")
    console.log("Lista atualizada:" + frutas.toString())
}


/*Concatenando / Juntando as listas*/
function concatenarListas(){
    console.log("Lista de frutas: " + frutas.toString())
    console.log("Lista de verdura: " + verduras.toString())
    console.log("Concatenando as listas...")
    const listas_concatenadas = frutas.concat(verduras)
    console.log("Listas concatenadas: " + listas_concatenadas.toString())
}


/*Exibindo valores de uma lista com grupos*/
function separandoGrupos(){
    const grupo_listas = [["Item 1", "Item 2"], ["Item 3", "Item 4"], ["Item 5", "Item 6"]]
    console.log("Grupos armazenados na lista:")
    console.log(grupo_listas)
    console.log("Organizando os grupos...")
    console.log("Exibindo todos os itens em uma lista unica: " + grupo_listas.flat())
}

/*Adicionando itens com condição*/
function sobCondicao(){
    console.log("Lista atual: " + frutas.toString())
    console.log("Adicionando um novo item no indice 1 e retirando os itens: " + frutas.splice(1,2, "MELANCIA"))
    /*
    frutas.splice(1,2, "MELANCIA")
    1 = Indice que será adicionado
    2 = Quantidade de itens seguintes que serão retirados
    "MELANCIA" = Item que será adicionado
    */
    console.log("Lista atualizada: " + frutas.toString())
}


/*Separando itens da lista*/
function retirandoItem(){
    console.log("Lista atual: " + frutas.toString())
    console.log("Retirando o primeiro item da lista: " + frutas.slice(1))
}