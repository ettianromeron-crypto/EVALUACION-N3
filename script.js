// Selección de elementos
const form = document.getElementById("miFormulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const resultado = document.getElementById("resultado");


form.addEventListener("submit", function(e) {
  e.preventDefault(); 
  let errores = [];

 
  if (nombre.value === "") {
    errores.push("El nombre es obligatorio");
    nombre.classList.add("error");
  } else {
    nombre.classList.remove("error");
    nombre.classList.add("ok");
  }

  if (!email.value.includes("@")) {
    errores.push("El email debe tener @");
    email.classList.add("error");
  } else {
    email.classList.remove("error");
    email.classList.add("ok");
  }

  if (password.value.length < 5) {
    errores.push("La contraseña debe tener al menos 5 caracteres");
    password.classList.add("error");
  } else {
    password.classList.remove("error");
    password.classList.add("ok");
  }

  if (password.value !== confirmar.value) {
    errores.push("Las contraseñas no coinciden");
    confirmar.classList.add("error");
  } else {
    confirmar.classList.remove("error");
    confirmar.classList.add("ok");
  }

  if (edad.value < 18) {
    errores.push("Debes ser mayor de edad");
    edad.classList.add("error");
  } else {
    edad.classList.remove("error");
    edad.classList.add("ok");
  }

  
  if (errores.length > 0) {
    resultado.innerHTML = "<p style='color:red'>" + errores.join("<br>") + "</p>";
  } else {
    resultado.innerHTML = "<p style='color:green'>Formulario correcto!</p>";
    
    localStorage.setItem("usuario", nombre.value);
  }
});


document.querySelector("h1").addEventListener("click", function() {
  alert("Hiciste click en el título!");
});


edad.addEventListener("change", function() {
  console.log("Edad cambiada a: " + edad.value);
});
