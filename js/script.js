
// 1. Dichiara le variabili relative al none, cognome e colore preferito.
// 2. Assegna ad ogni variabile il valore scelto dall'utente tramite il comando prompt.
// 3. Dichiara una variabile relativa all'elemento HTML da sovrascrivere.
// 4. Dichiara una variabile che contenga i valori inseriti dall'utente.
// 5. Inserisci il valore ottenuto dentro l'HTML, in modo che l'utente possa visualizzarlo.


//// 1.
let name;
let lastname;
let color;


//// 2.
name = prompt("Qual è il tuo nome?");
lastname = prompt("Qual è il tuo cognome?");
color = prompt("Qual è il tuo colore preferito?")


//// 3.
const output = document.getElementById("message");


//// 4.
const password = `
La tua password è: 
<strong>${name}${lastname}${color}23</strong>
<br>
Salvala in un posto sicuro!
`;


//// 5.
output.innerHTML = password;  