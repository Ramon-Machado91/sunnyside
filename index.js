const hamburguerIcon = document.getElementById('hamburguer');
const menu =document.getElementById('menuHamburguer')

hamburguerIcon.addEventListener('click', ()=>{
menu.classList.toggle('hidden')
})