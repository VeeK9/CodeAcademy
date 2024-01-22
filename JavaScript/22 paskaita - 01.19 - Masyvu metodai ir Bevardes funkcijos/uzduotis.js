let stringArray = ["Eren", "Mikasa", "Levi", "Connie", "Armin", "Sasha", "Erwin", "Reiner", "Zeke", "Hange"];
let stringArray2 = ["Eren", "Connie", "Arlert", "Braus", "Mikasa", "Smith", "Brown", "Zeke", "Zoe"];
console.log(stringArray);
console.log(stringArray2);

let numbersArray = [256, 512, 1024, 8, 4, 16, 2, 128, 64, 32];
let numbersArray2 = [2,2,4,6,8,10,4,12,2,14,10];
let numbersArray3 = [1,4,5,6,4,8,4,5];
let numbersArray4 = [4,6,8];
console.log(numbersArray);
console.log(numbersArray2);

let skaicius = 645286344;

console.log("---------- 1 ----------");

let stringas = masyvas => masyvas.join(", ");
console.log(stringas(stringArray));

console.log("---------- 2 ----------");

function lyginisBruksnys(nr){
  let naujasString = "";
  for(let i = 0; i < String(nr).split("").length; i++){
    if(String(nr).split("")[i]%2 == 0 && String(nr).split("")[i+1]%2 == 0){
      naujasString += String(nr).split("")[i] + "-";
    } else {
      naujasString += String(nr).split("")[i];
    };
  }
  console.log(naujasString);
}
lyginisBruksnys(645286344);

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

// function atimtis(masyvas, masyvas2){
//   let vienodas = true;
//   let skirtingi = [];
//   for(no of masyvas){
//     for(no2 of masyvas2){
//       if(no == no2){
//         vienodas = true;
//         break;
//       } else {
//         vienodas = false;
//       }
//     }
//     if(vienodas == false){
//     skirtingi.push(no);
//     }
//   }
//   return skirtingi;
// };
// console.log(atimtis(numbersArray3, numbersArray4));

function atimtis(masyvas, masyvas2){
  for(no of masyvas){
    if(!masyvas2.includes(no))
    console.log(no)
    }
};
atimtis(numbersArray3, numbersArray4);



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

function indeksai(masyvas1, masyvas2){
  let naujasMasyvas = [];
  for(nr of masyvas2){
    naujasMasyvas.push(masyvas1[nr]);
  }
  return naujasMasyvas;
}

console.log(indeksai(stringArray, numbersArray4));

console.log("---------- 8 ----------");

function nevienodi(masyvas){
    for(let i=0; i < masyvas.length; i++){
        if(masyvas.slice(i+1).includes(masyvas[i]) || masyvas.slice(0, i).includes(masyvas[i]) == true){
            // console.log(masyvas[i] + " . " + masyvas.slice(i+1) + " . " + masyvas.slice(0, i) + " . " + masyvas.slice(i).includes(masyvas[i]));
        } else {
            console.log(masyvas[i]);
        }
    }
};
nevienodi(numbersArray2);

console.log("---------- 9 ----------");

// function vienodi (...arrays){
//   let vienodasArray = [];
//   console.log(arrays);
//   for(let i = 0; i < arrays.length; i++){
//     for(let k = 0; k < arrays[i].length; k++){
//       console.log(arrays[i][k], arrays[i]);
//       if(arrays[i].slice(k+1).includes(arrays[i][k]) || arrays[i].slice(0, k).includes(arrays[i][k]) == true){
//         console.log(arrays[i][k]);
//       }
//     }
//   }
// };
// vienodi(numbersArray2, numbersArray3, numbersArray4);

console.log("---------- 10 ----------");

let ntasis = (masyvas, nr) => masyvas[nr-1];
console.log(ntasis(numbersArray, 5));