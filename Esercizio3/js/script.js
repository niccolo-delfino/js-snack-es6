// Utilizzando const e/o let. Dare la possibilità di inserire due parole.
// Verificare se le due parole hanno la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parolaUno = prompt('Inserisci qui la prima parola!');
const parolaDue = prompt('Inserisci qui la seconda parola!');


if (parolaDue.length > parolaUno.length) {
  console.log(
  `
  La parola numero 2 è la più lunga
  ${parolaDue}

  `
  );

}else if (parolaDue.length == parolaUno.length) {
  console.log(
  `
  Le parole sono lunghe uguali e sono:
  ${parolaUno} e
  ${parolaDue}

  `
  );

} else {
  console.log(
  `
  La parola numero 1 è la più lunga
  ${parolaUno}

  `
  );

};
