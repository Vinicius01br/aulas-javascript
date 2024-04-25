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
});
 