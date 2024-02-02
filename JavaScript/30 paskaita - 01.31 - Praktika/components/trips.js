export default class Trips{
  constructor({name, location, length, price, image}){
    this.name = name;
    this.location = location;
    this.length = length;
    this.price = price;
    this.image = image;
    return this.render();
  }
  render(){
    const tripCard = document.createElement('div');
    tripCard.classList.add('tripCard');

    const heading = document.createElement('h3');
    const headingText = document.createTextNode(this.name);
    heading.appendChild(headingText);
    
    tripCard.append(heading);
    tripCard.setAttribute('style', `background-image: url(${this.image})`);
    
    const extendedName = document.createElement('h1');
    extendedName.textContent = `${this.name}, ${this.location}`;
    
    const extended = document.createElement('div');
    extended.classList.add('nematoma');
    const extendedCard = document.createElement('div');
    extendedCard.classList.add('extendedcard');
    const image = document.createElement('img');
    image.setAttribute('src', this.image);
    image.setAttribute('width', '500px');
    extendedCard.append(image, extendedName);
    
    
    extended.appendChild(extendedCard);


    document.querySelector('body').appendChild(extended);
    
    tripCard.addEventListener('click', e => {
      extended.classList.add('extended');
      extended.classList.remove('nematoma');
      extended.addEventListener('click', e => {
        extended.classList.add('nematoma');
        extended.classList.remove('extended');
      })
    });

    return tripCard;
  }
}