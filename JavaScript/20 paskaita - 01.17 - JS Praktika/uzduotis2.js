let stringArray = ["Eren Yeager", "Mikasa Ackerman", "Levi Ackerman", "Connie Springer", "Armin Arlert", "Sasha Braus", "Erwin Smith", "Reiner Braun", "Zeke Yeager", "Hange Zoë"];
console.log(stringArray);

document.querySelector('button').addEventListener('click', generavimas, {once: true});


function generavimas(){
  for(let i = 1; i <= 4; i++){
    let item = document.createElement('li');
    item.textContent = stringArray.splice((Math.floor(Math.random()*(stringArray.length+1-i))), 1);
    document.querySelector('section > ol').appendChild(item);
    document.querySelector('button').textContent = "Pildyk sąrašą";
  }
}

document.querySelector('button').addEventListener('click', generavimas2);

function generavimas2(){
  let item = document.createElement('li');
  item.textContent = stringArray.splice((Math.floor(Math.random()*(stringArray.length))), 1);
  document.querySelector('section > ol').appendChild(item);
}

// console.log(Math.floor(Math.random()*(stringArray.length)));
// let sarasas = document.querySelector('section > ol');

// for(li of sarasas.children){
//   li.addEventListener('click', coloring);
// }

// function coloring(){
//   sarasas.children[2].style.color = 'red';
// }