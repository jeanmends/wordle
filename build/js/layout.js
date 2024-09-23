//custom btn 
//import { FIVE } from "./getWords.js";

if (localStorage.getItem("bg-color") != null) {
  document.body.style.backgroundColor = localStorage.getItem("bg-color");

}else if (localStorage.getItem("bg-image") != null){
  document.body.style.backgroundImage = `url("${localStorage.getItem("bg-image")}")`;
}
//localStorage.setItem("bg", valueColor);
let btnEditar = document.querySelector("#btn-edit");
let painel = document.querySelector(".painel-custom");
let cicle = document.querySelector(".cicle");
btnEditar.addEventListener("click", () => {
  painel.style.visibility = 'visible';
  // cicle.style.backgroundColor = 'rgba(207, 207, 207, 0.1)';
  cicle.classList.add('cicle-teste');
})


window.addEventListener('click', function (e) {
  if (btnEditar.contains(e.target) || painel.contains(e.target)) {
    // Clicked in box
    
  } else {
    // Clicked outside the box
    painel.style.visibility = 'hidden';
    cicle.classList.remove('cicle-teste');
    cicle.classList.add("cicle");
    //btnEditar.classList.remove("editar-efeito");
  }
});

//end custom
document.getElementById("bg-color").addEventListener("click", () => {
  document.querySelector(".bg-type-color").style.display = 'block';
  document.querySelector(".bg-type-image").style.display = 'none';
})


document.getElementById("bg-image").addEventListener("click", () => {
  document.querySelector(".bg-type-color").style.display = 'none';
  document.querySelector(".bg-type-image").style.display = 'block';
})


document.getElementsByClassName("confirm")[0].addEventListener("click", () => {
 let valueColor = document.getElementById("picked-color").value; 
 localStorage.setItem("bg-color", valueColor);
 
  document.body.style.backgroundColor = localStorage.getItem("bg-color");
  document.body.style.backgroundImage = 'none';
  localStorage.removeItem("bg-image");
})

document.getElementsByClassName("confirm")[1].addEventListener("click", () => {
  let valueUrl = document.getElementById("copy-image").value; 
  localStorage.setItem("bg-image", valueUrl);
  
   document.body.style.backgroundImage = `url("${localStorage.getItem("bg-image")}")`;
   document.body.style.backgroundPosition = 'center';
   document.body.style.backgroundRepeat = 'no-repeat';
   document.body.style.backgroundSize = 'cover';
   document.body.backgroundColor = '';
   localStorage.removeItem("bg-color");
 })


document.getElementsByClassName("random-bottom")[0].addEventListener("click", () =>{
  location.reload();
})