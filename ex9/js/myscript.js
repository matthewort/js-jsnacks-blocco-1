//jsnack 1
//Partendo da un array semplice tipo:

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array

var domandaUno = prompt("inserisci un numero tra 0 e 5");
var domandaDue = prompt("inserisci un numero tra 0 e 5");

// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var mysecondArray = ['A', 'B', 'C', 'D', 'E'];
// var selezione = mysecondArray.slice(1, 4);
// console.log(selezione);




for (var i = 0; i < mysecondArray.length; i++) {

// DOMANDA UNO

  if (domandaUno >= 0 && domandaUno <= mysecondArray.length) {
    var selezione = mysecondArray.slice(0, 5);
  }

  if (domandaUno >= 0 && domandaUno <= 4) {
    var selezione = mysecondArray.slice(0, 4);
  }

  if (domandaUno >= 0 && domandaUno <= 3) {
    var selezione = mysecondArray.slice(0, 3);
  }

  if (domandaUno >= 0 && domandaUno <= 2) {
    var selezione = mysecondArray.slice(0, 2);
  }

  if (domandaUno >= 0 && domandaUno <= 1) {
    var selezione = mysecondArray.slice(0, 1);
  }

// DOMANDA DUE

  if (domandaDue >= 0 && domandaDue <= mysecondArray.length) {
    var selezione = mysecondArray.slice(0, 5);
  }

  if (domandaDue >= 0 && domandaDue <= 4) {
    var selezione = mysecondArray.slice(0, 4);
  }

  if (domandaDue >= 0 && domandaDue <= 3) {
    var selezione = mysecondArray.slice(0, 3);
  }

  if (domandaDue >= 0 && domandaDue <= 2) {
    var selezione = mysecondArray.slice(0, 2);
  }

  if (domandaDue >= 0 && domandaDue <= 1) {
    var selezione = mysecondArray.slice(0, 1);
  }

}

console.log(selezione);
