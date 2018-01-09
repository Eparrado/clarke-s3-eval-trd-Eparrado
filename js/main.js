'use strict'
/*menu*/
var menuDisplay = document.querySelector('.menu-display');
var openButton = document.querySelector('.hamburguer');
var closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', showMenu);

function showMenu() {
  menuDisplay.classList.toggle('menu-visible');
}

/*AJAX*/
var gridContainer = document.querySelector('.grid-container');
var buttonAddReason = document.querySelector('.add-reason');

buttonAddReason.addEventListener('click', addMoreReason);

function addMoreReason() {
  return fetch('https://three-random-reasons-izwfjpgbqm.now.sh/') //peticion
    .then(function(response){ //respuesta
    return response.json(); //transformo a json
  })

  .then(function(json){
    var newReason = json.reasons; //entro en json y cojo el array de reasons
    var newReasonContainer = ''; //variable vacía para almacenar los nuevos div

    for (var i = 0; i < newReason.length; i++) {
      newReasonContainer += '<div class="row margin-bottom-m"><h5 class="highlight-content center no-margin margin-tablet">' + newReason[i].title + '</h5><p class="center no-margin">' + newReason[i].description + '</p></div>'; //recorro añadiendo al h5 el titulo y al p la descripcion
    }
    gridContainer.innerHTML += newReasonContainer; //añado al div container los nuevos div
  })
}
