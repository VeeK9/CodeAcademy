console.groupCollapsed("teorija");

//        METODAI

/*
  Savybe/Property - jau sukurta ir priskirta bei nekintanti reiksme, skirta kintamojo tipui.
  Metodas - jau sukurta funkcija, kuri priklauso kazkuriam specifiniam elementui/kintamajam.
  Metodai skirti tam, kad pagreitintu / palengvintu programuotojo darba.

  Metodai gali buti prototipiniai arba ne. prototipinio atveju kreipiames i metoda ar savybe per kintamaji. Ne prototipinio atveju kreipiames i savybe ar i metoda per globalu kintamojo tipa.
  Tipas.prototype.metodas/savybe - kintamasis.metodas()/savybe.
  Tipas.metodas/savybe - Tipas.metodas()/savybe

*/

/*    Boolean
  Metodai:
  prototype.toString() - pavercia i string tipo kintamaji.
  prototype.valueOf() - grazina kintamojo reiksme.
*/

let tiesa = true;

console.log(tiesa);
console.log(tiesa.toString());
console.log(tiesa.valueOf());

console.log("---------------------");

/*        Number
  Integer / Int - sveikasis skaicius
  Float - realusis skaicius

  Savybes: 
    .EPSILON - grazina epsilon
    .MAX_SAFE_INTEGER - maksimalus skaicius, su kuriuo dar galima atlikti veiksmus.
    .MIN_SAFE_INTEGER - minimalus skaicius, su kuriuo dar galima atlikti veiksmus.
    .MAX_VALUE
    .MIN_VALUE
    .POSITIVE_INFINITY
    .NEGATIVE_INFINITY
    .NaN - grazina NaN

  Metodai:
    .isFinite(skaicius) - ar skaicius nera begalinis
    .isInteger(skaicius) - ar skaicius sveikasis
    .isSafeInteger(skaicius) - ar nevirsija saugaus sveiko skaiciaus
    .isNaN(kazkas) - ar NaN
    .parseInt(kazkas) - vercia i sveikaji skaiciu
    .parseFloat(kazkas) - vercia i realuji skaiciu
    prototype.toFixed(nr) -  kiek nr skaiciu uz kablelio (suapvalinus)
    prototype.toPrecision(nr) - kokio (nr) ilgio skaicius
*/

/*        Math
  Savybes:
    Math.PI - grazina pi
    ...

  Metodai:
    .pow(nr, laipsnis) - kelia nr laipsniu. // nr**laipsniu
    .cbrt(nr) - kubine nr saknis
    .sqrt(nr) - kvadratine nr saknis
    .floor(nr) - suapvalina nr iki mazesnio sveiko
    .ceil(nr) - suapvalina nr iki didesnio sveiko
    .round(nr) - suapvalina nr pagal apvalinimo taisykles
    .hypot(nr1, nr2, ...) - visu sudetu nr kvadratu sumos saknis (pitagoro teroija is visu duotuju nr.
    .max(nr1, nr2, nr3, ...) - didziausias is duotuju nr.
    .min(nr1, nr2, nr3, ...) - maziausias is duotuju nr.
    .random() - grazina random skaiciu, nuo 0 iki 1 neimtinai
    .sign(nr) - ar nr teigiamas(1) ar niegiamas(-1), ar 0(0)
    .trunc(nr) - pavercia nr sveikuoju skaiciumu (panaikina viska uz kablelio)

*/

/*        String
  Savybes:
    prototype.length - grazina stringo ilgi

  Metodai:
    prototype.at(nr) - simbolis nurodytoje pozicijoje (galima nuo galo su minusu)
    prototype.charAt(nr) - simbolis nurodytoje pozicijoje
      'zodis'[nr] - simbolis nurodytoje pozicijoje
    prototype.charCodeAt(nr) - simbolio esancio nr pozicijoje UTF-16 simboliu bibliotekos indeksas (a - 94, A - 65, ą - 261, ū - 363)
    prototype.concat() - 
    prototype.endsWith() - 
    prototype.
    .fromCharCode(pozicija) - grazina simboli pagal jo pozicija UTF-16 simboliu bibliotekoje
    .fromCodePoint(pozicija) - grazina simboli pagal jo pozicija UTF-16 simboliu bibliotekoje
    prototype.includes(zodis, pozicija) - ar egzistuoja zodis nuo pozicijos (nenurodyta pozicija - tikrina nuo nulio)
    prototype.indexOf(zodis, pozicijos) - grazina string'e esancio zodzio indeksa, nuo nurodytos pozicijos
    prototype.lastIndexOf(zodis, pozicijos)
    prototype.localeCompare(zodis, locale, { options }) - palygina ir grazina 1 arba -1, arba 0
    prototype.match(regex) - ar atitinka bent viena regex
    prototype.matchAll(regex) - ar atitinka visos regex
    prototype.padStart(ilgis, string) - pildo zodi string'ais pradzioje kol pasiekiamas norimas ilgis
    prototype.padEnd(ilgis, string) - pildo zodi string'ais gale kol pasiekiamas norimas ilgis
    .raw(string) - atvaizduoja visus simbolius, net ir escape sequence
    prototype.repeat(kartai) - atkartoja string'a nurodyta kieki kartu
    prototype.replace('ka', 'kuom') - pakeicia pirma rasta (ka) (gali buti regex) tavo nurodytu (kuom)
    prototype.replaceAll('ka', 'kuom') - pakeicia visus rastus (ka) (gali buti regex) tavo nurodytu (kuom)
    prototype.slice(nuo, iki) - 
    prototype.split(skirtukas) - sukarpo string'a i masyva ties skirtukais (kurie gali buti regex)
    prototype.startsWith(simboliai) - ar string'as prasideda simboliais
    prototype.substring(nuo, kiek, ka1, ka2, ka3, ...) - 
    prototype.toLowerCase() - pavercia string'a i mazasias raides
    prototype.toUpperCase() - pavercia string'a i didziasias raides
    prototype.trimStart() - panaikina tarpus pradzioje
    prototype.trimEnd() - panaikina tarpus gale
    prototype.trim() - panaikina tarpus pradzioje ir gale

*/

// Patikrinti ar vartotojo ivestis prasideda didziaja raide.

let vartotojoIvestis = 'Labas rytas';

if(vartotojoIvestis[0] === vartotojoIvestis[0].toUpperCase()){
  console.log(vartotojoIvestis, '- pirmoji raide didzioji.');
} else {
  console.log(vartotojoIvestis, "- pirmoji raide mazoji.");
}

console.groupEnd();

console.group("praktines uzduotys");

let stringas = "Paprastas strings";
let numeris = 256;
let stringArray = ["Eren", "Mikasa", "Levi", "Connie", "Armin", "Sasha", "Erwin", "Reiner", "Zeke", "Hange"];
let numberArray = [256, 512, 1024, 8, 4, 16, 2, 128, 64, 32];
let randomArray = ["floppy", 8, "cdrom", 16, 256, "pentium", "celeron", 512, "ethernet", 2];

console.log("----- 6 -----");

console.log(stringas[0]);

console.log("----- 7 -----");

console.log(stringas[stringas.length-1]);

console.log("----- 8 -----");

console.log(stringas[Math.round((stringas.length-1)/2)]);
// console.log(Math.round((stringas.length-1)/2));

console.log("----- 9 -----");

function kelintoji(zodis, nr){
  console.log(zodis[nr]);
};
kelintoji("labas", 3);

console.log("----- 10 -----");

if(numeris%2 === 0){
  console.log("skaicius", numeris, "yra lyginis");
};

console.log("----- 11 -----");

if(numeris%2 !== 0){
  console.log("skaicius", numeris, "yra nelyginis");
};

console.log("----- 12 -----");

if(Number.isInteger(numeris)){
  console.log("skaicius", numeris, "yra sveikasis skaicius");
};

console.log("----- 13 -----");

function lygNelyg(nr){
  if(nr%2 === 0){
  return numeris + " yra lyginis";
  } else {
  return numeris + " nelyginis";
  }
};
console.log(lygNelyg(numeris));

console.log("----- 14 -----");

for(vienetas of stringArray){
  if(vienetas.length >= 5){
    console.log(vienetas);
  }
};

console.log("----- 15 -----");

for(vienetas of stringArray){
  if(vienetas.length < 8){
    console.log(vienetas);
  }
};

console.log("----- 16 -----");

function pirmosRaides(array){
  for(pirmaRaide of stringArray){
      console.log(pirmaRaide[0]);
  }
};
pirmosRaides(stringArray);

console.log("----- 17 -----");

function paskutinesRaides(array){
  for(pirmaRaide of stringArray){
      console.log(pirmaRaide[pirmaRaide.length-1]);
  }
};
paskutinesRaides(stringArray);

console.log("----- 18 -----");

function zodzioIlgioIntervalai(masyvas, a, b){
  for(vienetas of masyvas){
    if(vienetas.length > a && vienetas.length < b){
      console.log(vienetas);
    }
  }
};
zodzioIlgioIntervalai(stringArray, 5, 7);

console.log("----- 19 -----");

let suma = 0;
for(skaicius of numberArray){
  suma += skaicius;
}
console.log(suma);

console.log("----- 20 -----");

suma = 0;
for(let i = 1; i < numberArray.length; i+=2){
    suma += numberArray[i];
};
console.log(suma);

console.log("----- 21 -----");

function kazkelintas(nr){
  suma = 0;
  for(let i = 0; i < numberArray.length; i+=nr){
      suma += numberArray[i];
  }
  console.log(suma);
};
kazkelintas(4);

console.log("----- 22 -----");

function kazkelintasCustom(masyvas, intervalas, boolas){
  suma = 0;
  for(let i = intervalas-1; i < masyvas.length; i+=intervalas){
  // for(let i = 0; i < masyvas.length; i+=intervalas){
    if(boolas === false){
      suma += masyvas[i];
    }
  }
  console.log(suma);
};
kazkelintasCustom([1,2,3,4,5,6,7,8,9], 3, false);

console.log("----- 23 -----");

let newStringArray = [];
let newNumberArray = [];
function appropriated(masyvas){

  for(let i = 0; i < masyvas.length; i++){
    if(typeof masyvas[i] == 'number'){
      newNumberArray.push(masyvas[i]);
    } else {
      newStringArray.push(masyvas[i]);
    }
  }
}
appropriated(randomArray);
console.log(newStringArray);
console.log(newNumberArray);
