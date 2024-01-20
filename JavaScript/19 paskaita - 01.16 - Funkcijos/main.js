//        Funkcija
/*
    Funkcija yra uzvadintas kodas, kuris nevyksta tol, kol i ji nera krepiamasi.
    Funkcijos gali priimti duomenis ( kreipiantis i funkcija perduodi - argumentus ir funkcijos viduje priimi ir naudoji parametrus )
    Funkcijos gali grazinti kazkokia informacija (duomenis).

    syntax:
      function susigalvotasPavadinimas() { ...veiksmai... }
      function susigalvotasPavadinimas(parametras, kitasPara, ...) { ...veiksmai... }

    call:
      susigalvotasPavadinimas();
      susigalvotasPavadinimas(argumentai, kitasArg, ...);

    Parametras - funkcijos viduje naudojamas kintamasis, kurio reiksme priklauso nuo jai paduodamos informacijoss keipimosi metu.
    Argumentas - reiksme, kuria paduodame funkcijai i ja kreipdamiesi.
*/

console.groupCollapsed("Funkciju ivadas");
  function pasisveikinimas(vardas, nuotaika) {
    console.log("Labas rytas, " + vardas);
    console.log(vardas + " yra " + nuotaika + ".");
  }
  pasisveikinimas("Rokas", "apsimiegojes");
  pasisveikinimas("Petras", "suirzes");
  pasisveikinimas("Antanas", "dead inside");
  console.log('----------------');

  function sudetis(sk1, sk2) {
    let suma = sk1 + sk2;
    return suma;
  }
  let suma0 = sudetis(5, 4);
  console.log(suma0);
  let suma1 = sudetis(100, 321);
  console.log(suma1);
  console.log(sudetis(50, -20));
console.groupEnd();

//        Kreipimasis i DOM | Event
/*
  DOM - Document Object Model

  Kreipimasis i dokumente esancius elementas (tag'us) -
  document.querySelector('');
  Ivykio klausymasis dokumente esancio elemento -
  element.addEventListener('ivykis', funkcija);
*/

console.groupCollapsed('eventai');
let mygtukas = document.querySelector('#pirmas > button');
// console.dir(mygtukas);
mygtukas.textContent += ' If You Dare'
mygtukas.addEventListener('click', mygtukoNuspaudimas)
function mygtukoNuspaudimas() {
  console.log('Paspaudei mygtuka!');
  let sekcija = document.querySelector('#pirmas');
  // console.dir(sekcija);
  // console.dir(sekcija.children[0]);
  let antraste = sekcija.children[0];
  antraste.textContent = 'Keiciame HTML pe JS';
  antraste.style.textAlign = 'center';
  antraste.style.fontSize = '50px';
  antraste.style.color = 'red';

  // sudetina
  let imageElement = document.createElement('img');
  imageElement.style.height = '300px';
  imageElement.style.width = 'auto';
  imageElement.setAttribute('src', 'https://www.greenmangaming.com/blog/wp-content/uploads/2022/06/teenage-mutant-ninja-turtles-characters-ranked.jpg');
  sekcija.appendChild(imageElement);

  // labai paprasta ir blogai del code injection
  sekcija.innerHTML += "<img src='https://www.greenmangaming.com/blog/wp-content/uploads/2022/06/teenage-mutant-ninja-turtles-characters-ranked.jpg' height='300px' width='auto'>";
}
console.groupEnd();

//        Metodai (string, math, array)

/*
  Metodas yra funkcija, kuri priklauso kazkokiam elementui/kintamajam/objektui

  Vieni metodai modifikuoja pradinius duomenis, kiti - ne.
*/

//  String metodai

/*
  concat - sujungia du arba daugiau stringu i viena.
    'as'.concat('labai', 'alkanas', ...); - 'aslabaialkanas'
    Nemodifikuoja nei vieno string'o, grazina tik ju apjungima.
  endsWith - tikrina ar string'as baigiasi su nurodyta galune.
    'katinas.endsWith('as') = true
    nemodifikuoja pradinio string'o, grazina true arba false.
  slice - iskerpa simbolius is string'o nuo nurodytos pozicijos imtinai iki nurodytos pozicijos neimtinai (jei nurodyta tik 1 pozicija - iskerpa iki galo).
    'katinas'.slice(3,5) - 'in'
    nemodifikuoja pradinio string'o, grazina tik nupjauta zodi.
  toLowerCase - pavercia string'a i mazasias raides.
    'KaTinaAS'.toLowerCase() - 'katinas'
    nemodifikuoja pradinio string'o, grazina mazosiomis raidemis.
  toUpperCase - pavercia string'a i didziasias raides.
    'KaTinAS'.toUpperCase() - 'KATINAS'
    nemodifikuoja pradinio string'o, grazina didziosiomis raidemis.
  trim - panaikina tarpus string'o pradzioje ir gale.
    '   katinas  '.trim() - 'katinas'
    nemodifikuoja pradinio string'o, grazina nauja string'a, be tarpu pradzioje ir gale.
*/

//  Math metodai

/*
  floor - suapvalina skaiciu iki maziauso sveikojo skaiciaus
    Math.floor(5.9) - 5
  ceil - suapvalina skaiciu iki didziausio sveikojo skaiciaus
    Math.ceil(5.1) - 6
  round - suapvalina skaiciu pagal apvalinimo taisykles
    Math.round(5.5) - 6
    Math.round(5.49) - 5
  random - grazina random skaiciu nuo 0 (neimtinai) iki 1 (neimtinai)
    Math.random() - (>0 - <1)
*/

// Array metodai

/*
  pop - isima is galo
  push - prideda i gala
  shift - isima is pradzios
  unshift - prideda i pradzia
  concat - sujungia keleta masyvu i viena
    [1,2].concat(['a', 'b'], [5,6], ...) - [1,2,'a','b',5,6]
    nemodifikuoja nei vieno is masyvo, o grazina nauja ju jungini.
  slice - is pateikto masyvo iskerpa elementus nuo nurodyto indekso (imtinai) iki nurodyto indekso (neimtinai), jeigu nurodytas tik vienas indeksas, tada nuo tos vietos iki galo.
    [1,2,3,4,5,6].slice(3,5) - [4,5]
    nemodifikuoja pradinio masyvo, o grazina iskirpta gabaliuka kaip nauja masyva.
  splice - is pradinio masyvo iskerpa, nuo nurodytos pozicijos, nurodyta kieki elementu ir ju vietoje iterpia likusius nurodytus elementus. grazina iskirptus elementus.
    [1,2,3,4,5,6].splice(3,2,'naujas1','naujas2',654, ...) - [4,5]
    MODIFIKUOJA pradini masyva - [1,2,3,'naujas1','naujas2',654,6]
  reverse - apvercia masyva
    [1,2,3,4,5].reverse() - [5,4,3,2,1]
    MODIFIKUOJA pradini masyva - [5,4,3,2,1]
  sort - rikiuoja abeceles tvarka, arba didejimo tvarka
    skaiciams: sort((a,b)=>a-b)
    zodziams: sort((a,b)=>a.localeCompare(b))
    MODIFIKUOJA pradini masyva, grazina modifikuota masyva
*/

function randomSkaiciusIki(iki){
  return Math.floor(Math.random()*(iki+1));
}
console.log(randomSkaiciusIki(5));