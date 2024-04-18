"use strict";

console.log("ok");

//Requistos para aprovação

const mediaMinima = 7;
const limiteDeFaltas = 10;

// Aluno de exemplo

let aluno = "Dayane";
let mediaFinal = 5;
let faltas = 4;
let resultado;

if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas ){
   resultado = "aprovado"; 
} else{
    resultado = "reprovado";
}

console.log(resultado);

console.log("------------");

let idade = 25;
//Operador Ou/Or (|||) obs: simbolo | é chamado de PIPE 
if(idade>=18 || idade <12){
    console.log("Você é adulto ou criança");

}else{
    console.log("você é um adolescente!");
}

let onibus = 2203;
if(onibus == 2203 || onibus == 2019){
    console.log("Passa no Senac,embarque");

}else{
    console.log("Não passa no senac, Penha aguarde.");
}

console.log("-----------");
// Operador NEGAÇÃO/NOT (!)

let blackfriday = true; //false simboliza "não vigorando"
// se black
if(!blackfriday){
    console.log("Preços normais...");

}else{
    console.log("Black Friday vigorando! Descontos!");
    
}