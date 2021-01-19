// Utilizzando const e/o let. Inserire un numero,
// se è pari stampa il numero, se è dispari stampa il numero successivo.

var chiediNumero = parseInt(prompt('Inserisci qui un numero positivo'));

if (chiediNumero % 2 == 0) {
  console.log(chiediNumero);
} else if (chiediNumero % 2 != 0) {
  console.log(chiediNumero + 1);
}
