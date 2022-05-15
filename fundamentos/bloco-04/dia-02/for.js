// O += 1 substitui completamente o ++, recomenda-se o uso exclusivo de += 1, 
//   e é essa a regra que iremos adotar neste conteúdo daqui pra frente!

// Exercício 1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1){
    console.log(groceryList[i]);
}