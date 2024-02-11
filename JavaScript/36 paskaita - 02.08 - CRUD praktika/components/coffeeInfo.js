import Rating from "./Rating.js";
export default class CoffeeInfo{
  constructor({id, name, brand, country, region, type, notes, aroma, url, rtg, clicks}){
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.country = country;
    this.region = region;
    this.type = type;
    this.notes = notes;
    this.aroma = aroma;
    this.url = url;
    this.rtg = rtg;
    this.clicks = clicks;
    return this.render()
  }
  render(){
    const modal = document.createElement('dialog');
    modal.classList.add('infoDialog');

    const infoCard = document.createElement('div');
    infoCard.classList.add('infoCard');

    const image = document.createElement('img');
    image.setAttribute('src', this.url);

    const infoDiv = document.createElement('div');

    const name = document.createElement('h1');
    const nameText = document.createTextNode(this.name);
    name.appendChild(nameText);

    const brand = document.createElement('h3');
    const brandText = document.createTextNode(`By ${this.brand}`);
    brand.appendChild(brandText);

    const country = document.createElement('p');
    const countryText = document.createTextNode(`This coffee was roasted in ${this.country}. And the beans were harvested from ${this.region}.`);
    country.appendChild(countryText);

    
    const type = document.createElement('p');
    const typeText = document.createTextNode(`This coffee was made using ${this.type} coffee.`);
    type.appendChild(typeText);

    const flavour = document.createElement('p');
    if(this.notes){
      const flavourText = document.createTextNode(`Drinking this coffee gives you a taste of ${this.notes.toLowerCase()}.`);
      flavour.appendChild(flavourText);
    }

    if(this.aroma){
    flavour.textContent += ` And it has a distinct ${this.aroma.toLowerCase()} aroma.` 
    }

    modal.addEventListener('click', e => {
      const out = modal.getBoundingClientRect();
      if(
        e.clientX < out.left ||
        e.clientX > out.right ||
        e.clientY < out.top ||
        e.clientY > out.bottom
      ){ 
        modal.remove()
      };
    });
    document.addEventListener('keydown', e => {
      if(e.code === 'Escape'){
        modal.remove();
      }
    });

    const closeIcon = document.createElement('span');
    closeIcon.classList.add('bi', 'bi-x-circle');
    closeIcon.addEventListener('click', () => {
      modal.remove();
    });
    
    const rating = new Rating(this);

    infoDiv.append(name, brand, country, type, flavour, rating);
    infoCard.append(image, infoDiv, closeIcon);
    modal.append(infoCard);
    return modal;
  }
}