let stringArray = ["Eren", "Mikasa", "Levi", "Connie", "Armin", "Sasha", "Erwin", "Reiner", "Zeke", "Hange"];
let stringArray2 = ["Eren", "Connie", "Arlert", "Braus", "Mikasa", "Smith", "Brown", "Zeke", "Zoe"];
console.log(stringArray);
let numbersArray = [256, 512, 1024, 8, 4, 16, 2, 128, 64, 32];
console.log(numbersArray);

console.log("---------- 1 ----------");

let stringas = (masyvas) => masyvas.join(", ");
console.log(stringas(stringArray));

console.log("---------- 2 ----------");



console.log("---------- 3 ----------");

function atvirkstinis (masyvas){
  let newArray1= [];
  for(let i = 0; i < masyvas.length; i++){
    newArray1.unshift(masyvas[i]);
  }
  return newArray1;
}

console.log(atvirkstinis(stringArray));

console.log("---------- 4 ----------");



console.log("---------- 5 ----------");

function minmax(masyvas){
  console.log("maziausias skaicius: ", masyvas.toSorted((a, b) => a-b)[0]);
  console.log("didziausias skaicius: ", masyvas.toSorted((a, b) => a-b)[masyvas.length-1]);
}
minmax(numbersArray);
console.log("---------- 6 ----------");

function similarArrays(masyvas1, masyvas2){
 for(info1 of masyvas1){
  if(masyvas2.includes(info1)){
    console.log(info1);
  };
 };
};
similarArrays(stringArray, stringArray2);
console.log("---------- 7 ----------");



console.log("---------- 8 ----------");



console.log("---------- 9 ----------");



console.log("---------- 10 ----------");

let ntasis = (masyvas, nr) => masyvas[nr-1];
console.log(ntasis(numbersArray, 5));