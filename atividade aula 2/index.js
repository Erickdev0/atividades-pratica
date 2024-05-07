// Atividade 01

let numero = prompt("Por favor, insira um número:");

if (numero > 0 && numero % 2 === 0) {
console.log("O número inserido é positivo e par.");
} else {
console.log("O número inserido não é positivo e par.");
}

// Atividade 02

let peso = parseFloat(prompt("Digite seu peso (em kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));

let imc = peso / (altura ** 2);

let categoria;
if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc < 24.9) {
    categoria = "Peso normal";
} else if (imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}

console.log(`Seu IMC é ${imc.toFixed(2)} (${categoria}).`);

// Atividade 03

function calcularIMC(peso, altura) {
return peso / (altura * altura);
}

function determinarCategoriaIMC(imc) {
if (imc < 18.5) {
return "Abaixo do peso";
} else if (imc < 25) {
return "Peso normal";
} else if (imc < 30) {
return "Sobrepeso";
} else {
return "Obesidade";
}
}

let peso = prompt("Por favor, insira seu peso em kg:");
let altura = prompt("Agora, insira sua altura em metros:");

let imc = calcularIMC(peso, altura);

let categoria = determinarCategoriaIMC(imc);

console.log("Seu IMC é:", imc.toFixed(2));
console.log("Categoria do IMC:", categoria);

// Atividade 04


let precoProduto = parseFloat(prompt("Digite o preço do produto:"));

let idade = parseInt(prompt("Digite sua idade:"));


let precoFinal;
if (idade < 18) {

    precoFinal = precoProduto * 0.9;
} else {

    precoFinal = precoProduto;
}

console.log(`O preço final com desconto é R$ ${precoFinal.toFixed(2)}.`);

// Atividade 05

let numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));


switch (numeroDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Insira um número de 1 a 7.");
}


// Atividade 0

let numero = parseInt(prompt("Digite um número:"));


function ehPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

if (ehPrimo(numero)) {
    console.log(`O número ${numero} é primo.`);
} else {
    console.log(`O número ${numero} não é primo.`);
}




