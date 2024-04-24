"use strict";
/*Funções/métodos mais comuns para seleção de elementos no Dom
getElementById()
seleciona UM ELEMTNO através do atributo ID
queryselector()
seleciona UM ELEMENTO através de seletor baseado na logica CSS
queryselectorALL()
seleciona UM ELEMENTO através de seletor(es) baseado na logica CSS*/
//Exemplo 1: getElementById()

const legenda = document.getElementById("legenda");
console.log(legenda);
//Exemplo 2:queryselector()
const titulo = document.querySelector("h1");
console.log(titulo);
const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/*Mini-exercicio
faça o acesso/seleção do h2 de Back-end e motre no console.

2) faça o acesso/seleção apenas do h2 existente dentro da div com classe `editores` e mostre no console.*/

const backend = document.querySelector(".back-end");
console.log(backend);

const editores = document.querySelector(".editores h2");
console.log(editores);

//Exemplo 3 querySelectorAll() funciona parecido com array
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[0]);

const variosElementos = document.querySelectorAll("p, a, p, b, #teste, xyz");
console.log(variosElementos);