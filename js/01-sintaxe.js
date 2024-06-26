

/*Habilitando o modo estrito da linguagem ao fazer isso, a linguagem passa a analisar se você
    //declarou variaveis e não está usando palavras-reservadas. se isso acontecer, erros serão exibidos;*/
"use strict";
//
//comentario de Multiplas linhas (SHIFT ALT A) */
// console Comando de saida de dados
console.log("Hello Word");
console.log("Olá Mundo");
/* Manipulação de dados*/
//Variaveis
let curso = "HTML e CSS"; // string literal (entre aspas)
let ano = 2024;// números (inteiros/real), sem aspas
// Variavel sem Valor definido
let disciplina
console.log(disciplina);
//Atribuindo Valor APÓS declarar variavel
disciplina = "Lógiaca";
console.log(disciplina);
//Constantes (valores fixos, não podem ser modificados)
const escola = "senac penha"

const materia = "Português"
//saída de dados para mostrar na tela
console.log(curso);
console.log(ano);
console.log(escola);
//nommedaVariavel = "Algum Valor";
//console.log(nommedaVariavel)
/*Palavras-chaves de uso reservado: public, implements,
private, arguments*/
// let public = "Palavra-reservada";
// console.log(public)
/*Saída de dados personalizada*/
/* Estou fazendo o curso de HTML e CSS3 no Senac Penha.*
 
 
//CONCATENAÇÃO (forma mais antiga/tradicional)*/
console.log("Estou fazendo o curso de " + curso + "no" + curso + "no" + escola);

//Template Literal/String (forma mais moderna)
console.log(`estou fazendo o curso de ${curso} no ${escola}`);
//montando a frase antes de dar sáida nela
let mensagem = `estou fazendo curso de ${curso} no ${escola}`;

//Dando saída na frase já montada
console.log(mensagem);

/*Operações matemática básicas*/
let valor1 = 10; //inteiro
let valor2 = 5; //inteiro
let valor3 = 1200.55;// decimal/quebrado usando . pra casa decimal
//Operações
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log("Soma:" + soma);
console.log("subtração:" + subtracao);
console.log("Multiplicação:" + multiplicacao);
console.log("Divisão:" + divisao);