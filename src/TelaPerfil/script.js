function preencherFormulario() {

  const users = localStorage.getItem('users')
  // console.log('teste',users.find((user) => user.email === 'gabrielhiury@gmail.com.br'))
  console.log('users', users)

  document.getElementById('inputNome').value = users[0].name;
  document.getElementById('inputEmail').value = users.email;
  document.getElementById('inputSobrenome').value = users.lastName;

}

function habilitarEdicao() {
  document.getElementById('inputNome').removeAttribute('disabled');
  document.getElementById('inputEmail').removeAttribute('disabled');
  document.getElementById('inputSobrenome').removeAttribute('disabled');

}

function atualizarDados() {
  var nome = document.getElementById('inputNome').value;
  var email = document.getElementById('inputEmail').value;
  var sobrenome = document.getElementById('inputSobrenome').value;


  var dadosAtualizados = {
    name: nome,
    email: email,
    lastName: sobrenome
  };

  fetch(`https://json-server-production-f6c6.up.railway.app/user/${number}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  })
    .then(response => response.json())
    .then(users => {
      alert('Dados atualizados:', users);

    })
    .catch(error => {
      console.error('Erro ao atualizar os dados:', error);
    });
}

//Coletando id da URL
var url = window.location.href;
var paramIndex = url.indexOf('id=');

if (paramIndex !== -1) {
  var number = url.substring(paramIndex + 3);

} else {
  console.log("O parâmetro 'id' não foi encontrado na URL");
}

preencherFormulario()

// const users = localStorage.getItem('users')
// console.log(users)

document.getElementById('btnInsert').addEventListener('click', atualizarDados);
document.getElementById('btnUpdate').addEventListener('click', habilitarEdicao);

