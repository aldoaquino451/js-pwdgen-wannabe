/*
  1. Dichiara e dai un valore tramite comando prompt alle varibili none, cognome e colore preferito.
  2. Dichiara una variabile che contenga i valori inseriti dall'utente.
  3. Dichiara una variabile relativa all'elemento HTML da sovrascrivere.
  4. Inserisci il valore ottenuto dentro l'HTML, in modo che l'utente possa visualizzarlo.
*/

// 1.
const myname = prompt("Qual è il tuo nome?");
const mylastname = prompt("Qual è il tuo cognome?");
const mycolor = prompt("Qual è il tuo colore preferito?")

// 2.
const password = myname.trim() + mylastname.trim() + mycolor.trim() + 23;

// 3.
const output = document.getElementById("message");

// 4.
output.innerHTML = `
La tua password è: 
<strong>${password}</strong>
<br>
Salvala in un posto sicuro!
`;

