//se inscreva
greetings = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get("email");

  if (email) alert("Bem vindo " + email + "!");
};

saveContact = (event) => {
  event.preventDefault();
  const email = document.querySelector("#contact-email").value;

  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

  const contactAlreadyExists = contacts.find((contact) => contact === email);

  if (contactAlreadyExists) {
    alert("Contato já cadastrado, desnecessario recadastro!");
    return;
  }

  contacts.push(email);
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

//rolagem para categorias

document.addEventListener('DOMContentLoaded', function() {
    // Encontra todos os links de categorias
    var categoriasLinks = document.querySelectorAll('a.categoria-link');
  
    // Adiciona o evento de clique a todos os links de categorias
    categoriasLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Obtém o alvo do link
        var target = link.getAttribute('href');
  
        // Verifica se o alvo existe
        if (target) {
          // Encontra o elemento alvo no documento
          var targetElement = document.querySelector(target);
  
          // Verifica se o elemento alvo existe
          if (targetElement) {
            // Calcula a posição vertical do elemento alvo em relação à janela
            var targetTop = targetElement.getBoundingClientRect().top;
  
            // Realiza a rolagem suave até o elemento alvo
            window.scrollTo({
              top: window.pageYOffset + targetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
  