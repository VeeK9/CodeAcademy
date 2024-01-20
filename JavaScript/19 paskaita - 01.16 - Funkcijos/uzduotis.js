console.groupCollapsed("uzduotys 1-8");
console.log('------------- 1 -------------');

function name1(name){
  alert(name);
}
name1(prompt("ivesk savo varda:"));

console.log('------------- 2 -------------');

function number1(){
  return Math.ceil(Math.random()*5);
}
console.log(number1());

console.log('------------- 3 -------------');

function vardasPavarde(name2, lastName2) {
  return name2.length + lastName2.length;
}

console.log(vardasPavarde("Vytautas", "Kakaras"));

console.log('------------- 4 -------------');

let raidziuMasyvas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function masyvoRaide(numeris) {
  // return raidziuMasyvas.slice(numeris, numeris+1);
  let nr = raidziuMasyvas.slice(numeris, numeris+1)+"";
  return nr;
}
console.log(masyvoRaide(4));

console.log('------------- 5 -------------');

function masyvasIsEiles(masyvas){
  for(let i = 0; i <= masyvas.length-1; i++){
    console.log(masyvas[i]);
  };
}
 masyvasIsEiles(raidziuMasyvas);

console.log('------------- 6 -------------');

let skaiciuMasyvas = [];

function skaiciai(sk1, sk2){
  for(let i = sk1; i <= sk2; i++){
    skaiciuMasyvas.push(i);
  }
  console.log(skaiciuMasyvas);
};

// function skaiciai(sk1, sk2){
//   for(let i = sk1; i <= sk2; i++){
//     console.log(i);
//   }
// };

skaiciai(3, 8);

console.log('------------- 7 -------------');

function aritmetika(sk1, sk2){
  console.log(sk1 + sk2);
  console.log(sk1 - sk2);
  console.log(sk1 / sk2);
  console.log(sk1 * sk2);
  console.log(sk1 ** sk2);
  console.log(sk1 ** (1/sk2));
  console.log(sk1 % sk2);
}

aritmetika(12, 3);
console.log('----------');
aritmetika(128, 6);

console.log('------------- 8 -------------');

function matematika(sk1, sk2, operator){
  switch (operator){
    case "+":
      console.log(sk1 + sk2);
      break;
    case "-":
      console.log(sk1 - sk2);
      break;
    case "/":
      console.log(sk1 / sk2);
      break;
    case "*":
      console.log(sk1 * sk2);
      break;
  }
}

matematika(2, 3, "-");

console.log('------------- end -------------');

console.groupEnd();

console.groupCollapsed("extra 1");

function fizzBuzz(sk1, sk2){
  for(let i = sk1; i <= sk2; i++) {
    if(i%3 === 0 && i%5 !== 0) {
      console.log(i, "Fizz");
    } else if(i%5 === 0 && i%3 !== 0) {
      console.log(i, "Buzz");
    } else if(i%3 === 0 && i%5 === 0 && i != 0) {
      console.log(i, "FizzBuzz");
    } else {
      console.log(i + " skaicius");
    }
  }
  console.log("panaudoti skaiciai:", sk1, "ir", sk2);
}

fizzBuzz(4, 15);

console.groupEnd();

console.groupCollapsed("extra 2");

function pirminiai(sk){
  for(let i = 2; i <= sk; i++) {
    let pirminis = true;
    for(let m = 2; m < i; m++) {
      if(i%m === 0) {
        pirminis = false;
        break;
      }
    }
    if(pirminis==true) {
      console.log(i);
    }
  }
}
pirminiai(30);

console.groupEnd();

console.groupCollapsed("extra 3");


function random(){
  // let random1 = (Math.random()*9)+1
  // return random1;
  let random1 = Math.ceil(Math.random()*10);
  return random1;
}
function kvadratas(random1){
  return random1**2;
}

// console.log(random());

console.log(kvadratas(random()));

console.groupEnd();
