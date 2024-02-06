import User from "./components/userCard.js";
import Flat from "./components/flatCard.js";

// console.log('pries')

fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    // console.log(data.results[0])
    const card = new User(data.results[0]);

    document.querySelector('#randomUser').appendChild(card);
  })
  .catch((error)=>{console.log(error)})
  // .finally(() => {console.log('baigesi fetchas')});

// console.log('po');

const fetchISS = () => {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(res => res.json())
  .then(data => {
    document.querySelector('#lat').textContent = data.latitude.toFixed(3);
    document.querySelector('#long').textContent = data.longitude.toFixed(3);
  });
};

  // setInterval(fetchISS, 1000)

addEventListener('load', fetchISS)

// document.querySelector('#updateISS').addEventListener('click', fetchISS);
document.querySelector('#updateISS')
  .addEventListener('mouseenter', e => {
    document.querySelector('#updateISS')
    .setAttribute('style', `left: ${Math.ceil(Math.random()*500+200)}px; top: ${Math.ceil(Math.random()*500+200)}px`);
});

const fetchFlats = () => {
  fetch('https://robust-safe-crafter.glitch.me/')
  .then(res => res.json())
  .then(data => {
    data.forEach(flat => {
      const newFlat = new Flat(flat);
      document.querySelector('#flats').appendChild(newFlat);
    });
  });
};

// const fetchPost = (flat) => {
//   fetch('https://robust-safe-crafter.glitch.me/', {
//     method: 'POST',
//     body: JSON.stringify(flat),
//     headers: {'Content-type': 'application/json',}
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
// }

const kaltanenaiFlat = {
  image: "https://media.etaplius.lt/6246dbd785c4d/20220310-110443.jpg",
  city: "Kaltanėnai",
  price: 1000,
  description: "One of the smallest flats in Kaltanėnai, in a middle of nowhere."
};

fetchFlats();
// fetchPost(kaltanenaiFlat);
