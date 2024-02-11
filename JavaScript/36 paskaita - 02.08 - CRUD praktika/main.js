import Coffee from "./components/coffee.js";

document.querySelector('#coffeeFormOpen').addEventListener('click', () => {
  document.querySelector('#coffeeForm').showModal();
});

document.querySelector('#closeForm').addEventListener('click', () => {
  document.querySelector('#coffeeForm').close();
});

document.querySelector('#coffeeForm > form').addEventListener('submit', e => {
  e.preventDefault();
  const newCoffee = {
    id: String(Number(new Date())),
    name: e.target.elements.name.value,
    brand: e.target.elements.brand.value,
    countryRoastedIn: e.target.elements.roastedIn.value,
    region: e.target.elements.region.value,
    typeOfBeans: e.target.elements.type.value,
    notes: e.target.elements.notes.value,
    aroma: e.target.elements.aroma.value,
    url: e.target.elements.url.value,
    rtg: 0,
    clicks: 0
  }

  fetch('http://localhost:3000/coffee', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newCoffee)
  });

  const coffeeCard = new Coffee(newCoffee);
  document.querySelector('#coffees').prepend(coffeeCard);

  e.target.reset();
  document.querySelector('#coffeeForm').close();
})

fetch('http://localhost:3000/coffee')
  .then(res => res.json())
  .then(coffees => {
    coffees.forEach(coffee => {
      const coffeeCard = new Coffee(coffee);
      document.querySelector('#coffees').prepend(coffeeCard);
    });
  })

