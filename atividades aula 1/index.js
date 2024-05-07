// Atividade 01
var name = prompt("escreva seu nome")

console.log(`seu nome é ${name}`)

// Atividade 02

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = numero1 + numero2;

console.log(`A soma de ${numero1} e ${numero2} é igual a ${resultado}.`);

// Atividade 03

const idade = parseInt(prompt("Digite sua idade:"));

const anoAtual = new Date().getFullYear();


const anoNascimento = anoAtual - idade;

console.log(`Você nasceu aproximadamente em ${anoNascimento}.`);


// Atividade 03


const raio = parseFloat(prompt("Digite o raio do círculo:"));

const area = Math.PI * Math.pow(raio, 2);

console.log(`A área do círculo com raio ${raio} é aproximadamente ${area.toFixed(2)}.`);


// Atividade 04


const valorEmDolares = parseFloat(prompt("Digite o valor em dólares:"));

const taxaDeConversao = 0.85;

const valorEmEuros = valorEmDolares * taxaDeConversao;

console.log(`${valorEmDolares} dólares equivalem a aproximadamente ${valorEmEuros.toFixed(2)} euros.`);


// Atividade 05


const precoOriginal = parseFloat(prompt("Digite o preço do produto:"));

const desconto = precoOriginal * 0.10;


const precoComDesconto = precoOriginal - desconto;

console.log(`O preço com desconto é aproximadamente ${precoComDesconto.toFixed(2)}.`);


// Atividade 06


const valorEmMetros = parseFloat(prompt("Digite o valor em metros:"));

const valorEmCentimetros = valorEmMetros * 100;

console.log(`${valorEmMetros} metros equivalem a aproximadamente ${valorEmCentimetros.toFixed(2)} centímetros.`);


// Atividade 07

const salarioPorHora = parseFloat(prompt("Digite o valor do salário por hora:"));

const horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));

const salarioBruto = salarioPorHora * horasTrabalhadas;

const descontoIR = salarioBruto * 0.11;

const descontoINSS = salarioBruto * 0.08;

const descontoSindicato = salarioBruto * 0.05;

// desafio aula 1

                          

const n1 = parseFloat(prompt("Digite a nota 1:"));
const n2 = parseFloat(prompt("Digite a nota 2:"));
const n3 = parseFloat(prompt("Digite a nota 3:"));

const p1 = parseFloat(prompt("Digite o peso 1:"));
const p2 = parseFloat(prompt("Digite o peso 2:"));
const p3 = parseFloat(prompt("Digite o peso 3:"));

const media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

console.log(`A média ponderada é aproximadamente ${media.toFixed(2)}.`);


const salarioLiquido = salarioBruto - descontoIR - descontoINSS - descontoSindicato;

console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Desconto INSS: R$ ${descontoINSS.toFixed(2)}`);
console.log(`Desconto Sindicato: R$ ${descontoSindicato.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

