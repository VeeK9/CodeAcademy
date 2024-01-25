document.querySelector('#testForma').addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);

  let vardas = event.target.elements.vardas.value;
  let nuotrauka = event.target.elements.nuotrauka.value;
  let amzius = event.target.elements.amzius.valueAsNumber;
  let dob = event.target.elements.dob.value;
  let kelniuDydis = event.target.elements.kelniuDydis.value;

  let muzikosStiliai = [];
  document
    .querySelectorAll('input[name="muzikosStiliai"]:checked')
    .forEach(el => muzikosStiliai.push(el.value));
  // let salisAplankyti = event.target.elements.salis.value;
  let salisAplankyti = [];
  for(el of event.target.elements.salis.children){
    el.selected && salisAplankyti.push(el.value);
  };

  console.log(kelniuDydis);
  console.log(vardas);
  console.log(nuotrauka);
  console.log(amzius);
  console.log(dob);
  console.log(muzikosStiliai);
  console.log(salisAplankyti);
});



// 1 uzduotis
document.querySelector('#sudetis')
  .addEventListener('submit', event => {
    event.preventDefault();
    // console.dir(event.target.elements.veiksmas);
    let pirmasSk = event.target.elements.sk1.valueAsNumber;
    let antrasSk = event.target.elements.sk2.valueAsNumber;
    switch(event.target.elements.veiksmas.value){
      case 'sudetis':
        event.target.elements.result.value = pirmasSk+antrasSk;
        break;
      case 'atimtis':
        event.target.elements.result.value = pirmasSk-antrasSk;
        break;
      case 'daugyba':
        event.target.elements.result.value = pirmasSk*antrasSk;
        break;
      case 'dalyba':
        event.target.elements.result.value = pirmasSk/antrasSk;
        break;
    }
    // console.log(pirmasSk, veiksmai, antrasSk);
});



// 2 uzduotis
let kainaText = document.createElement('h1', {once: true});
document.querySelector('#kinas').appendChild(kainaText);
document.querySelector('#kinas')
.addEventListener('submit', e => {
  let kaina = 6;
  e.preventDefault();
  let amzius = e.target.elements.amzius2.valueAsNumber;
  if(amzius < 16){
    console.log('Jaunuolis');
    kainaText.textContent = `Jaunuolio kaina: ${kaina/2}€`;
  } else if(amzius > 60){
    console.log('Senolis');
    kainaText.textContent = `Senolio kaina: ${(kaina*2/3).toFixed(2)}€`;
  } else{
    console.log('Suauges');
    kainaText.textContent = `Suaugusio kaina: ${kaina}€`;
  }
});



// 3 uzduotis
document.querySelector('#kariuomene')
  .addEventListener('submit', e => {
    e.preventDefault();
    let amzius = e.target.elements.amzius3.valueAsNumber;
    let arKriminalas = e.target.elements.kriminalas.checked;
    if(amzius > 18 && amzius < 30 && !arKriminalas){
      console.log('Kariuomene saukia');
    } else {
      console.log('nieko');
    }
});



// 4 uzduotis
let place = document.querySelector('#bonus');
document.querySelector('#bonusas')
  .addEventListener('submit', e => {
    e.preventDefault();
    let metai = e.target.elements.amzius4.valueAsNumber;
    if(10 <= metai && metai < 20){
      console.log('BONUSAS!');
      place.placeholder = 'Jusu bonusas 100€!';
    } else if(metai >= 20){
      console.log('BONUSAS PLIUS!');
      place.placeholder = `Jusu bonusas 200€!`;
    } else{
      console.log('SAD :(');
      place.placeholder = `Jusu bonusas 50€!`;
    }
});



// 5 uzduotis
document.querySelector('#leap')
  .addEventListener('submit', e => {
    e.preventDefault();
    let metai = e.target.elements.year.valueAsNumber;
    // if(metai%4 === 0){
    //   if(metai%100 === 0 && metai%400 !== 0){
    //     console.log('metai nekeliamieji');
    //   } else {
    //     console.log('metai yra keliamieji');
    //   };
    // } else {
    //   console.log('metai nekeliamieji');
    // }
    if(metai%4 !== 0 || (metai%100 === 0 && metai%400 !== 0)){
      console.log('metai nekeliamieji');
    } else {
      console.log('metai yra keliamieji');
    };
  });



// 6 uzduotis
let degrees = document.querySelector('#fahr');
document.querySelector('#temperature')
  .addEventListener('submit', e => {
    e.preventDefault();
    let celsius = e.target.elements.cels.valueAsNumber;
    let fahrenheit = ((celsius * (9/5)) + 32).toPrecision(3);
    degrees.value = fahrenheit;
});



// 7 uzduotis
document.querySelector('#newsletter')
.addEventListener('submit', e => {
  e.preventDefault();
  let email = e.target.elements.email.value;
  let news = e.target.elements.news.checked;
  if(!news){
    alert('Registracija nesekminga!');
  } else {
    console.log(`El. pastas ${email} sekmingai uzregistruotas.`)
    e.target.elements.testi.value = 'Uzsiregistravote.';
  }
});