let raidziuMasyvas = ["zpO", "a", "pLs", "msKv", "qwer", "lotf", "plob", "bdvw", "Asdf", "invr", "k", "wEd", "c", "qweis", "caRL", ];
let skaiciuMasyvas = [7,234,653,23,55,-123,547,32,1,90,11,-67,59,3,-20];
console.log(raidziuMasyvas);
console.log(skaiciuMasyvas);

console.log(" ---------- 1 ---------- ");

function reverse(masyvas){
  for(vienetas of masyvas.toReversed()){
    console.log(vienetas);
  }
}

reverse(raidziuMasyvas);

console.log(" ---------- 2 ---------- ");

function alphabetical(masyvas){
  for(vienetas of masyvas.sort((a,b)=>a.localeCompare(b))){
  console.log(vienetas);
  }
}

alphabetical(raidziuMasyvas);

console.log(" ---------- 3 ---------- ");

function fromBiggestNumber(masyvas){
  for(info of masyvas.sort((a,b)=>a-b).toReversed()){
    console.log(info);
  }
}

fromBiggestNumber(skaiciuMasyvas);

console.log(" ---------- 4 ---------- ");

function intervals(interval, firstNo, lastNo){
  for(let i = firstNo; i <= lastNo; i+=interval){
    console.log(i);
  }
}

intervals(3, 6, 32);

console.log(" ---------- 5.0 ---------- ");

function arrayWithTenRandoms(){
  let masyvas = [];
  for(let i = 1; i <= 10; i++){
    masyvas.push(Math.floor(Math.random()*101));
  }
  return masyvas;
}

console.log(arrayWithTenRandoms());


console.log(" ---------- 5.1 ---------- ");

function arrayWithCustomRandoms(No){
  let masyvas = [];
  for(let i = 1; i <= No; i++){
    masyvas.push(Math.floor(Math.random()*101));
  }
  return masyvas;
}

console.log(arrayWithCustomRandoms(4));

console.log(" ---------- 5.2 ---------- ");

function customArrayWithCustomRandoms(length, from, to){
  let masyvas = [];
  for(let i = 1; i <= length; i++){
    masyvas.push(Math.floor(Math.random()*(to - from +1) + from));
  }
  return masyvas;
}

console.log(customArrayWithCustomRandoms(6, 490, 500));

//          EVENTS        uzduotis 1.

let sectionHero = document.querySelector('#hero');
let button1 = sectionHero.children[1];

function alertas1(){
  alert("Cia galetu buti Tavo vardas!");
}

button1.onclick = (alertas1);

//          EVENTS        uzduotis 2.

let button2 = sectionHero.children[2];
button2.addEventListener("click", alertas2);

function alertas2(){
  alert("blah blah blah!");
}

//          EVENTS        uzduotis 3.

let button3 = sectionHero.children[3];
button3.addEventListener("click", alertas3);

function alertas3(){
  let span = document.createElement('span')
  span.style.color = 'red';
  span.textContent = ' Sveiki, mano vardas Vytautas, as esu lopas :)';
  sectionHero.children[4].appendChild(span);
}

//          EVENTS        uzduotis 4.

let sectionMain = document.querySelector('#main');
// console.dir(sectionMain);

sectionMain.children[1].addEventListener("click", didesneAntraste);

function didesneAntraste(){
  sectionMain.children[0].textContent = parseInt(sectionMain.children[0].textContent) + 1;
}

//          EVENTS        uzduotis 5.

document.querySelector('#penktas > p').addEventListener("copy", preventCopying);

function preventCopying(copy){
  alert("nekopijuok!")
  copy.preventDefault();
}

//          EVENTS        uzduotis 6.

document.querySelector('#sestas > button').addEventListener('click', randomAntraste);

function randomAntraste(){
  nr = Math.floor(Math.random()*101);
  let naujaAntraste = document.createElement('h1');
  naujaAntraste.textContent = nr;
  naujaAntraste.style.color = 'red';
  document.querySelector('#sestas').appendChild(naujaAntraste);
}

//          EVENTS        uzduotis 7.

document.querySelector('#septintas :nth-child(1)').addEventListener('click', pilnametis);
document.querySelector('#septintas :nth-child(2)').addEventListener('click', nePilnametis);

function pilnametis(){
  let naujaAntraste2 = document.createElement('h1');
  naujaAntraste2.textContent = "ALUS";
  document.querySelector('#septintas').appendChild(naujaAntraste2);
}
function nePilnametis(){
  alert("nepilnametis - uzauk!");
}

//          EVENTS        uzduotis 8.
console.log(" ---------- events 8 ---------- ");


let randomas = Math.ceil(Math.random()*3);
function randomSk(){
  console.log(randomas);
 for (button of document.querySelectorAll('#astuntas > button')){
  button.addEventListener('click', atspek);
 }
}

function atspek(event){
  if(event.target.textContent*1 === randomas){
    window.alert("Yay!");
  } else {
    window.alert("Nay")
  }
}

randomSk();

//          EVENTS        uzduotis 9.

for(button of document.querySelectorAll('button')){
  button.addEventListener('click', avatar);
}

function avatar(){
  document.querySelector('#devintas > p').textContent = "Pants are an illusion and so is death.";
}

//          EVENTS        uzduotis 10.

addEventListener("mousemove", desimtas);

function desimtas(){
  document.querySelector('#desimtas > h1').textContent = 'Why are you running?';
}