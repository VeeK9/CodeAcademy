//      4 masyvo metodai ir 1 property

/*
  pop()     - is masyvo galo isima reiksme, ja grazina ir modifikuoja originalu masyva
  push()    - i masyvo gala prideda nauja reiksme, grazina naujo masyvo ilgi ir modifikuoja originalu masyva
  shift()   - is masyvo pradzios isima reiksme, ja grazina ir modifikuoja originalu masyva
  unshift() - i masyvo pradzia prideda nauja reiksme, grazina naujo masyvo ilgi ir modifikuoja originalu masyva

  length    - nurodo masyvo ilgi.
*/

let masyvasTestui = ['a', 'b', 'c', 'd', 'e', 'f'];
console.groupCollapsed('masyvo metodai ir property');
console.log(masyvasTestui);
console.log(masyvasTestui.pop());
console.log(masyvasTestui);
console.log(masyvasTestui.push('hallo'));
console.log(masyvasTestui);
console.log(masyvasTestui.shift());
console.log(masyvasTestui);
console.log(masyvasTestui.unshift('labas'));
console.log(masyvasTestui);
console.log(masyvasTestui.length);
console.groupEnd();


//        Ciklai / Loops

/*
  Ciklas? Loop? - besikartojantys veiksmai

  Ciklai vykdomi tol, kol yra tenkinama nurodyta salyga
    Gali vykti numatyta kieki kartu
    Gali vykti nenuatyta kieki kartu
    Gali vykti begalybe kartu - BLOGAI. Vyksta kai nurodoma neteisinga salyga.

  Ciklu tipai:
    for(skaitliukoSukurimas; salyga; skaitliukoKitimas) { ... veiksmai ... } - naudojamas kai galima apskaiciuoti ciklu kieki
      for of - masyvams
      for in - objektams
    while(salyga) { ... veiksmai ... } - naudojamas kai negalima apskaiciuoti ciklu kiekio.
      do{ ... veiksmai ... } while(salyga) - pradzioje padaro veiksma, o po to tikrina salyga.
    masyvu iteraciniai metodai:
      forEach()
      filter()
      map()
      reduce()
      some()
      every()
      flatMap()
      reduceRight()
      find()
      findLast()
      findIndex()
      findLastIndex()

  Operatoriai:
    kintamasis++ - didina kintamaji vienetu PO ciklo iteracijos
    kintamasis-- - mazina kintamaji vienetu PO ciklo iteracijos
    ++kintamasis - didina kintamaji vienetu PRIES ciklo iteracijos
    --kintamasis - mazina kintamaji vienetu PRIES ciklo iteracijos
    kintamasis+=x - didina kintamaji x'u PO ciklo iteracijos
    kintamasis-=x - mazina kintamaji x'u PO ciklo iteracijos

*/

//        for

console.groupCollapsed('for');
  for(let i = 1; i <= 10; i++){
    console.log('Labas rytas ' + i);
  };
  console.log('uz ciklo');

console.groupEnd();

//        while

console.groupCollapsed('while');
  let iteracija = 1;
  while(iteracija <= 10) {
    console.log('while ciklas ' + iteracija);
    iteracija++;
  }
  console.log('uz ciklo');
  let masyvasWhile = ['a', 'b', 'c', 'd', 'e', 'f'];
  while(masyvasWhile.length) { // !== 0; > 0;
    console.log(masyvasWhile.shift());
  }
  console.log('uz ciklo');
  let randomSkaicius = undefined;
  while(randomSkaicius % 2 !== 0) {
    randomSkaicius = Math.ceil(Math.random() * 1000);
    console.log(randomSkaicius);
  }
  console.log("Skaicius " + randomSkaicius + " yra lyginis.");
console.groupEnd();

//        for of

console.groupCollapsed('for of');
  let masyvasForOf = ['a', 'b', 'c', 'd', 'e', 'f'];
  for(raide of masyvasForOf) {
    console.log('cia yra', raide, 'raide');
  }
console.groupEnd();

console.groupCollapsed('for in');
  let objektasForIn = {
    pirmas: 'vienetas',
    antras: 'dvejetas',
    trecias: 'hihi',
    ketvirtas: 654,
    darKazkas: false
  };
  for(keyword in objektasForIn) {
    console.log(keyword, objektasForIn[keyword]); // weird
  }
console.groupEnd();

//        do while

console.groupCollapsed('do while');
  let skaicius = 20;
  do {
    console.log('skaicius yra: ' + skaicius);
    // skaicius *= Math.random();
  } while(skaicius < 1)
console.groupEnd();

//        FOR praktika

console.groupCollapsed("FOR praktika");

// sukamas ciklas nuo 0 iki 20 kas 3.
for(let i = 0; i <= 20; i+=3) {
  console.log(i);
}
console.log('-----------------');

// sukamas ciklas nuo -10 iki 30 kas 5
for(let i = -10; i <= 30; i+=5) {
  console.log(i);
}
console.log('-----------------');

// sukamas ciklas nuo 10 iki neimtinai 0 kas 1
for(let i = 10; i > 0; i--) {
  console.log(i);
}
console.log('-----------------');

// sukamas ciklas nuo 0 iki 10 kas 1 ir spausdinti lyginius skaicius
for(let i = 0; i < 10; i++) {
  if(i%2 === 0) {
    console.log(i);
  };
};
console.log('-----------------');

// masyvas
let masyvasCiklams = [5123,123,123125,456,234,-123,13,1,53,-7,214];

// sukamas ciklas per visa masyva, nuo pradzios iki galo
for(let i = 0; i < masyvasCiklams.length; i++){
  console.log(masyvasCiklams[i]);
};
console.log('-----------------');

// sukamas ciklas per visa masyva nuo galo iki pradzios
for(let i = masyvasCiklams.length - 1; i >= 0; i--){
  console.log(masyvasCiklams[i]);
};
console.log('-----------------');

// sukamas ciklas per visa masyva nuo pradzios iki galo ir naujas masyvas pildomas tik teigiamais skaiciai
let naujasMasyvas = [];
for(let i = 0; i < masyvasCiklams.length; i++){
  if(masyvasCiklams[i] > 0) {
    naujasMasyvas.push(masyvasCiklams[i]);
  }
};
console.log(naujasMasyvas);
console.log('-----------------');

// sukamas ciklas per visa masyva nuo pradzios iki galo kas 3 elementa ir kiekvienas masyvo elementas spausdinamas i konsole po 3 kartus
for(let i = 0; i < masyvasCiklams.length; i+=3){
  for(let j = 0; j < 3; j++) {
    console.log(masyvasCiklams[i]);
  };
};
console.groupEnd();