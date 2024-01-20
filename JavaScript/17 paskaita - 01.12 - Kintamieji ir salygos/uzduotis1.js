//        0 uzduotele

let masyvas1 = ["a", "b", "c", "d", "e", "f"];
let objektas1 = {
  a:"a",
  b:"b",
  c:"c",
  d:"d",
  e:"e",
  f:"f"};

let masyvas2 = [
  "aa",
  "bb",
  masyvasMasyve2 = ["11", "22", "33", "44"],
  "dd"
]

let masyvas3 = [
  "aa",
  objektasMasyve3 = {
    aa:"aa",
    bb:"bb",
    cc:"cc",
    dd:"dd"},
  "cc",
  "dd"
]

let objektas2 = {
  masyvasObjekte1: ["11", "22", "33", "44"],
  bbb:"bbb",
  ccc:"ccc",
  ddd:"ddd"
}

let objektas3 = {
  aaaa:"aaaa",
  bbbb:"bbbb",
  cccc:"cccc",
  objektasObjekte: {
    vienas:"vienas",
    du:"du",
    trys:"trys",
    keturi:"keturi"
  }
}

console.groupCollapsed("0 uzduotele");

console.log(masyvas1[2]); // c
console.log(masyvas1[0]); // a
console.log(objektas1.d); // d
console.log(objektas1.f); // f

console.log(masyvas2); // array
console.log(masyvas2[0]); // aa
console.log(masyvas2[2][1]); // 22
console.log(masyvas2[4]); // undefined

console.log(masyvas3); // array
console.log(masyvas3[2]); // cc
console.log(masyvas3[0]); // aa
console.log(masyvas3[1].dd); // dd

console.log(objektas2); // object
console.log(objektas2.bbb); // bbb
console.log(objektas2.masyvasObjekte1[1]); // 22
console.log(objektas2.masyvasObjekte1[5]); // undefined

console.log(objektas3); // object
console.log(objektas3.bbbb); // bbbb
console.log(objektas3.objektasObjekte.du); // du
console.log(objektas3.objektasObjekte.keturi); // keturi

console.groupEnd();

//        1 uzduotele

const legalAge = 20;
let clientAge = parseInt(prompt("Įvesk savo amžių:"));
if(typeof(clientAge) === "number" && clientAge >= legalAge) {
  alert("gali vartoti redbull")
} else if(clientAge >= 0 && typeof(clientAge) === "number") {
  alert("negali vartoti redbull")
} else {
  alert('Prasom ivesti metu skaiciu. Aciu.')
};

//        2 uzduotele

let name = prompt("Tavo vardas:");
if(name.length > 6) {
  console.log("Tavo vardas ilgas");
  document.body.innerHTML = "<h1 style='color:green; text-align:center'>Tavo vardas yra ilgas</h1>"
} else {
  console.log("Tavo vardas trumpas"),
  document.body.innerHTML = "<h1 style='color:red; text-align:center'>Tavo vardas yra trumpas</h1>"
};

//        3 uzduotele

let age = prompt("Tavo amžius:");
if(age < 0 || age > 100) {
  console.log("Invalid age");
} else if(age < 19) {
  console.log("Child");
} else {
  console.log("Adult");
};

//        4 uzduotele

let car = prompt("Įvesk savo automobilio markę:");
if(car === "vw" || car === "audi" || car === "skoda" || car === "bentley" || car === "seat" || car === "bugatti" || car === "porsche" || car === "lamborghini") {
  console.log("Automobilis priklauso VW group");
} else if(car === "bmw" || car === "mini" || car === "rolls-royce") {
  console.log("Automobilis priklauso BMW group");
} else {
  console.log("Automobilis nepriklauso nei VW, bei BMW");
};

//        5 uzduotele

let teises = true;
let auto = true;
let sober = false;
if(teises == true) {
  if(auto == true && sober == true) {
    console.log("Galite vairuoti, nes turite teises, automobili ir esate blaivus");
  } else if(auto == true) {
    console.log("Negalite vairuoti, nes esate neblaivus, nors ir turite teises ir automobili");
  } else if(sober == false) {
    console.log("Kadangi esate neblaivus, negaletumete vairuoti nors ir turetumete automobili.");
  } else {
    console.log("Negalite vairuoti, nes neturite automobilio, nors turite teises");
  };
} else {
  console.log("Vairuoti negalite, nes neturite teisiu");
};