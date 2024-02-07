import Book from "./components/book.js";

fetch('http://localhost:3000/books')
  .then(res => res.json())
  .then(data => {
    data.forEach(book => {
      const newBook = new Book(book);
      document.querySelector('#books > div').prepend(newBook);
    })
  })

  document.querySelector('#addBook').addEventListener('click', () => {
    document.querySelector('#formDialog').showModal();
  })
  document.querySelector('.closeForm').addEventListener('click', () => {
    document.querySelector('#formDialog').close();
  })

  document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    const book = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      year: e.target.elements.year.valueAsNumber,
      url: e.target.elements.url.value,
      info: e.target.elements.info.value,
      hasBeenRead: false,
      id: String(Number(new Date()))
    }

    fetch('http://localhost:3000/books', {
      method: "POST",
      header: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(book)
    });

    const newBook = new Book(book);
    document.querySelector('#books > div').prepend(newBook);

    e.target.reset();
    document.querySelector('#formDialog').close();
  })