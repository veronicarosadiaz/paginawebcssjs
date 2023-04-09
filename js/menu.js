/* Cuando hago click en la clase button, se le añade a la etiqueta ul la clase "activo", para que se muestre y se oculte la lista de elementos usando TOGGLE  */

const button = document.querySelector('.button')
const ul = document.querySelector('.ul')

button.addEventListener('click',()=>{
    ul.classList.toggle('activo')
})