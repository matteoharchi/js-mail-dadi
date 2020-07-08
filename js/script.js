var lista = ["pincopallo@gmail.com" , "giovanpaolo@hotmail.it" , "riccardofuffolo@umail.com"];
var mail = prompt("Inserisci la tua mail");
var not = false;
for (var i= 0; i <= lista.length ; i++) {
  if (mail== lista[i]) {
    ok= true;
  }
}
if (ok==true) {
  alert("mail corretta");
} else {
  alert("mail sbagliata");
}
