// var lista = ["pincopallo@gmail.com" , "giovanpaolo@hotmail.it" , "riccardofuffolo@umail.com"];
// var mail = prompt("Inserisci la tua mail per giocare");
// var ok = false;
// for (var i= 0; i <= lista.length ; i++) {
//   if (mail== lista[i]) {
//     ok= true;
//   }
// }
// if (ok==true) {
//   alert("mail corretta");
// } else {
//   alert("mail sbagliata");
// }
// In questo caso ho usato una var sentinella (ok) in modo che la condizione
// vada ad applicarsi solo al valore inserito. Infatti, in questo modo, il
// risultato che riceverò sarà limitato a quello della variabile sentinella.


// DADI
var dadoutente = Math.floor(Math.random()*6)+1;
var dadocpu = Math.floor(Math.random()*6)+1;
// LANCIO DADO
var result;
if (dadoutente > dadocpu) {
     result = "Hai Vinto!";
} else if (dadoutente = dadocpu) {
    result = "Pari!";
} else {
    result = "Hai perso!"
}
// RISULTATO
document.getElementById('result-utente').innerHTML = dadoutente;
document.getElementById('result-cpu').innerHTML = dadocpu;
document.getElementById('winner').innerHTML = result;
