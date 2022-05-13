// Exercícios 1 e 2
const a = 8
const b = 3

console.log("Soma" + (a + b))
console.log("Subtração" + (a - b))
console.log("Multiplicação" + (a * b))
console.log("Divisão" + (a / b))
console.log("Módulo" + (a % b))

if (a > b) {
    console.log("'a' maior que 'b'")
}else {
    console.log("'b' maior que 'a'")
}

// Exercício 3 (usando as constantes definidas nos exercícios anteriores)

const c = 9

if ( a > b && a > c){
    console.log("'a' é o maior número")
}else if (b > a && b > c){
    console.log("'b' é o maior número")
}else {
    console.log("'c' é o maior número")
}

// Exercício 4

let valor = -8

if (valor > 0) {
    console.log("positivo")
}else if (valor < 0) {
    console.log("negativo")
}else {
    console.log("zero")
}

// Exercício 5

const alfa = 120
const beta = 30
const celta = 30

let somaAngulos = alfa + beta + celta

if (somaAngulos == 180) {
}if (alfa && beta && celta > 0) {
        console.log("True")
    }  else if (alfa && beta && celta < 0) {
        console.log("False")}
        else {
    console.log("Erro")
}

// Exercício 6

const peca = "rei"

switch(peca .toLowerCase()){
    case"peão":
    console.log("Movimento Inicial pode andar 1 ou 2 casas para frente, após anda somente 1 casa.");
    break;

    case"rei":
    console.log("Anda 1 casa para qualquer direção.");
    break;

    case"rainha":
    console.log("Anda para qualquer direção e por 'n' quantidades de casas.");
    break;

    case"cavalo":
    console.log("Anda em formateo de 'L' na horizontal e vertical, 2 casas por 3 casas, e pode pular peças.");
    break;

    case"bispo":
    console.log("Anda nas diagonais por 'n' quantidades de casas.");
    break;

    case"torre":
    console.log("Anda na horizontal ou vertical por 'n' quantidades de casas.");
    break;


    default:
    console.log("Erro.");
    break;

}

// Exercício 7

let nota = 42

if (nota >= 90 && nota <= 100) {
    console.log("A");

}else if (nota >= 80) {
    console.log("B");

}else if (nota >= 70) {
    console.log("C");

}else if (nota >= 60) {
    console.log("D")

}else if (nota >= 50) {
    console.log("E");

}else if (nota < 50 && nota >= 0)  {
    console.log("F");

}else {
    console.log("Erro")

}

// Exercício 8 (usando as constantes usadas nos exercícios 1, 2 e 3, a = 8, b = 3, c = 9)

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log("True")
}else {
    console.log("False")
}

// Exercício 9 (usando as constantes usadas nos exercícios 1, 2 e 3, a = 8, b = 3, c = 9)

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log("True")
}else {
    console.log("False")
}

// Exercício 10

const valorCusto = 2
const valorVenda = 4

if (valorCusto >= 0 && valorVenda >=0) {
    const custoTotal = valorCusto + 0.4;
    const lucro = (valorVenda - custoTotal) * 1000;
    console.log("lucro total" + lucro);
}else{
    console.log("Erro")
}

// Exercicio 11

let aliquotaInss;
let aliquotaIr;

const salario = 2700;

if (salario <= 1556.94) {
aliquotaInss = salario - salario * 0.08;

}else if (salario >= 1556.95 && salario <= 2594.92) {
    aliquotaInss = salario - salario * 0.09;

}else if (salario >= 2594.93 && salario <= 5189.82) {
    aliquotaInss = salario - salario * 0.11;

}else  (salario > 5189.82);
    aliquotaInss = salario - 570.88;


if (aliquotaInss <= 1903.98) {
    aliquotaIr = 0;

}else if (aliquotaInss >= 1903.99 && aliquotaInss <= 2826.65) {
    aliquotaIr = 0.075 * aliquotaInss - 142.80;

}else if (aliquotaInss >= 2826.66 && aliquotaInss <= 3751.05) {
    aliquotaIr = 0.15 * aliquotaInss - 354.80;

}else if (aliquotaInss >= 3751.06 && aliquotaInss <= 4664.68) {
    aliquotaIr = 0.225 * aliquotaInss - 636.13;
}else (aliquotaInss > 4664.68); 
    aliquotaIr = 0.275 * aliquotaInss - 869.36;

const liquido = aliquotaInss - aliquotaIr

console.log(liquido)

