const cars = ["BMW", "VW", "Audi"];
let namesArray = ['simOnas', 'jUstinA', 'KARolis', 'marIJa', 'AgnE', 'eGle', 'aDoMaS'];
let agesArray = [33, 34, 40, 36, 31, 30, 32];
let citiesArray = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'panevezys', 'Utena', 'Alytus'];
let person = {
  name: 'Jonathan',
  lastName: undefined,
  address: {
    country: 'USA',
    miestas: 'Ridgewood'
  }
};

console.groupCollapsed('Iteraciniu masyvu metodu uzduotys:');

// 1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
console.log('----- 1 -----');

cars.forEach(el => console.log(el));

// 2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
console.log('----- 2 -----');

cars.forEach((el, i) => console.log(`${i}: ${el}`));

// 3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
console.log('----- 3 -----'); 

let namesMap = namesArray.map((vardas) => {
  return vardas[0].toUpperCase() + vardas.slice(1).toLowerCase()
});
console.log(namesMap);

// 4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs jūsų amžiui.
console.log('----- 4 -----');

let agesFilter = agesArray.filter(el => el >= 33);
console.log(agesFilter);

// 5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas", "Klaipėda", ...). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
console.log('----- 5 -----'); 

let citiesFind = citiesArray.find(el => el[0] == 'K');
console.log(citiesFind);


// 6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
console.log('----- 6 -----');

let citiesSome = citiesArray.some(el => el[0] === el[0].toLowerCase());
console.log(citiesSome);


// 7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.
console.log('----- 7 -----'); 

let citiesEvery = citiesArray.every(el => el[0] == el[0].toUpperCase());
console.log(citiesEvery);

console.groupEnd();


// Destrukturizavimas


console.groupCollapsed('Destrukturizavimas');

// 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes, iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.
console.log('----- 1 -----'); 

let [,, uzd1c, ...uzd1rest] = citiesArray;
console.log(uzd1c, uzd1rest);

// 2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1'oji būtų pakeistu pavadinimu, 2'oji turėtų default reikšmę, 3'oji būtų iš viduje nestinto objekto, 4'oji būtų iš viduje nestinto objekto su pakeistu pavadinimu.
console.log('----- 2 -----'); 

let {name:firstName, lastName='unspecified', address:{country}, address:{miestas:city}} = person;
console.log(`First name: ${firstName}. Last name: ${lastName}. user is from ${city}, ${country}`);

// 3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes išskyrus pirmas 3.
console.log('----- 3 -----'); 

let [,,, ...from3rd] = agesArray;
console.log(from3rd);

// 4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
console.log('----- 4 -----'); 

let a = namesArray;
let b = citiesArray;

[a, b] = [b, a];
console.log(a,b);

console.groupEnd();


// FILTER


console.groupCollapsed('Filter');

// 1) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
console.log('----- 1 -----'); 

let newRandomNumbersArray = [];
function newNumbersArray(a, b, c){
  for(let i=0; i < a; i++){
    newRandomNumbersArray.push(Math.floor(Math.random()*(c+1-b)+b));
  }
  return newRandomNumbersArray;
}
console.log(newNumbersArray(10, 0, 10));

// 2) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).
console.log('----- 2 -----'); 

let newRandomStringsArray= [];
function newStringArray(string){
  newRandomStringsArray = string.split('.').join("").split(',').join("").split(" ");
  return newRandomStringsArray;
};
console.log(newStringArray(`Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą. Atskirianti kiekvieną žodį.`));

// 3) Naudojant 1'ios užduoties masyvą išfiltruoti lyginius skaičius.
console.log('----- 3 -----'); 

let uzd3 = newRandomNumbersArray.filter(el => el%2===0);
console.log(uzd3);

// 4) Naudojant 1'ios užduoties masyvą išfiltruoti nelyginius skaičius.
console.log('----- 4 -----'); 

let uzd4 = newRandomNumbersArray.filter(el => el%2!==0);
console.log(uzd4);

// 5) Naudojant 1'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
console.log('----- 5 -----'); 

console.log(newRandomNumbersArray.filter(el => Number.isInteger(el)));

// 6) Sukurti funkciją, kuri 1'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
console.log('----- 6 -----');

let uzd6 = (a, b) => newRandomNumbersArray.filter((el, i) => (a-1 <= i && i <= b-1) && console.log(el));
uzd6(3,5);
// 7) Naudojant 2'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
console.log('----- 7 -----'); 

let uzd7 = (masyvas) => masyvas.filter(el => el[0] === el[0].toUpperCase() && console.log(el));
uzd7(newRandomStringsArray);

// 8) Naudojant 2'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
console.log('----- 8 -----'); 

let uzd8 = (masyvas) => masyvas.filter(el => el[0] === el[0].toLowerCase() && console.log(el));
uzd8(newRandomStringsArray);

// 9) Sukurti funkciją, kuri iš 2'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.
console.log('----- 9 -----'); 

let uzd9 = (masyvas, letter) => masyvas.filter(el => (el[0].toLowerCase() == letter.toLowerCase()) && console.log(el));
uzd9(newRandomStringsArray, 's');


// 10) Sukurti funkciją, kuri iš 2'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
console.log('----- 10 -----'); 

let uzd10 = (masyvas, letter) => masyvas.filter(el => el[el.length-1] == letter && console.log(el));
uzd10(newRandomStringsArray, 'o');

// 11) Naudojant reduce metodą suskaičiuoti 3'tos užduoties masyvo bendrą sumą.
console.log('----- 11 -----'); 

let uzd11 = uzd3.reduce((acc, el) => acc + el)
console.log(uzd11);

// 12) Naudojant reduce metodą suskaičiuoti 4'tos užduoties masyvo bendrą sandaugą.
console.log('----- 12 -----'); 

let uzd12 = uzd4.reduce((acc, el) => acc * el)
console.log(uzd12);

console.groupEnd();


// MORE


console.group('More');

// 1) Parašyti arrow funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius). (function name(masyvas, d/s, ilgNeg, trumpNeg))
console.log('----- 1 -----'); 

let more1Ats;
let more1 = (masyvas, letter, a, b) => {
  more1Ats = masyvas.find(el => el[0] == letter && a <= el <=b);
  return more1Ats;
};
console.log(more1(newRandomStringsArray, "s", 5, 8));

// 2) Parašykite arrow funkciją, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides, tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)
console.log('----- 2 -----'); 
let more2Array = ['zodis', 43, 652, 'sakinys', 2, 'antras zodis', 81, 'vardas', 'masyvas', 20, 0, 15, 311];
// let more2Ats;
// let more2 = (masyvas, a, b, letter) => {
//   more2Ats = masyvas.filter(el => (a <= el <= b) && el%2 == letter);
//   return more2Ats;
// };
// console.log(more2(more2Array, 30, 400, false));

// 3) Sukurti arrow funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
console.log('----- 3 -----');

let moreNumbersArray = [];
let more3 = (a, b, c) => {
  for(let i=0; i < a; i++){
    moreNumbersArray.unshift(Math.floor(Math.random()*(c+1-b)+b));
  }
  return moreNumbersArray;
}
console.log(more3(10, 0, 10));

// 4) Sukurti arrow funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį.
console.log('----- 4 -----'); 

let moreStringsArray = [];
let more4 = string => moreStringsArray = string.split('.').join("").split(',').join("").split(" ");
console.log(more4(`Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą. Atskirianti kiekvieną žodį.`));

// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.
console.log('----- 5 -----'); 

let more5 = moreNumbersArray.filter(el => el%2===0);
console.log(more5);

// 6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.
console.log('----- 6 -----'); 

let more6 = moreNumbersArray.filter(el => el%2!==0);
console.log(more6);

// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
console.log('----- 7 -----'); 

let more7 = moreNumbersArray.filter(el => Number.isInteger(el));
console.log(more7);

// 8) Sukurti arrow funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
console.log('----- 8 -----'); 

let more8 = (a, b) => moreNumbersArray.filter((el, i) => (a-1 <= i && i <= b-1) && console.log(el));
more8(3,5);

// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
console.log('----- 9 -----'); 

let more9 = (masyvas) => masyvas.filter(el => el[0] === el[0].toUpperCase() && console.log(el));
more9(moreStringsArray);

// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
console.log('----- 10 -----'); 

let more10 = (masyvas) => masyvas.filter(el => el[0] === el[0].toLowerCase() && console.log(el));
more10(moreStringsArray);

// 11) Sukurti arrow funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.
console.log('----- 11 -----'); 

let more11 = (masyvas, letter) => masyvas.filter(el => (el[0].toLowerCase() == letter || el[0].toUpperCase() == letter) && console.log(el));
more11(moreStringsArray, 's');

// 12) Sukurti arrow funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
console.log('----- 12 -----'); 

let more12 = (masyvas, letter) => masyvas.filter(el => el[el.length-1] == letter && console.log(el));
more12(moreStringsArray, 'o');

// 13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.
console.log('----- 13 -----'); 

let more13 = more5.reduce((acc, el) => acc + el, 0)
console.log(more13);

// 14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.console.log('----- 1 -----'); 
console.log('----- 14 -----'); 

let more14 = more6.reduce((acc, el) => acc * el)
console.log(more14);

console.groupEnd();