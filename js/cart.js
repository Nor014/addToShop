'use strict';
let main = document.querySelector('.items-list');
main.addEventListener('click', onClick);

function onClick() {
  event.preventDefault()
  if (event.target.classList.contains('add-to-cart')) addToCart(event.target.dataset);
}