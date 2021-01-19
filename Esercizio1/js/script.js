// Utilizzando const e/o let. Inserire un numero,
// se è pari stampa il numero, se è dispari stampa il numero successivo.

let chiediNumero = parseInt(prompt('Inserisci qui un numero positivo'));
// In questo caso funziona anche con const!

if (chiediNumero % 2 == 0) {
  console.log(chiediNumero);
} else if (chiediNumero % 2 != 0) {
  console.log(chiediNumero + 1);
}
