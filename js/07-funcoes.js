"use strict";

//Sintaxe 1 função anônima
const exemplo1 = function(){
    console.log("Função Anônima");

};

//chamando/invocando a função
exemplo1();

//Sintaxe 2: função nomeada/declaranda

function exemplo2(){
    console.log("Função nomeada/declarada");
}

exemplo2();

// Sintaxe 3 arrow function (função flecha/seta)

const exemplo3 = () => {
    console.log("Arrow Function");
};
exemplo3();

/* obs.: funções (em qualquer sintaxe) também
pode trabalhar com parâmetros/argumentos.

Quando uma função precisa de valores/dados
para algum tipo de processamento, ela recebe
parâmetros/argumentos entre os parênteses.

Geralmente, ao termino do processamento dos parâmetros,
a função "retorna" para fora um resultado.*/
/*Exemplos diversos*/

//Função com parâmetros
function somar(valor1, valor2){
    /*Ao receber valores (parâmetros).
    a função primeiro calcula e depois devolve o resultado.*/
 return valor1 + valor2;
}

console.log(somar(10, 5) );
console.log(somar(1, 100) );
console.log(somar(2.5, 8.9) );

/* Formatação de valores monetários em reais*/
let preco = 5000;
let desconto = preco *0.10; //10%
let precofinal = preco - desconto;
function formatarValor(valor){
    return new Intl. NumberFormat("pt-br",{
        style:"currency",
        currency: "BRL"
    }).format(valor);

}

console.log(`Preço: ${formatarValor(preco)}`);
console.log(`Desconto: ${formatarValor(desconto)}`);
console.log(`Preço final: ${formatarValor(precofinal)}`);