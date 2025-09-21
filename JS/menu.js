//seleccionamos los elementos de la pagina con el id deseado
const nav__menuBtn = document.getElementById("menuBtn");
const navList =  document.getElementById("navList");
const links = navList.querySelectorAll("a")

//escuchamos al boton del menu hamburguesa si 
nav__menuBtn.addEventListener("click", ()=> {
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    nav__menuBtn.innerHTML = "x";
    nav__menuBtn.setAttribute("aria-expanded", "true")
  } else {
    nav__menuBtn.innerHTML = "☰";
    nav__menuBtn.setAttribute("aria-expanded", "false")
  }
});

links.forEach(links => {
  links.addEventListener("click", ()=> {
    navList.classList.remove("active");
    nav__menuBtn.innerHTML = "☰";
    nav__menuBtn.setAttribute("aria-expanded", "false");
  })
})