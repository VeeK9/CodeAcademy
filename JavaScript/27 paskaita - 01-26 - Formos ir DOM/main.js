document.querySelector('#vardoTask').addEventListener('submit', e => {
  e.preventDefault();
  const vardas = e.target.elements.vardas.value.trim()+' ';
  const kartai = e.target.elements.kartai.valueAsNumber;
  const atsLaukas = e.target.nextElementSibling;
  atsLaukas.textContent = '';
  for(i = 1; i <= kartai; i++){
    const par = document.createElement('p');
    const parText = document.createTextNode(vardas.repeat(i).trimEnd());
    par.appendChild(parText);
    atsLaukas.appendChild(par);
  }
  e.target.reset();
});

// tel taisymas

document.querySelector('#telTaisymas').addEventListener('submit', e => {
  e.preventDefault();
  const el = e.target.elements;
  const data = {
    vardas: el.asmuo.value,
    kontaktas: el.kontaktas.value,
    modelis: el.modelis.value,
    foto: el.nuotrauka.value,
    garantija: el.garantija.checked,
    draudimas: el.draudimas.checked,
    gedimas: el.gedimas.value,
    lokacija: el.lokacija.value,
    dataLaikas: el.dataLaikas.value
  };

const cardDiv = document.createElement('div');
cardDiv.classList.add('telCard');

const lokacija = document.createElement('h2');
const lokacijaText = document.createTextNode(data.lokacija);
lokacija.appendChild(lokacijaText);

const vardas = document.createElement('p');
const vardasText = document.createTextNode(`${data.vardas}, ${data.kontaktas}`);
vardas.appendChild(vardasText);

const atnesti = document.createElement('p');
const atnestiText = document.createTextNode(`Data: ${data.dataLaikas.slice(0,10)} Laikas: ${data.dataLaikas.slice(11)}`);
atnesti.appendChild(atnestiText);

const modelis = document.createElement('h3');
const modelisText = document.createTextNode(data.modelis);
modelis.appendChild(modelisText);

const aprasymas = document.createElement('p');
const aprasymasText = document.createTextNode(data.gedimas);
aprasymas.appendChild(aprasymasText);

const image = document.createElement('img');
image.setAttribute('src', data.foto);
image.setAttribute('alt', 'sugedusio telefono nuotrauka');

const draudimasIrGarantija = document.createElement('p');
const draudimas = document.createElement('span');
const draudimasText = document.createTextNode('Draudimas');
draudimas.appendChild(draudimasText);
draudimas.classList.add(data.draudimas ? 'greenText' : 'redText');

const garantija = document.createElement('span');
const garantijaText = document.createTextNode('Garantija');
garantija.appendChild(garantijaText);
garantija.classList.add(data.garantija ? 'greenText' : 'redText');

draudimasIrGarantija.append(draudimas, garantija);

cardDiv.append(lokacija, vardas, atnesti, modelis, aprasymas, aprasymas, image, draudimasIrGarantija);

document.querySelector('#phoneContainer').appendChild(cardDiv);
});




// 1) Sukurkite sekciją su forma:
//   1.1) Kurioje vartotojas gali įkelti:
//     1.1.1) Nuotrauką
//     1.1.2) Pavadinimą
//     1.1.3) Aprašymą
//     1.1.4) Datą (optional)
//     1.1.5) Lokacija (optional)
//   1.2 optional) Stilizuoti formą (minimaliai)
//   1.3) Paspaudus "submit" - žemiau formos, turi būti sukurta kortelė su formoje įvestais duomenimis. (kortelė minimaliai stilizuota)
//   1.4 extra) Galimybė vartotojui pasirinkti kortelės dizainą. (spalvos tema, elementų išdėstymas)


document.querySelector('#uzd1form').addEventListener('submit', e => {
  e.preventDefault();
  const el = e.target.elements;
  const data = {
    photo: el.photo.value,
    name: el.name.value,
    description: el.description.value,
    date: el.date.value
  };
  const card = document.createElement('div');
  card.classList.add('uzd1card');

  const image = document.createElement('img');
  image.setAttribute('src', data.photo);
  image.setAttribute('alt', 'Pasvaiste Lietuvoje');
  
  const description = document.createElement('p');
  description.textContent = data.description;

  const name = document.createElement('h3');
  name.textContent = data.name;
  
  const date = document.createElement('h5');
  date.textContent = data.date;
  
  card.append(image, description, name, date);
  
  document.querySelector('#uzd1wrapper').prepend(card);
});

// 2) JS'u sukurkite x stulpelių ir y eilučių (x ir y nurodomas formoje) lentelę (table) vartotojui pateikus formą.

document.querySelector('#uzd2form').addEventListener('submit', e => {
  e.preventDefault();
  const x = e.target.elements.x.valueAsNumber;
  const y = e.target.elements.y.valueAsNumber;
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.style.borderCollapse = 'collapse';
  for(let i = 1; i <= y; i++){
    const tr = document.createElement('tr');
    for(let k = 1; k <= x; k++){
      const td = document.createElement('td');
      td.textContent = `${k}.${i}`;
      td.style.color = '#e2e2e28e';
      td.style.border = '1px solid black';
      td.style.padding = '5px';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
  }
  e.target.reset();
  document.querySelector('#uzd2').append(table);
})

// 3) Sukurkite formą su select ir option's. Pateikus formą - išimkite pažymėtą opciją iš select'o.

document.querySelector('#uzd3form').addEventListener('submit', e => {
  e.preventDefault();
  const visited = document.querySelector('select[name="visited"]');
  for(salis of e.target.elements.notVisited.children){
    // salis.selected && e.target.elements.notVisited.remove(salis);
    salis.selected && visited.appendChild(salis);
    salis.selected = false;
  }
  console.dir(visited);
  console.dir(e.target.elements.notVisited);
})

// 4) Sukurkite formą, kurioje užpildžius x/y/z number laukelius ir pasirinkus atitinkamą opciją iš select'o apskaičiuokite 2D arba 3D (priklausomai ar z paliktas tušias/0 ar duotas dydis) keturkampio Plotą, Perimetrą, Paviršiaus plotą arba Turį.
//   4.1 EXTRA) Naudojant Canvas atkurti vizualų figurų vaizdą.

const atsakymas = document.createElement('h4');
const atsakymas1 = document.createElement('h4');
const atsakymas2 = document.createElement('h4');
const canvas = document.querySelector("#rezultatas");
const pencil = canvas.getContext("2d");

console.dir(document.querySelector('#uzd4form'));
document.querySelector('#uzd4form').addEventListener('submit', e => {
  e.preventDefault();
  // console.dir(e.target.elements);
  const plotis = e.target.elements.plotis.valueAsNumber;
  const aukstis = e.target.elements.aukstis.valueAsNumber;
  const gylis = e.target.elements.gylis.valueAsNumber;
  const result = e.target.elements.result.value;

  switch(result) {
    case "plotas":
      atsakymas.textContent = `Plotas = ${plotis*aukstis}`;
      break;
    case "perimetras":
      atsakymas.textContent = `Perimetras = ${(plotis+aukstis)*2}`;
      break;
    case "pavirsiausPlotas":
      atsakymas.textContent = `Viso pavirsiaus plotas = ${plotis*aukstis*2+plotis*gylis*2+aukstis*gylis*2}`;
      if(gylis <= 0 || isNaN(gylis)) {
        atsakymas.textContent = `Plotas = ${plotis*aukstis}`
      }
      break;
    case "turis":
      atsakymas.textContent = `Turis = ${plotis*aukstis*gylis}`;
      if(gylis <= 0 || isNaN(gylis)) {
        atsakymas.textContent = `2D objektai neturi turio!`
      }
      break;
    }
  document.querySelector('#uzd4form').appendChild(atsakymas);
    
  canvas.setAttribute('width', '1000');
  canvas.setAttribute('height', '1000');
  const xAsis = 40;
  let yAsis = gylis/2 + 40;
  if(gylis <= 0 || isNaN(gylis)) {
    yAsis = aukstis+40;
  } 
  pencil.fillStyle = "lightgray";
  pencil.fillRect(xAsis, yAsis, plotis*2, aukstis*2);
  if(!isNaN(gylis) && gylis != 0){
    pencil.fillStyle = "darkgray";
    pencil.beginPath();
    pencil.moveTo(xAsis, yAsis);
    pencil.lineTo(xAsis + plotis*2, yAsis);
    pencil.lineTo(xAsis + plotis*2 + gylis, yAsis - gylis);
    pencil.lineTo(xAsis + gylis, yAsis - gylis);
    pencil.closePath();
    pencil.fill();
    pencil.fillStyle = "gray";
    pencil.beginPath();
    pencil.moveTo(xAsis + plotis*2, yAsis);
    pencil.lineTo(xAsis + plotis*2, yAsis + aukstis*2);
    pencil.lineTo(xAsis + plotis*2 + gylis, yAsis + aukstis*2 - gylis);
    pencil.lineTo(xAsis + plotis*2 + gylis, yAsis - gylis);
    pencil.closePath();
    pencil.fill();
  }
});


// 5 extra) Padaryti formą, kurioje įvedus duomenis (nuo, iki) ir paspaudus mygtuką "vykdyti", žemiau būtų sukurta grupė div'ų, kuriuose yra atvaizduojamas tekstas arba skaičius - FizzBuzz metodas nuo duotojo parametro iki duotojo parametro.

// 6 extra) Padaryti formą, kurioje įvedus duomenis (iki) ir paspaudus mygtuką "vykdyti", žemiau būtų sukurta grupė div'ų, kuriuose yra atvaizduoti tik pirminiai skaičiai iki duotojo parametro.