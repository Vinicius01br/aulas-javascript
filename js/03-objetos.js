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

//Objeto com array e outro objeto
const pessoa = {
    nome: "Chapolin Colorado",
    idade:20,
    telefones:["11-40028922", "11-9666-555"],
    medidasFisicas:{
        peso:85,
        altura:1.85,
    }
};

console.log(
    ` 0 ${pessoa.nome} tem ${pessoa.medidasFisicas.peso}kg e ${pessoa.medidasFisicas.altura}contato ${pessoa.telefones[1]}`
);

//Array de objetos

const livros = [
    {
        titulo: "Harry potter",
        autor: "J.K Rowling",

    },

    {
        titulo:"Crônicas de Nárnia",
        autor:"c.s. Lewis",
    },

    {
        titulo:"Cronicas de Olam",
        autor:"L.L Wurlitzer",
    },
];

console.log(livros[1].titulo);
console.log("---------");
/* Alternativa para exibição e análise de arrays e objetos (console.table)*/
console.table(livros);
