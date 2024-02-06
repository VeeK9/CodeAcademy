import Par from "../../29 paskaita - 01.30 - JS Komponentai (ne react) ir moduliai/modules/paragraphs.js";

export default class Flat{
  constructor({image, city, price, description}){
    this.image = image;
    this.city = city;
    this.price = price;
    this.info = description;
    return this.render()
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('flatCard');

    const picture = document.createElement('img');
    picture.setAttribute('src', this.image);
    picture.setAttribute('alt', 'Flat picture');

    const price = new Par({tekstas: `Kaina: ${this.price}`});
    const city = new Par({tekstas: `Miestas: ${this.city}`});
    const info = new Par({tekstas: this.info});

    cardDiv.append(picture, price, city, info);
    return cardDiv;
  }
}