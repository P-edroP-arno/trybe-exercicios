// Array usado para os exercícios 1 a 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

for (let lista of numbers) {
    console.log(lista)   
}

// Exercício 2

let resultado = 0;

for (let i = 0; i < numbers.length; i += 1) {
   resultado += numbers[i];
}

console.log(resultado);

// Exercício 3

let mediaAritmetica = resultado / numbers.length

console.log(mediaAritmetica)

// Exercício 4

let valor = mediaAritmetica > 20

if (valor) {
    console.log("Valor maior que 20")
}else {
    console.log("Valor menor ou igual a 20");
}

// Exercício 5 

let maior = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);

// Exercício 6

let impar = 0

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        impar += 1;
    }
}

if (impar === 0){
        console.log("Não há números ímpares");

    }else {
        console.log(impar);
    }

// Exercício 7

let menor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i]
    }    
}

console.log(menor);

// Exercício 8

let num = [];

for (let i = 1; i <= 25; i += 1) {
    num.push(i)
}
console.log(num);

// Exercício 9 (usando a array criada no exercício 8)

for (let i = 0; i < num.length; i += 1) {
    console.log(num[i] / 2);
  };

// Exercícios Bonûs: let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
// Exercício 1

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;}
        }
    }

  console.log(numbers);

// Exercício 2

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;}
        }
    }

  console.log(numbers);

// Exercício 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
        novoNumbers.push (numbers[i] * numbers[i + 1]);
       
    }else {
        novoNumbers.push(numbers[i] * 2);
     }
    }


console.log(novoNumbers);