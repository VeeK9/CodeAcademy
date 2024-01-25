const DOMpvz = document.querySelector('#DOMpvz');
DOMpvz.classList.add('kortele');
let antraste = document.createElement('h1');

DOMpvz.appendChild(antraste);
let antrastesPavadinimas = document.createTextNode('Korteles pavadinimas');
antraste.appendChild(antrastesPavadinimas);
// let antrastesPavadinimasExtra = document.createTextNode('Dar teksto ');
// antraste.prepend(antrastesPavadinimasExtra);
// antraste.textContent = "Korteles pavadinimas";

let paragrafas = document.createElement('p');
let paragrafasTekstas = document.createTextNode('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nihil nulla voluptates, eaque excepturi cum quae dignissimos minus alias repudiandae. Laudantium nihil nulla voluptates, eaque excepturi cum quae dignissimos minus alias repudiandae.');
paragrafas.appendChild(paragrafasTekstas)
DOMpvz.appendChild(paragrafas);

let image = document.createElement('img');
image.setAttribute('src', 'https://static.wikia.nocookie.net/villains/images/f/f8/Stan_Pines.png');
image.setAttribute('alt', 'Grunkle Stan');
DOMpvz.appendChild(image);

// DOMpvz.addEventListener('mouseenter', () => {
//   DOMpvz.classList.add('kortelePortrait');
// });

// DOMpvz.addEventListener('mouseleave', () => {
//   DOMpvz.classList.remove('kortelePortrait');
// });

DOMpvz.addEventListener('click', () => {
  DOMpvz.classList.toggle('kortelePortrait');
});

//        LIST

const listSec = document.querySelector('#list');

//    innerHTML

// let listItemai = '';
// for(let i = 0; i < 10; i++){
//   listItemai += `<li>tekstas</li>`
// };
// listSec.innerHTML += `
//   <ul>
//     ${listItemai}
//   </ul>
// `;

// let listItem = document.querySelector('#list > ul > li');
// console.log(listItem);

//    createElement
let sarasas = document.createElement('ul');
for(let i = 0; i < 10; i++){
  let listItem = document.createElement('li');
  if(i === 3){
    listItem.addEventListener('click', () => console.log('found it'));
  }
  let listItemText = document.createTextNode('tekstas');
  listItem.appendChild(listItemText);
  sarasas.appendChild(listItem);
};
listSec.appendChild(sarasas);

//    DOM papildymas is duomenu

console.log(duomenysKartu);

/*
      is duomenu sukurti korteles ir jas ikelti i HTML;

  sukti cikla per visus duomenis
    susikurti html elementus kiekvienai kortelei
    html elementus reikia uzpildi info is duomenu
    korteles sukelti i HTML

*/

const moviesDiv = document.querySelector('#moviesContainer');

duomenysKartu.forEach(filmas => {
  // let {pavadinimas, aprasymas, paveiksliukoURL, paveiksliukoALT} = filmas;

  const divas = document.createElement('div');
  divas.classList.add('kortele');
  const heading = document.createElement('h1');
  heading.textContent = filmas.pavadinimas;
  const paragraph = document.createElement('p');
  paragraph.textContent = filmas.aprasymas;
  const image = document.createElement('img');
  image.setAttribute('src', filmas.paveiksliukoURL);
  image.setAttribute('alt', filmas.paveiksliukoALT);
  divas.append(heading, paragraph, image);
  moviesDiv.appendChild(divas);
});