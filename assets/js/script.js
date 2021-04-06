var nomeUtente = prompt("Qual è il tuo nome?");
var cognomeUtente = prompt("Qual è il tuo cognome?");
var colorePreferito = prompt("Qual è il tuo colore preferito?");
document.getElementById("name").innerHTML = "Ciao" + " " + nomeUtente + " " + cognomeUtente;
document.getElementById("color").innerHTML = "Il tuo colore preferito è" + " " + colorePreferito;
