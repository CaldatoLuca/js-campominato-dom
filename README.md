# Campo Minato

_HTML+css+js_

Creare la logica che sta dietro il gioco Campo Minato, usando la griglia costruita nell' [esercizio precedente](https://github.com/CaldatoLuca/js-campominato-grid).

Il gioco

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

## Indice

- [Scomposizione del problema](#scomposizione-del-problema)

## Scomposizione del problema

1. Creo una funzione che genera numeri casuali da n a m (dove n e m sono gli estremi, da cambiare in base alla difficoltà 1/100 - 1/81 - 1/49)
2. Inserisco in un array 16 numeri generati dalla funzione (controllando con .includes) se il numero è già presente, usare ciclo while (finche array.lenght non è 16 vado avanti ma se il numero è già presente non lo inserisco)
3. Creo un evento click sugli elemnti dell' array bombe (aggiungo una classe che da sfondo rosso - tolgo la classe sfondo blu / faccio avvenire il reset, compare messaggio 'hai perso')

TODO:
Superbonus 2
Finire spiegazione readme
