'use strict';

/*****************************************
 * Fonctions
 ****************************************/

function onClickRectangle(){
    console.log("click sur le rectangle");
    rectangle.classList.toggle("hide");
}

function onMouseOverRectangle(){
    rectangle.classList.add("important");
}

function onMouseOutRectangle(){
    rectangle.classList.remove("important", "good");
}

function onDoubleClickRectangle(){
    rectangle.classList.add("good");
}

/*****************************************
 * Ciblage des balises
 ****************************************/

const button = document.querySelector("#toggle-rectangle");

const rectangle = document.querySelector(".rectangle");

/*****************************************
 * Gestionnaire d'évènement
 ****************************************/

button.addEventListener("click", onClickRectangle);

rectangle.addEventListener("mouseover", onMouseOverRectangle);

rectangle.addEventListener("mouseout", onMouseOutRectangle);

rectangle.addEventListener("dblclick", onDoubleClickRectangle);



