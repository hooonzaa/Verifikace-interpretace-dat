document.getElementById("ageForm").addEventListener("submit", function(event) {
    var age = document.getElementById("age").value;
    var ageError = document.getElementById("ageError");
    
    if (age < 18 || age > 100) {
      ageError.textContent = "Věk musí být mezi 18 a 100 lety.";
      event.preventDefault();
    } else {
      ageError.textContent = "";
    }
  });
  

  document.getElementById("passwordForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");
  
    if (password.length < 8) {
      passwordError.textContent = "Heslo musí mít alespoň 8 znaků.";
      event.preventDefault();
      return;
    }
  
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      passwordError.textContent = "Heslo musí obsahovat alespoň jedno velké písmeno, jedno malé písmeno a jedno číslo.";
      event.preventDefault();
      return;
    }
  
    if (password !== confirmPassword) {
      passwordError.textContent = "Hesla se neshodují.";
      event.preventDefault();
      return;
    }
  
    passwordError.textContent = "";
  });
  

  document.getElementById("nameForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    
    if (name.length < 3 || name.length > 20) {
      nameError.textContent = "Jméno musí obsahovat 3 až 20 znaků.";
      event.preventDefault();
    } else {
      nameError.textContent = "";
    }
  });
  