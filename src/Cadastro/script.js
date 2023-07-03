
greetings = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
  
    if (email) {
      handleCover(email);
    }
  };
  
  handleCover = (email) => {
    document.querySelector("#register-email").value = email;
    document.querySelector("#flip").setAttribute("checked", true);
  };
  
  authenticate = (event) => {
    event.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
  
    const userAlreadyExists = users.find((user) => user.email === email);
  
    if (userAlreadyExists && userAlreadyExists.password === password) {
      localStorage.setItem('usuarioLogado', JSON.stringify({email: userAlreadyExists.email}));
      window.location.href = "/src/Homepage/Homepage.html?email=" + email;
    } else {
      alert("Usuário ou senha inválidos");
    }
  };
  
  
  register = (event) => {
    event.preventDefault();
    const enterprise = document.querySelector("#register-enterprise").value;
    const email = document.querySelector("#register-email").value;
    const password = document.querySelector("#register-password").value;
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
  
    const userAlreadyExists = users.find((user) => user.email === email);
  
    if (userAlreadyExists) {
      alert("Usuário já cadastrada, por favor tente outro email");
      return;
    }
  
    const enterpriseAlreadyExists = users.find(
      (user) => user.enterprise === enterprise
    );
  
    if (enterpriseAlreadyExists) {
      alert("Empresa já cadastrado, por favor tente outro nome");
      return;
    }
  
    users.push({ enterprise, email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    window.location.href = "/src/Homepage/Homepage.html?email=" + email;
  };
  