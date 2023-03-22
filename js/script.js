/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

Steps:

1   Salvo il numero di chilometri da percorrere
2   Salvo età passeggero 
3   Verifico se minorenne  
4   Verifico se over 65
5   Calcolo Prezzo Totale
6   Stampo Output su HTML

 */

var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {

  var inputEta = document.getElementById("fascia-eta");
  var eta = inputEta.value;
  console.log(eta);

  var inputNome = document.getElementById("nome-utente");
  var nomeUtente = inputNome.value;
  console.log(nomeUtente);


  var inputKm = document.getElementById("km");
  var percorrenza = parseInt(inputKm.value);
  console.log(percorrenza);

  var prezzoAlKilometro = 0.21;
  var prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
  console.log(prezzoBigliettoSenzaSconto);

  var offerta = "Tariffa-Standard"

  if (eta == "minorenne") {
   ((prezzoBigliettoSenzaSconto / 100) * 80);
offerta = "Sconto Minorenne";
  } else if (eta == "over65") {
   ((prezzoBigliettoSenzaSconto / 100) * 60);
offerta = "Sconto Maggiorenne";
  } else {
(prezzoBigliettoSenzaSconto);
  }

  var carrozza = Math.floor(Math.random() * 9) +1;
  var cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;


  document.getElementById('nome-passegero').innerHTML = nomeUtente;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('costo-biglietto').innerHTML = prezzoBigliettoSenzaSconto.toFixed(2);
  document.getElementById('carrozza').innerHTML = carrozza;
  

  var bigliettoDiv = document.getElementById('biglietto');
  bigliettoDiv.classList.remove('hidden');
  bigliettoDiv.classList.add('show');

}

);


