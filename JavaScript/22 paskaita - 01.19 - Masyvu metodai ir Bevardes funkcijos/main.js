//        FUNKCIJOS

/*
  Funkcija - kazkoks uzvadintas kodas, kuri galima issikviesti bet kuriuo metu ir bet kiek kartu. Funkcijso kodas nera vykdomas kol ji nera iskvieciama.

  Syntax:
    function randomFunctionName(param1, param2, ...) { ... veiksmai ... }
  Call:
    randomFunctionName(arg1, arg2, ...);

  Parametras - funkcijos aprasymo viduje naudojami duomenys, kurie gaunami funkcijos iskvietimo metu. (su kiekvienu iskvietimu gali skirtis)
  Argumentas - duomenys, kuriuos paduodi funkcijai, ja iskviesdamas.

      Callback
  Callback - iskvietimas ir griztamasis rysys.
  Kai funkcija arba metodas kreipiasi i kita funkcija.
      Anonymous/Nameless functions / Anonimines/Bevardes funkcijos
  Funkcijos, kurioms nera priskiriamas vardas.
  Kitaip pasakius, tai funkcijos, kurios naudojamos tik kaip koks nors callback'as
    Syntax:
      function (par1, par2, ...) { ... veiksmai ... }
      (function (par1, par2, ...) { ... veiksmai ... })()

      Arrow function / Lambda
  ES6 versijoje buvo pristatytas naujas budas aprasineti bevardes funkcijas.
    Syntax:
      () => { ... veiksmai ... }
      (param1, param2, ...) => { ... veiksmai ... }
      param => { ... veiksmai ... }
      () => veiksmas
      (param1, param2, ...) => veiksmas
      param => veiksmas

  Arrow funkcijos gali buti uzvadinamos. Norint sukurti vardien funkcija naudojant arrow function, reikia sukurti kintamaji, kuriam ta arrow funkcija yra prilyginama.
    const funcName = () => {}
*/
console.log(suma(5, 9));
function suma(sk1, sk2){ // hoist'inamas i kodo pradzia
  let suma = sk1+sk2;
  return suma;
}

const daugyba = (sk1, sk2) => sk1*sk2 // nera hoist'inama i kodo pradzia
console.log(daugyba(5, 9));


//        Objects
/*
  Metodai:
  .keys(objektas) - grazina objektas raktinius zodzius kaip string'u masyva.
  ...

*/

const objektas = {a:1, b:2, hehe:3};
const objektoRaktai = Object.keys(objektas);
console.log(objektoRaktai);

//        Array
/*
  Savybes / Properties
    prototype.length - grazina masyvo ilgi (skaicius, is keliu elementu masyvas sudarytas)

  Metodai:
    prototype.at(index) - grazina masyvo elementa esanti nurodytame indekse
    prototype.concat(arr1, arr2, ...) - grazina masyvu jungini kaip nauja masyva
    prototype.fill(value, start, end) - uzpildo masyva nurodytomis reiksmemis (value) nuo nurodytos pozicijos (start) iki nurodytos pozicijos (end). MODIFIKUOJA originalu masyva ir grazina modifikuota.
    prototype.includes(value) - tikrina ar masyve yra nurodyta reiksme (value)
    prototype.indexOf(value, from) - grazina ieskomos reiksmes (value) indeksa masyve nuo nurodytos pozicijos (from). Jeigu neranda - grazina -1;
    prototype.lastIndexOf(value, from) - grazina ieskomos reiksmes (value) indeksa masyve nuo nurodytos pozicijos (from) nuo masyvo galo. Jeigu neranda - grazina -1;
    .isArray(value) - tikrina ar value (reiksme) yra masyvas.
    prototype.join(skirtukas) - grazina apjungtas masyvo reiksmes i string'a atskirtas nurodytu skirtuku. NEmodifikuoja originalaus masyvo
    .of(value1, value2, value3, ...) - sugeneruoja masyva su nurodytomis reiksmemis.
    prototype.pop() - 
    prototype.push(value) - 
    prototype.shift() - 
    prototype.unshift(value) - 
    prototype.reverse() - MODIFIKUOJA
    prototype.toReversed() - NEmodifikuoja originalaus
    prototype.slice(from, to) - NEmodifikuoja originalaus
    prototype.sort(comprateFn) - MODIFIKUOJA
    prototype.toSorted(compareFn) - grazina nauja. NEmodifikuoja originalaus
    prototype.splice(start, deleteCount, value1, value2, ...) - 
    prototype.toSpliced(start, deleteCount, value1, value2, ...) - grazina nauja pakeista masyva, NEmodifikuoja originalaus.
    prototype.with(index, value) - grazina nauja masyva, kuriame nurodytame indekse reiksme yra pakeista i nurodyta value (reiksme). NEmodfifikuoja originalaus
      prototype[index] = value; - MODIFIKUOJA originalu masyva.

*/

const numbersArray = [654,87,561,1,64,64,981,8,498,189,468];
console.log(numbersArray);
const sortedNumbersArray = numbersArray.toSorted((a, b) => {
  console.log('a', a);
  console.log('b', b);
  console.log(a-b);
  console.log('--------');


  return a - b
});
console.log(sortedNumbersArray);

const veikluMasyvas = ['TV', 'PC', 'Laukas', 'Parduotuve', 'Sportas', 'Zygis', 'Miegas'];

const asmenys= [
  {
    vardas: "Rokas",
    veikla: "PC"
  },{
    vardas: "Petras",
    veikla: "Kinas"
  },{
    vardas: "Karolis",
    veikla: "Dviratis"
  },{
    vardas: "Jonas",
    veikla: "Zygis"
  },{
    vardas: "Stanislovas",
    veikla: "Baidares"
  },
];

for(asmuo of asmenys){
  if(veikluMasyvas.includes(asmuo.veikla)){
  } else {
    // alert(asmuo.vardas + " uzsiima neaiskia veikla pavadinimu " + asmuo.veikla);
    alert(`${asmuo.vardas} uzsiima neaiskia veikla ${asmuo.veikla}`);
    veikluMasyvas.push(asmuo.veikla);
  }
}
console.log(veikluMasyvas);