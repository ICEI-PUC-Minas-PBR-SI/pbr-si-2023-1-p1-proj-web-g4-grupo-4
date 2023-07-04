document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        alert("Formulário enviado com sucesso!");
        form.reset();
      }
    });
  
    function validateForm() {
      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let isValid = true;
  
      inputs.forEach(function(input) {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });
  
      return isValid;
    }
  });
  