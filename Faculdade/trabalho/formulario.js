var form = document.querySelector('form')
var nome = document.getElementById('nome_txt')
var email = document.getElementById('email_txt')
var confirmar = document.getElementById('confirmar-email_txt')

var botao = document.getElementById('enviar_btn');

var erronome = document.getElementById('erro_nome')
var erroEmail = document.getElementById('erro_email')
var erroConfirmar = document.getElementById('erro_confirmar')

form.addEventListener('submit' , (e) =>{
if(nome.value == '' && email.value == ''){
     erronome.textContent = 'Você precisa preencher o campo'
     erroEmail.textContent = 'Você precisa preencher o campo'   
     
}
else if(confirmar.value !== email.value){
    erroConfirmar.textContent = 'O e-mail está diferente'
}

else {
        console.log('Nome: ' + nome.value)
        console.log('E-mail: ' + email.value)
        alert('Você foi cadastrado')
        nome.value = ''
        email.value = ''
        confirmar.value = ''
}
e.preventDefault()

})

email.addEventListener("keyuo", () => {
    if(validarEmail(email.value) !== true){
        erroEmail.textContent = 'O formato do e-mail está errado'
    } else{
        erroEmail.textContent = ''
    }
    
})

function validarEmail(email) {
    let emailPattern =/^[_a-z0-9-]+([_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z]{2,4})$/;
       return emailPattern.test(email)
}









