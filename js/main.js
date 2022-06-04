// menu
const menu = document.querySelector(".navbar__links")
const menuBuuton = document.querySelector(".navbar__icons")
const overlay =document.querySelector("#overlay")

menuBuuton.addEventListener('click', () => {
  menu.classList.toggle("navbar__open");
  menuBuuton.classList.toggle("open");
  overlay.classList.toggle("show");
})
overlay.addEventListener('click', () => {
  menu.classList.toggle("navbar__open");
  menuBuuton.classList.toggle("open");
  overlay.classList.toggle("show");
})