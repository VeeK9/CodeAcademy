import User from "./components/userCard.js";

console.log('pries')

fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0])
    const card = new User(data.results[0]);

    document.querySelector('#randomUser').appendChild(card);
  })
  .catch((error)=>{console.log(error)})
  .finally(() => {console.log('baigesi fetchas')});

console.log('po')