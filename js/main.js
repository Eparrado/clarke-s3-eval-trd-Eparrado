'use strict'

var menuDisplay = document.querySelector('.menu-display');
var openButton = document.querySelector('.hamburguer');
var closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', showMenu);

function showMenu() {
  menuDisplay.classList.toggle('menu-visible');
}
