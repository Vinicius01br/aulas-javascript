"use strict";
/* Loops tradicionais mais usados:
-while (enquanto)
-for (para)
Normalmente, os loops são controlados através
de uma variavel contadora ou de alguma condição lógica
para que o loop seja interrompido, */

// Loop WHILE
/*let contador = 1;
while(contador <= 5){
    console.log("Valor do contador"+contador);
    contador++;
}*/

//Lop FOR
/*for(let i = 1;i <=10; i++){
    console.log("i vale"+i);
}*/

/* Obs: normalmente, varíaveis de controle de repetição são chamadas de "i" "j", "k".*/

//Loop para acessar arrays
/*const alunos = ["chaves","Chapolin", "Seu Madruga"];
for(let i = 0; i <alunos.length; i++){
    console.log(alunos[i]);
}
*/

//Loop exclusivo do JS para arrays: for/of
/*for( const aluno of alunos){
    console.log(aluno)};*/


// Loop exclusivo do JS para objeto: for/in
const livro={
    titulo:"HTML5",
    autor:"Maujor",
    site:"https://maujor.com",
    ano: 2016

};

console.log("----------")
for(const prop in livro){
    console.log(livro[prop]);
}