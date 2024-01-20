console.log('kodas is atskiro failo');

// komentaras singel line

/*
  komentaras
  multi
  line
*/

//        Pavadinimu kurimas
/*
  Is keliu zodziu susidarantys pavadinimai kuriami 2 budais:
    1) camelCase - kiekvienas naujas zodis prasideda is didziosios raides
    2) snake_case - kiekvienas naujas zodis prasideda uz _ simbolio
      (snake-case atveju pvz: HTML_kazkas; kazkas_HTML; ep7_HTML)

  Nenaudoti lietuvisku simboliu PAVADINIMUOSE
  Nepradeti pavadinimu skaicias
  Nepradeti pavadinimu (beveik niekada) is didziosios raides
*/

//        Kintamieji / Variables (3/5)

/*
  1) var / let / const - kintamojo startas (rasyti vien is ju (kolkas destytojas siulo naudoti let)) (rasyti reikia tik kuriant nauja kintamaji, NEREIKIA rasyti kai kreipiesi i jau egzistuojanti)
    var   - senasis rasymo budas (hoiste'ina vienu scope'u aukstyn)
    let   - naujas rasymo budas (naudoti vietoj var)
    const - naujas rasymo budas, skirtas konstantoms
          - nieko nerasant (NENAUDOTI), sukuriamas globalus kintamasis

  2) kintamajoVardas - susigalvoji unikalu iir logiska kintamojo varda

  3) = - lygybes zenklas, nurodoma kintamajam priskirta reiksme

  4) reiksme - nurodai kokia nori reiksme
    number - skaicius - uzrasomas tiesiog kaip sekcius arba matematine israiska
    string - zodziai - uzrasomas kaip simboliu rinkinys kabutese ('' arba "" arba ``)
    boolean - loginis kintamasis - true arba falsa

  5) ; - logines eilutes uzbaigimas
*/
console.groupCollapsed('kintamieji');
let skaicius = 5;
let kitasSkaicius = 10;
let sk01 = 654-87*1+3/5;
let sk02 = skaicius*kitasSkaicius;
let randomSkaicius = Math.random(); // grazina skaiciu nuo 0 iki 1
console.log(randomSkaicius);
console.log(skaicius);
let zodis = 'viengubose kabutese';
let kitasZodis = "dvigubose kabutese";
let backTick = `back tick kabutese`;
let neSkaicius = '5';
// console.log(kitasZodis);
// console.log(neSkaicius);
console.log(kitasZodis,';', neSkaicius);
let tiesa = true;
let melas = false;
console.log(tiesa);
let kazkas = skaicius+neSkaicius; // '55'
console.log(kazkas);
let kazkas0 = skaicius*neSkaicius; // 25
console.log(kazkas0);
console.groupEnd();

//        Informacijos atvaizdavimas narsykleje
/*
  console.log(); - isvedimas i konsole (browser -> dev tools -> console)]
  console.dir(); - isvedimas i konsole (issamios info)
    console.group(); | console.groupCollapsed(); - sukuria konsoles grupe
    console.groupEnd(); - pabaigia konsoles grupe
  window.alert(); - ismeta alert lentele
  window.prompt(); - ismeta alert tipo lentele su klausimu ir vieta atsakymui
  mokinsimes ateityje: innerHTML/innerText/append...
*/

//      Aritmetika
/*
  Veiksmai su duomenimis

  x+y       - sudetis
  x-y       - atimtis
  x*y       - daugyba
  x/y       - dalyba
  x**y      - laipsnio kelimas
  x**(1/y)  - saknies traukimas
  x%y       - liekana

  Visi aritmetiniai veiksmai APART sudeties gali but atliekami TIK su skaiciais

  string + number   = string
  string + boolean  = string
  boolean + number  = number
  boolean + boolean = number
*/

let sk1 = 5;
let sk2 = 23;
let neSk = '654';
let zod = 'doggo';
let neMelas = true;

console.groupCollapsed('aritmetika');
  console.log('5 + 23 =', sk1+sk2); // 28
  console.log('5 - 23 =', sk1-sk2); // -18
  console.log('5 * 23 =', sk1*sk2); // 115
  console.log('5 / 23 =', sk1/sk2); //0.217...
  console.log('23 ** 5 =', sk2**sk1); // 6436343
  console.log('23 ** (1/5) =', sk2**(1/sk1)); // 1.87...
  console.log('23 % 5 =', sk2%sk1); // 3
  console.log('', zod+sk1); // 'doggo5'
  console.log('', zod-sk1); // NaN
  console.log('', zod*sk1); // NaN
  console.log('', neSk+sk2); // '65423'
  console.log('', sk2+neSk); // '23654'
  console.log('', neSk-sk2); // 631
  console.log('', neSk*sk2); // 15042
  console.log('', neSk/sk2); // 28.434...

console.groupEnd();

//        Prilyginimas ir Palyginimai
/*
          Prilyginimai
  Naujos reiksmes priskyrimas
    let kintamais = 10;
    .........
    kintamasis = 25l arba kintamasis = 'kito tipo reikme';
    kintamasis = kintamasis + kitasKintamasis;

  Trumpiniai:
    kintamasis++                - padidina kintamaji vienetu
    kintamasis--                - sumazina kintamaji vienetu
    kintamasis+=skaicius        - padidina kintamaji nurodytu skaiciumi
    kintamasis-=skaicius        - sumazina kintamaji nurodytu skaiciumi
    kintamasis*=skaicius        - padaugina kintamaji is nurodyto skaiciaus
    kintamasis/=skaicius        - padalina kintamaji is nurodyto skaiciaus
    kintamasis**=skaicius       - pakelia kintamaji nurodyto skaiciaus laipsniu
    kintamasis**=(1/skaicius)   - istraukia nurodyto laipnio sakni is kintamojo ir ji prilygina atsakymui
    kintamasis%=skaicius        - randa liekana, kintamaji padalinus is skaiciaus ir prilygina tam kintamajam

          Palyginimai
  x > y   - ar x daugiau uz y
  x < y   - ar x maziau uz y
  x >= y  - x daugiau ARBA lygus y
  x <= y  - x maziau ARBA lygus y
  x == y  - ar x reiksme lygi y reiksmei
  x === y - ar x reiksme ir tipas lygus y reiksmei ir tipui
  x != y  - ar x reiksme nelygi y reiksmei
  x !== y - ar x reiksme ir tipas nelygus y reiksmei ir tipui
*/

console.groupCollapsed('prilyginimai');
  let kintamasis = 'pietu metas';
  console.log(kintamasis); // 'pietu metas'
  kintamasis = 10;
  console.log(kintamasis); // 10
  // kintamasis = kintamasis + 1;
  // kintamasis += 1;
  kintamasis++;
  console.log(kintamasis); // 11
  kintamasis += 5;
  console.log(kintamasis); // 16
  kintamasis -= 20;
  console.log(kintamasis); // -4

console.groupEnd();

console.groupCollapsed('palyginimai');
  console.log('10 > 10', 10 > 10); // false
  console.log('10 < 10', 10 < 10); // false
  console.log('10 > 3', 10 > 3); // true
  console.log('10 < 3', 10 < 3); // false
  console.log('10 >= 10', 10 >= 10); // true
  console.log('10 <= 10', 10 <= 10); // true
  console.log('10 >= 3', 10 >= 3); // true
  console.log('10 <= 3', 10 <= 3); // false
  console.log('10 == 10', 10 == 10); // true
  console.log('10 == "10"', 10 == "10"); // true (reiksme)
  console.log('10 === "10"', 10 === "10"); // false (reiksme IR tipas)
  console.log('10 != 10', 10 != 10); // false
  console.log('10 != "10"', 10 != "10"); // false
  console.log('10 !== "10"', 10 !== "10"); // true
  console.log('10 != "3"', 10 != "3"); // true
  

console.groupEnd();

//      Uzduotis

const name = prompt('ivesk savo varda');
let slykstyne = prompt('ivesk slykstu gyvuna');
let wordOfDay = 'magiškas';
let month = 'sausis';
let notNo = '33';

let year = 2024;
let day = 11;
let age = 33;
let random = Math.random();
let someNo = 0.5;

let lies = false;
let notLies = true;
let truth = true;

let uzduotis1 = 33;
let uzduotis2 = '1.5';
let uzduotis3 = 'zodis';

console.group('uzduotis');
  console.log('     random stuff:')
  console.log(random);
  console.log(someNo);
  console.log(notNo);
  console.log(lies);

  console.log('     more random stuff (int + smth):')
  console.log(day + random);
  console.log(day ** someNo);
  console.log(someNo - day);
  console.log(year / someNo);
  console.log(year >= day);
  console.log(age == notNo);
  console.log(age === notNo);
  console.log(day %= someNo);
  console.log(notNo + someNo);
  console.log(notNo * random);

  console.log('     even more random stuff (bool + smth):')
  console.log(lies != truth);
  console.log(notLies == truth);
  console.log(notLies === truth);
  console.log(notLies !== truth);
  console.log(lies + truth);
  console.log(notLies + truth);
  console.log(notLies - truth);
  console.log(notLies - truth + lies);
  console.log(notLies - month);
  console.log(lies + name);

  console.log('     and even more random stuff (string + string):')
  console.log(name, wordOfDay, slykstyne, '.', year, 'metai,', month, '.', day, 'diena.');
  year++;
  console.log('Po metu bus', year, 'metai');
  day--;
  console.log('vakar buvo', day, 'diena');
  day--;
  console.log('uzvakar buvo', day, 'diena');
  console.log(wordOfDay + month);
  console.log(name + slykstyne);
    notNo/=3;
    someNo*=10000;
    notNo+=10;
  console.log('tave atakuoja', slykstyne, '. Ju buvo', notNo, '. o gal net', someNo);
  
  console.group('toliau uzduotis');
    console.log(uzduotis1+uzduotis2);
    console.log(uzduotis1-uzduotis2);
    console.log(uzduotis1*uzduotis2);
    console.log(uzduotis1/uzduotis2);
    console.log(uzduotis1**uzduotis2);
    console.log(uzduotis1**(1/uzduotis2));
    console.log(uzduotis1%uzduotis2);
    console.log('alio');
    console.log(uzduotis1+lies);
    console.log(uzduotis1-lies);
    console.log(uzduotis1*truth);
    console.log(uzduotis1/lies);
    console.log(uzduotis1**lies);
    console.log(uzduotis1**(1/lies));
    console.log(uzduotis1%lies);
    console.log('alio');
    console.log(lies+uzduotis2);
    console.log(lies-uzduotis2);
    console.log(lies*uzduotis2);
    console.log(lies/uzduotis2);
    console.log(lies**uzduotis2);
    console.log(lies**(1/uzduotis2));
    console.log(lies%uzduotis2);
    console.log('alio');
    console.log(uzduotis2+uzduotis3);
    console.log(uzduotis2-uzduotis3);
    console.log(uzduotis2*uzduotis3);
    console.log(uzduotis2/uzduotis3);
    console.log(uzduotis2**uzduotis3);
    console.log(uzduotis2**(1/uzduotis3));
    console.log(uzduotis2%uzduotis3);
    