"use strict";

/* 
?--------
!FUNZIONI
?--------
*/

function elementHtmlCreator(tag, style, style2) {
  const elementHtml = document.createElement(tag);
  elementHtml.classList.add(style);
  elementHtml.classList.add(style2);
  return elementHtml;
}

function createCells(count) {
  for (let i = 1; i <= count; i++) {
    const elementCell = elementHtmlCreator(
      "div",
      "cell",
      `cell-${Math.sqrt(count)}`
    );
    elementCell.append(i);
    eventCell(elementCell);
    elementCellsContainer.append(elementCell);
  }
}

function eventCell(element) {
  element.addEventListener("click", function () {
    console.log(element.innerHTML);
    element.classList.add("cell-bg");
  });
  elementButtonReset.addEventListener("click", function () {
    element.classList.remove("cell-bg");
  });
}

function buttonReset() {
  elementButtonReset.addEventListener("click", function () {
    elementCellsContainer.classList.add("none");
    elementMessage.classList.remove("none");
    elementCellsContainer.innerHTML = "";
  });
}

function pratoFiorito() {
  buttonReset();

  //* variabili
  let level = +elementSelect.value;
  let cellNumber = 0;

  switch (level) {
    case 2:
      cellNumber = 81;
      break;

    case 3:
      cellNumber = 49;

      break;

    case 1:
    default:
      cellNumber = 100;
      break;
  }

  //*richiamo la variabile che crea le celle
  createCells(cellNumber);
}

/* 
?--------
!CODICE
?--------
*/

//*variabili elemento html
const elementCellsContainer = document.querySelector(".cells-container");
const elementButtonPlay = document.getElementById("play");
const elementButtonReset = document.getElementById("reset");
const elementMessage = document.querySelector(".messages");
const elementSelect = document.getElementById("levels");

//* evento click sul bottone
elementButtonPlay.addEventListener("click", function () {
  elementCellsContainer.innerHTML = "";
  pratoFiorito();
  elementCellsContainer.classList.toggle("none");
  elementMessage.classList.toggle("none");
});
