// 0) Stilizavimą palikit pabaigai. Kai atliksite visas užduotis, grįžkite prie kiekvienos stilizavimo dalies.

// 1) Naudodamiesi tasksData[0] duomeninis atlikite šiuos veiksmus:
// 	1.1) JS'u 1 sekcijoje sukurkite antraštę.
// 	1.2) JS'u 1 sekciją papildykite paragrafu su tekstu.
// 	1.3) JS'u 1 sekciją papildykite paveikslėliu.
// 	1.4) JS'u 1 sekciją stilizuokite priskirdami klases.

const section1 = document.querySelector('#pirma');
const title1 = document.createElement('h1');
title1.textContent = tasksData[0].title;
const par1 = document.createElement('p');
par1.textContent = tasksData[0].paragraph;
const image1 = document.createElement('img');
image1.setAttribute('src', tasksData[0].image);
section1.append(title1, par1, image1);


// 2) Naudodamiesi tasksData[1] duomenimis atlikite šiuos veiksmus:
// 	2.1) JS'u 2 sekcijoje sukurkite antraštę.
//   2.2) JS'u 2 sekcijoje po antrašte sukurkite visus paveiksliukus.
// 	2.3) JS'u 2 sekciją stilizuokite priskirdami klases.

const section2 = document.querySelector('#antra');
const title2 = document.createElement('h1');
title2.textContent = tasksData[1].title;
section2.appendChild(title2);
const container2 = document.createElement('div');
tasksData[1].images.forEach(painting => {
  let figure2 = document.createElement('figure');
  let image2 = document.createElement('img');
  image2.setAttribute('src', painting);
  figure2.appendChild(image2);
  container2.appendChild(figure2);
})
section2.appendChild(container2);


// 3) Naudodamiesi tasksData[2] duomenimis atlikite šiuos veiksmus:
// 	3.1) JS'u 3 sekcijoje sukurkite bendrą antraštę.
// 	3.2) JS'u 3 sekciją papildykite paveiksliukų pavadinimais ir paveiksliukais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
// 	3.3) JS'u 3 sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
// 	3.4) JS'u 3 sekciją stilizuokite priskirdami klases.

const section3 = document.querySelector('#trecia');
const title3 = document.createElement('h1');
title3.textContent = tasksData[2].title;
section3.appendChild(title3);
const container3 = document.createElement('div');
container3.classList.add('container3')
tasksData[2].works.forEach(painting => {
  const card3 = document.createElement('div');
  card3.classList.add('card3')
  let figure3 = document.createElement('figure');
  let image3 = document.createElement('img');
  image3.setAttribute('src', painting.image);
  figure3.appendChild(image3);
  let title3a = document.createElement('h3');
  title3a.textContent = painting.title;
  let par3 = document.createElement('p');
  par3.textContent = painting.paragraph;
  card3.append(figure3, title3a, par3);
  container3.appendChild(card3);
})
section3.appendChild(container3);

// 4 extra)  Naudodamiesi tasksData[3] atlikite šiuos veiksmus:
//   4) JS'u 4 sekcijoje sukurkite filmų aprašus. Viską stilizuokite. (laisvai naudokite duotus duomenis. Dalies duomenų galite nepanaudoti. Pavyzdį kaip pateikti informaciją puslapyje galite imti iš: "https://www.imdb.com/title/tt1431045/?ref_=nv_sr_srsg_0")



// 5 extra) Sukurti funkcionalumą, kuris slėptų/rodytų sekcijose atvaizduojamą informaciją. (žiūrėti paveikslėlį images/hideShow.PNG) (querySelectorAll - grąžina "masyvą" -> kurti button -> suteikti funkcionalumą)

document.querySelectorAll('section').forEach(section => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode('Slepti');
  button.appendChild(buttonText);
  button.classList.add('sleptiRodyti');
  button.addEventListener('click', e => {
    [...section.children].forEach((el, i, arr) => {
      if(i !== arr.length-1){
        if(e.target.textContent === 'Slepti'){
          el.style.display = 'none';
        } else {
          el.style.display = '';
        }
      }
    });
    if(e.target.textContent === 'Slepti'){
      e.target.textContent = 'Rodyti';
    } else {
      e.target.textContent = 'Slepti';
    }
  });
;  section.appendChild(button);
})