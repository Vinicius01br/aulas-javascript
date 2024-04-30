"use strict";
console.log("eventos");
const exemplo1 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";
const imagem = new Image();
imagem.src = "wow.gif";
const video = document.querySelector("video");
video.width = 354;
video.height = 165;

//Criando um Ouvinte de Eventos (Event listener)
exemplo1.addEventListener("click", function(){
    alert("Oieeeee");
    mensagem.textContent = "Beleza! Evento acionado, função executada";
    mensagem.classList.add("destaque");
    pagina.style.fontFamily = "Arial";
    efeitoSonoro.play();
    //Inserindo a imagem após parágrafo de mensagem
    mensagem.insertAdjacentElement("afterend",imagem);
    //Remover o atributo hidden (isso fará o vídeo aparecer)
    video.removeAttribute("hidden");
    video.play(); //Reproduzir o video

});

//Criando um objeto de audio referenciando o arquivo

/*Exemplo de Modo Notornu*/
const divContainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");
botao.addEventListener("click",function(){
    alert("Vaiiiiiiiii Santos");
    pagina.classList.toggle("noturno");
    divContainer.classList.toggle("noturno");
    /*Usamos toggle para alternar entre os estados
    da classe (aplicada e não aplicada)*/
    /*DESAFIOS!!!*/
   
    /* Aplicar um efetio de mudança de cores suave*/
    /* Fazer o botão mudar de texto e troca para texto "Desativado"
    Conforme o que estiver acontecendo*/
    


});
pagina.style.transition = "2s";
divContainer.style.transition = "2s";

/*Sobre o dublo sinal de igual ==
eo triplo sinal de igual ===
== IGUALDADE (considera somente valor)
=== IGUALDADE ESTRITA (considera valor e tipo de dado)*/
let a = 10;
let b = "10"; //true (verdadeiro)
console.log(a == b);// false(falso)
console.log(a === b);
