console.log('Olá, bem vindo a aula de javascript');
console.log('Site desenvolvido com HTML, CSS e JS');
document.write('<h1>Vítor Augusto</h1>');

// comentario de linha

/*
comentario
de
bloco
*/

//Variaveis
    //O Javascript é uma linguagem de tipagem dinâmica

var idade = 27; //number(int)
var nome = "Vitor"; //String
var peso = 76.8; //number(float)
var possuiCNH = true; //boolean

//retorna o tipo de dado da variavel
console.log(typeof idade);

//Tipos primitivos
   //number
   //string
   //boolean
   //underfined
   //null
console.log('12 + 13');
console.log(12 + 13); //soma
console.log('12' + '13'); //concatenação

//Nomenclatura de variaveis
   //não pode começar com número
   //Não pode utilizar uma palavra reservada
   // Não deve possuir caracteres especiais
   // São case sensitive

   var primeiroNome = 'Vitor'
   var segundoNome = 'Augusto'

   console.log(primeiroNome + '' + segundoNome);

   //Constantes

const ano = 2023
console.log(ano);

//ano = 2024 --> ERROR
//console.log(ano);

//Estruturas de condição

var semana = parseFloat(prompt('Informe o dia da semana'));

if(semana == 1){
    console.log('Domingo');
}
else if(semana == 2){
    console.log('Segunda');
}
else if(semana == 3){
    console.log('Terça');
}
else if(semana == 4){
    console.log('Quarta');
}
else if(semana == 5){
    console.log('Quinta');
}
else if(semana == 6){
    document.write('<br>Sexta');
}
else if(semana == 7){
    console.log('Sábado');
}

//Estrutura de repetição

for(let i = 0; i < 10; i++){
    document.write('Aula de HTML <br>');
}

var x = 0
while(x < 5){
    console.log('js');
    x++;
}

//Arrays
var disciplina = ['Desenvolvimento Web' , 'Intro. Programação' , 'Banco de dados' , true];

console.log(disciplina[0]);
console.log(disciplina[1]);
console.log(disciplina[2]);
console.log(disciplina[3]);

disciplina[4] = 'Redes';
console.log(disciplina);

//tamanho do array
console.log(disciplina.length);
disciplina[5] = 'IA';
console.log(disciplina.length);

//push --> adiciona um elemento no array na ultima posição
disciplina.push('Arquitetura de computadores');
console.log(disciplina);

//pop --> remove o ultimo elemento do veto
disciplina.pop();
console.log(disciplina);

//shift --> renove o primeiro elemento do vetor
disciplina.shift();
console.log(disciplina);

//reverse --> reordena os dados do vetor. invertendo as suas funções
disciplina.reverse();
console.log(disciplina);

var frutas = ['Banana', 'Laranja', 'Melão', 'Morango', 'Caju'];
//splice --> altera a estrutura do vetor
console.log(frutas);
//removendo os valores morango e caju
frutas.splice(3, 2);
console.log(frutas);
