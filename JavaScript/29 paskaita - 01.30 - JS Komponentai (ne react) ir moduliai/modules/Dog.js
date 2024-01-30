import Par from "./paragraphs.js";

export default class Dog{
  //       1 budas (destrukturizavimas)
  // constructor({veisle, vardas, spalva, amzius, svoris, lytis, cipuotas, nuotrauka}){
  //   this.veisle = veisle;
  //   this.vardas = vardas;
  //   this.spalva = spalva;
  //   this.amzius = amzius;
  //   this.svoris = svoris;
  //   this.lytis = lytis;
  //   this.cipuotas = cipuotas;
  //   this.nuotrauka = nuotrauka;
  // }
  //      2 budas
  // constructor(props){
  //   this.props = props;
  // }
  // metodas(){
  //   return this.props.amzius;
  // }
  //      3 budas
  constructor({veisle, vardas, spalva, amzius, svoris, lytis, cipuotas, nuotrauka, ...rest}){
    this.veisle = veisle;
    this.vardas = vardas;
    this.spalva = spalva
    this.amzius = amzius;
    this.svoris = svoris;
    this.lytis = lytis;
    this.cipuotas = cipuotas;
    this.nuotrauka = nuotrauka;
    this.rest = rest;
    return this.render();
  }
  render(){
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const pavadinimas = document.createElement('h1');
    const pavadinimasText = document.createTextNode(`${this.veisle} vardu ${this.vardas}`);
    pavadinimas.appendChild(pavadinimasText);
    // divCard.appendChild(pavadinimas);

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);
    image.setAttribute('alt', `Suo ${this.veisle}`);
    // divCard.appendChild(image);

    const bendraInfo = document.createElement('div');
    bendraInfo.classList.add('dogInfoGrid');

    const amzius = new Par({ tekstas: `${this.amzius} metu amziaus`})
    // const amzius = document.createElement('p');
    // const amziusText = document.createTextNode(`${this.amzius} metu amziaus`);
    // amzius.appendChild(amziusText);

    const svoris = new Par({ tekstas: `Sveria ${this.svoris}kg.`})
    // const svoris = document.createElement('p');
    // const svorisText = document.createTextNode(`Sveria ${this.svoris}kg.`);
    // svoris.appendChild(svorisText);

    const cipuotas = document.createElement('p');
    const cipuotasText = document.createTextNode(`Cipuotas? `);
    const cipuotasIcon = document.createElement('span');
    cipuotasIcon.classList.add('bi');
    cipuotasIcon.classList.add(this.cipuotas ? 'bi-check-circle' : 'bi-x-circle');
    cipuotas.append(cipuotasText, cipuotasIcon);

    const lytis = document.createElement('p');
    const lytisText = document.createTextNode(this.lytis);
    const lytisIcon = document.createElement('span');
    lytisIcon.classList.add('bi');
    lytisIcon.classList.add(this.lytis === 'patinas' ? 'bi-gender-male' : this.lytis === 'patele' ? 'bi-gender-female' : 'bi-question-circle');
    lytis.append(lytisText, lytisIcon);

    const pet = document.createElement('h1');
    const petAmountEl = document.createElement('span');
    petAmountEl.textContent = 0;
    const petText0 = document.createTextNode(`Was pet `);
    const petText1 = document.createTextNode(` times today`);
    pet.append(petText0, petAmountEl, petText1);

    image.addEventListener('click', e => {
      petAmountEl.textContent = parseInt(petAmountEl.textContent)+1;
      // const currNr = e.target.nextElementSibling.nextElementSibling.children[0].textContent*1;
      // e.target.nextElementSibling.nextElementSibling.children[0].textContent = currNr+1;
  });

    bendraInfo.append(amzius, svoris, cipuotas, lytis);
    divCard.append(pavadinimas, image, bendraInfo, pet);
    return divCard;
  }
}

export const graziausiVardai = ['Pikachu', 'So', 'Kapucinas', 'Patriotas'];

// export default Dog;