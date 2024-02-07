export default class Movie{
  constructor({leidimoData, nuotrauka, pavadinimas, id}){
    this.photo = nuotrauka;
    this.year = leidimoData;
    this.name = pavadinimas;
    this.id = id;
    return this.render()
  }
  render(){
    const card = document.createElement('div');
    card.classList.add('movieCard');

    const title = document.createElement('h1');
    const titleText = document.createTextNode(this.name);
    title.appendChild(titleText);

    const image = document.createElement('img');
    image.setAttribute('src', this.photo);
    image.setAttribute('alt', `${this.name} poster`);

    const year = document.createElement('p');
    const yearText = document.createTextNode(this.year);
    year.appendChild(yearText);

    const trashButton = document.createElement('button');
    const trashText = document.createTextNode('trinti');
    trashButton.appendChild(trashText);
    trashButton.classList.add('trash');

    trashButton.addEventListener('click', e => {
      fetch(`http://localhost:3000/filmai/${this.id}`, {
        method: "DELETE"
      })
      card.remove();
    })

    card.append(title, image, year, trashButton);
    return card;
  }
}