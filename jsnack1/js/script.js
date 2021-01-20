// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici = [
  {
    nome : 'Easy',
    peso : 20
  },
  {
    nome : 'Pro',
    peso : 15
  },
  {
    nome : 'Standard',
    peso : 30
  },
  {
    nome : 'Light',
    peso : 10
  }
];

const [biciUno, biciDue, biciTre, biciquattro] = bici

const leggera = biciUno.peso;
let biciLeggera = biciUno;

for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

console.log(`
La bici più leggera è il modello: ${biciLeggera.nome} e pesa: ${biciLeggera.peso} kg
`);
