# Array em Javascript  
Array é uma forma de armazenar diversos valores dentro de uma váriavel, cada um localizado em diferentes posições.  
Funciona como se fosse uma lista onde você adiciona, altera, edita, deleta e etc...  

## Métodos de um Array  
Um Array disponibiliza diversos métodos para manipulação dos itens armazenados, sendo eles:  
- Length  
  - Utilizado para retornar o tamanho de um array em numeros  
> Sintaxe: `array.length`

- toString
  - Converte os itens armazenados entre aspas ("" ou '') para valores de texto (String)  
> Sintaxe: `array.toString()`

- pop()
  - Remove o ultimo item de um Array  
> Sintaxe: `array.pop()`

- push()
  - Adiciona um novo item no fim do array  
> Sintaxe: `array.push()`

- shift()
  - Vai remover o primeiro item do Array e deslocar os outros para um indice inferior  
> Sintaxe: `array.shift()`

- unshift("novo-item")  
  - Vai adicionar um novo item no inicio do array e realocar os itens anteriores  
> Sintaxe: `array.unshift("item10")`

- concat()
  - Vai concatenar itens de outro Array no Array atual  
> Individual `array.concat(outro_array)`   
> Multiplo `array.concat(primeiro_array, segundo_array)`

- flat()
  - Caso contenha mais arrays dentro de um array, esse método vai exibir o valor de todos em sequencia  
> Sintaxe: `array.flat()`

- splice()
  - Permite que você adicione novos itens no array, porem, com uma pequena condição.   
  - Esse método permite que você adicione novos itens no array especificando o local exato e se você deseja retirar os itens restantes e quantos serão retirados  
> Sintaxe: `array.splice(2, 0, "novo-item")`

- slice()
  - Permite que você "corte" itens de um array, pegando os valores mas não retirando nem incluindo do array original  
  - Neste caso o metodo não utiliza o indice como referencia e sim o local do item, por exemplo, pelo indice inicia do 0, pelo local do item inicia no 1  
> Sintaxe: `array.slice(1)`