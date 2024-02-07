export default class Book{
  constructor({title, author, year, url, info, id, hasBeenRead}){
    this.title = title;
    this.author = author;
    this.year = year;
    this.url = url;
    this.info = info;
    this.id = id;
    this.hasBeenRead = hasBeenRead;
    return this.render();
  }
  render(){

    const card = document.createElement('div');
    card.classList.add('bookCard');
    
    //      Korteles elementai
    const title = document.createElement('h1');
    const titleText = document.createTextNode(this.title);
    title.appendChild(titleText);

    const author = document.createElement('h4');
    const authorText = document.createTextNode(`By ${this.author}`);
    author.appendChild(authorText);

    const image = document.createElement('img');
    image.setAttribute('src', this.url);
    image.setAttribute('alt', `the cover of ${this.title}`);

    const year = document.createElement('p');
    const yearText = document.createTextNode(`First published in ${this.year}`);
    year.appendChild(yearText);

    //      'Perskaityta' fonas
    const hasBeenReadCard = document.createElement('div');

    //      'Perskaityta' mygtukas
    const readButton = document.createElement('button');
    readButton.classList.add('read');

    this.hasBeenRead ? 
      (readButton.classList.add('hadRead'),hasBeenReadCard.classList.add('hasBeenRead'))
      : readButton.classList.add('notRead');

    readButton.addEventListener('click', e => {
      fetch(`http://localhost:3000/books/${this.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          hasBeenRead: this.hasBeenRead = !this.hasBeenRead
        })
      })
      hasBeenReadCard.classList.toggle('hasBeenRead');
      readButton.classList.toggle('notRead');
      readButton.classList.toggle('hadRead');
    })

    //      Istrynimo mygtukas
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash');
    const trashIcon = document.createElement('span');
    trashIcon.classList.add('bi');
    trashIcon.classList.add('bi-trash');
    trashButton.appendChild(trashIcon);

    trashButton.addEventListener('click', e => {
      fetch(`http://localhost:3000/books/${this.id}`, {
        method: "DELETE"
      })
      card.remove();
    })


    card.append(title, author, image, year, readButton, trashButton, hasBeenReadCard);

    //      modalas
    
    // const modal = document.createElement('dialog');
    // modal.classList.add('modal');

    // const modalText = document.createTextNode(this.info);

    // const closeModal = document.createElement('button');
    // const closeModalText = document.createTextNode('close');
    // closeModal.appendChild(closeModalText);

    // modal.append(modalText, closeModal);

    // image.addEventListener('click', () => {
    //   document.querySelector('#books').appendChild(modal);
    //   modal.showModal();
    // })
    // closeModal.addEventListener('click', () => {
    //   modal.close();
    //   modal.remove();
    // })
    
    image.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      document.querySelector('.modal > div').textContent = this.info;
      const closeModal = document.querySelector('.close');
      modal.showModal();
      closeModal.addEventListener('click', () => {
        modal.close();
      })
    })

    return card;
  }
}