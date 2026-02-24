//var inputs = document.getElementsByClassName('text-input') //retorna a lista de elementos
//var input = document.querySelector('text-input') // retorna o primeiro elemento da classe

var nome = document.getElementById('nome_txt'); // retorna um elemento com o id
var email = document.getElementById('email_txt');
var confirmar = document.getElementById('confirmar-email_txt')
var telefone = document.getElementById('telefone_txt')
var assunto = document.getElementById('assunto_txt')
var mensagem = document.getElementById('mensagem_txt')

var botao = document.getElementById('enviar_btn');


//criando função
    //mesma regra de nomeclatura de uma variável 

//return false ==> falha a validação
//retun true ==> todos os campos validados

function validando_dados(){
 if(nome.value.length < 3){
    alert('O nome precisa ter 3 caracteres')
    return false;//encerra a função e retorna o valor logico false
    }

 if(email.value != confirmar.value){
    alert('Os email estão diferentes')
    return false;//encerra a função e retorna o valor logico false
    }

 if(telefone.value.length < 11){
    alert('O telefone precisa ter 11 digitos')
    return false;//encerra a função e retorna o valor logico false
    }

 if(assunto.value.length < 6){
    alert('O assunto precisa ter 6 caracteres')
    return false;//encerra a função e retorna o valor logico false
}

 if(mensagem.value.length < 20){
    alert('A mensagem precisa ter 20 caracteres')
    return false;//encerra a função e retorna o valor logico false
}
    exibeDados()
    return true;//
}

function gravar_banco_dados(){
    if(enviar_dados() == true){

    }
}

//Declarando uma função
function exibeDados(){
    console.log('Nome: ' + nome.value)
    console.log('E-mail: ' + email.value)
    console.log('Telefone: ' + telefone.value)
    console.log('Assunto: ' + assunto.value)
    console.log('Mensagem: ' + mensagem.value)
}
//Executando uma função
exibirDados();

function limparDados(){
    nome.value = ''
    email.value = ''
    confirmar.value = ''
    telefone.value = ''
    assunto.value = ''
    mensagem.valu = ''
}

botao.onclick = enviar_dados;
