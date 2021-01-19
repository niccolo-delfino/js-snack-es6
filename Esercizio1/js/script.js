// Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

var palla = {
  nome : 'palla',
  peso : 10
};

console.log(palla.peso);

var chiediPeso = parseInt(prompt('Quanto pesa la palla?'));

palla.peso = chiediPeso;

console.log(palla.peso);
