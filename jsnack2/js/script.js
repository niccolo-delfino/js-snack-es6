// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const nomi = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
const nomiFinali = [];

let valoreUno = parseInt(prompt());
let valoreDue = parseInt(prompt());

const filtro =nomi.filter((element, index, array) =>
{
  return index >= valoreUno && index <= valoreDue
});

console.log(filtro);
