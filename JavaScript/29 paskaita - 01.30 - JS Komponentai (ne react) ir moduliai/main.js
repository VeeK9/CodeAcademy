import Suniukas, {graziausiVardai as names} from './modules/Dog.js';
import { randomColor as getMeColour, throwError, sum, division } from './modules/helperFunctions.js';
// import {graziausiVardai as names} from './modules/Dog.js';
import dogsData from './modules/dogsData.js';

// console.log(sum(5,6));
// console.log(division(5,6));
// console.log(getMeColour('hex'));
// console.log(names);

console.log(dogsData);
// let doggo0 = new Suniukas('Senberanras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://static.wikia.nocookie.net/p__/images/c/cc/10511396_756782744366648.jpg/revision/latest?cb=20220213002645&path-prefix=protagonist');
// let doggo0 = new Suniukas(dogsData[0]);
// let doggo1 = new Suniukas(dogsData[1]);
// let doggo2 = new Suniukas(dogsData[2]);
// let doggo3 = new Suniukas(dogsData[3]);
// let doggos = [
//   new Suniukas(dogsData[0]),
//   new Suniukas(dogsData[1]),
//   new Suniukas(dogsData[2]),
//   new Suniukas(dogsData[3])
// ]
const doggos = dogsData.map(dog => new Suniukas(dog));
console.log(doggos);

const sunuKorteliuSekcija = document.createElement('section');
sunuKorteliuSekcija.classList.add('dogsCards');
doggos.forEach(dog => sunuKorteliuSekcija.appendChild(dog));

document.querySelector('main').appendChild(sunuKorteliuSekcija);

document.querySelector('#addDog').addEventListener('submit', e => {
  e.preventDefault();
  const el = e.target.elements;
  const suo = {
    veisle: el.veisle.value,
    vardas: el.vardas.value,
    spalva: el.spalva.value,
    amzius: el.amzius.valueAsNumber,
    svoris: el.svoris.valueAsNumber,
    cipuotas: el.cipuotas.checked,
    lytis: el.lytis.value,
    nuotrauka: el.nuotrauka.value
  };
  console.log(suo);
  const suoNode = new Suniukas(suo);
  sunuKorteliuSekcija.appendChild(suoNode);
  e.target.reset();
})