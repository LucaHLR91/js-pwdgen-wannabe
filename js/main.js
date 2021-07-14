// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

var nome = prompt('inserisci il tuo nome');
var cognome = prompt('inserisci il tuo cognome');
var colore = prompt('inserisci il tuo colore preferito');
var numero = 21;

document.getElementById('password_gen').innerHTML = nome + cognome + colore + numero;

console.log(nome + cognome + colore + numero);