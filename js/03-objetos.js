`use strict`;   

//Declarando um objeto

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    Volume: 3,
    ano: 1954
}

console.log(livro);

console.log(livro.titulo);
console.log(livro.autor);

console.log(
    ``
);

const carro = {
   marca:"Civic",
   modelo:"zrv",
   ano: 2024,
   portas: 4,
   cor:"azul",
   opcionais:["ar-condicionado", "Vidros elétricos","alarme"]
    
};

console.log(
    `0 ${carro.marca} ${carro.modelo} Fabricado em ${carro.ano}com ${carro.portas} portas e com ${carro.opcionais[1]}, é um famoso carro no Brasil.`
)
