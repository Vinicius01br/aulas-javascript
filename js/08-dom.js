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
/*Modificando o Dom:
Podemos alterar contéudo, tags, estilos, criar elementos,
remover elementos etc */
legenda.textContent = "Imagem do modelo de objetos do documento";
sobreFront.innerHTML = "<1>Front-end</i>";
// Alteração de estilos inline (CSS in JS)
backend.style.color = "red";
backend .style. textAlign = "center";

//aplicação de classes CSS via JavaScript
titulo.classList.add("destaque");
const listaDeEditores = [
    {
        nome:"Visual Studio Code",
        finalidae: "Desenvolvimento web em geral"
    },

    {
        nome:"Android Studio",
        finalidae: "Desenvolvimento em aplicações  Android"
    },

    {
        nome:"Xcode",
        finalidae: "Desenvolvimento de aplicações IOS"
    }
];

const lista = document.querySelector(".lista");
console.log(lista);

/* Percorrer o array de listaDeEditores,
criar os itens <li> com o conteúdo do Arrar e adiciona-los
a lista HTML.*/

// for(variavel/constante de acesso of arrayComDadosQueQueremosAcessar){}
for(const editor of listaDeEditores){
    console.log(editor.nome);
   const item =  document.createElement("li")
   item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidae}`;
   
   lista.appendChild(item);

};

//Etapa 1: criar elemento <li>
//Etapa 2: adicionar conteúdo ao novo elemento
// Etapa 3: adicionar o elemento a lista <ol>

/* Criando/configurando atributos HTML via JS*/

const linksDeReferencia = document.querySelectorAll(".referencias a");
console.log(linksDeReferencia);
for( const link of linksDeReferencia){
    console.log(link);
    link.setAttribute("target", "_black",)
};