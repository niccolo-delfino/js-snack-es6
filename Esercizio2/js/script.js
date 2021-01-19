// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPari = [];
const numeriDispari = [];
//Let e Const in questo caso funzionano ugualmente

for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] % 2 == 0) {
    numeriPari.push(numeri[i]);
  } else if (numeri[i] % 2 != 0) {
    numeriDispari.push(numeri[i]);
  }
}

console.log('dispari' + numeriDispari);
console.log('pari' + numeriPari);

document.getElementById('rosso').innerHTML =
`
Questi sono i numeri dispari: <br>
${numeriDispari}

`;

document.getElementById('verde').innerHTML =
`
Questi sono i numeri Pari: <br>
${numeriPari}

`;
