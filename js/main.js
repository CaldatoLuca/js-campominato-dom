"use strict";

/* 
?--------
!FUNZIONI
?--------
*/
//*numero random
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//* creo il singolo elemento cella (chiede tag html, classe1 e classe2)
function elementHtmlCreator(tag, style, style2) {
  const elementHtml = document.createElement(tag); //crea un elemento tag
  elementHtml.classList.add(style); //inserisce la classe1
  elementHtml.classList.add(style2); //inserisce la classe2
  return elementHtml;
}

//* creo evento sulla cella(chiede a chi dare l' evento)
function eventCell(element) {
  element.addEventListener("click", function () {
    console.log(element.innerHTML);
    element.classList.add("cell-bg");
    elementScore.innerHTML = scoreCounter++;
  });
  elementButtonReset.addEventListener("click", function () {
    element.classList.remove("cell-bg");
    elementCellsContainer.classList.add("opacity");
    elementEndGame.classList.add("none");
    scoreCounter = 1;
    elementCellsContainer.classList.remove("no-click");
  });
}
function eventBomb(element) {
  element.addEventListener("click", function () {
    console.log(element.innerHTML);
    element.classList.add("cell-bomb-bg");
    elementEndGame.classList.remove("none");
    elementCellsContainer.classList.add("opacity");
    elementEndGame.innerHTML = `<h4>Hai perso!</h4><h6>Il tuo punteggio è: ${
      scoreCounter - 1
    }.</h6>`;
    elementCellsContainer.classList.add("no-click");
  });
}
//*creo tante celle in base alla difficoltà (chiede il numero di celle da creare)
function createCells(count, array) {
  let y = 0;
  for (let i = 1; i <= count; i++) {
    const elementCell = elementHtmlCreator(
      "div",
      "cell",
      `cell-${Math.sqrt(count)}`
    );
    elementCell.append(i);

    if (array.includes(i)) {
      eventBomb(elementCell);
    } else {
      eventCell(elementCell);
    }
    elementCellsContainer.append(elementCell);
  }
  return elementCellsContainer;
}

//*eveento sul bottone reset
function buttonReset() {
  elementButtonReset.addEventListener("click", function () {
    elementCellsContainer.classList.add("none");
    elementMessage.classList.remove("none");
    elementCellsContainer.innerHTML = "";
  });
}

//*genero le bombe(chiede un array e il numero di bombe)
function bombGenerator(num, minNum, maxNum) {
  const bombsPosition = [];
  let n = 0;

  while (bombsPosition.length < num) {
    n = randomNumber(minNum, maxNum);
    if (!bombsPosition.includes(n)) {
      bombsPosition.push(n);
    }
  }
  return bombsPosition;
}

function pratoFiorito() {
  buttonReset();

  let level = +elementSelect.value;
  let cellNumber = 0;
  const howManyBomb = 16;

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

  //*richiamo la funzione che genera le bombe
  const arrayBombe = bombGenerator(howManyBomb, 1, cellNumber);
  console.log(arrayBombe);
  //*richiamo la funzione che crea le celle
  createCells(cellNumber, arrayBombe);
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
const elementEndGame = document.getElementById("end-game");
const elementScore = document.querySelector(".score");

//*variabili
let scoreCounter = 1;

//* evento click sul bottone
elementButtonPlay.addEventListener("click", function () {
  elementCellsContainer.innerHTML = "";
  pratoFiorito();
  elementCellsContainer.classList.toggle("none");
  elementMessage.classList.toggle("none");
  elementCellsContainer.classList.remove("opacity");
  elementEndGame.classList.add("none");
  scoreCounter = 1;
  elementCellsContainer.classList.remove("no-click");
});

//TODO se clicco su bomba si blocca il gioco
