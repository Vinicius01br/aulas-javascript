`use strict`;
console.log("Condicionais");

/*Comandos utilizados em condicionais
if (se)
else (senão)
else if (senão se)
switch/case (escolha/caso)
operadores relacionais:
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENÇA
== IGUALDADE*/

//condicional SIMPLES
let numero = 1;

if (numero > 5) {
    console.log("Mensagem exibida pois a condição é VERDADEIRA")
};

//condicional COMPOSTA
let usuario = "Ozzy Osbourne";
let idade = 73;

//Variavel com proposito de guardar a palavra "maior ou menor"
let texto; //undefined/indefinida

if (idade >= 18) {
    texto = "maior";
    
}
else {
    texto = "menor";
}

console.log(`${usuario} é ${texto} de idade.`);

console.log("if/else usando o ternario?:");
let texto2 = idade >=18?"maior": "menor";
console.log(`${usuario} é ${texto2} de idade`);


//condicional ENCADEADA/SUCESSIVA   
let texto3;
if(idade >=60){
    texto3 = "idoso(a)";
}else if (idade >=18){
    texto3 = "adulto(a)";
}else{
    texto3 = "menor de idade";
}

console.log(`${usuario} tem ${idade} anos e é ${texto3}`);
