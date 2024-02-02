import Image from "./components/image.js";
import Paragraph from "./components/paragraph.js";
import Heading from "./components/heading.js";
import El from "./components/element.js";
import List from "./components/lists.js";
import Select from "./components/select.js";
import Name from "./components/names.js";
import Trips from "./components/trips.js";
import data from "./components/tripsData.js";

const imageContainer = document.querySelector('#task1_1 > div');

const ed = new Image({
  attributes: [
    {
      name: 'src',
      value: 'https://media.tenor.com/BboKLr2YZsoAAAAe/ed-edd-n-eddy-cartoon-character.png'
    },{
      name: 'alt',
      value: `Ed from "Ed, Edd and Eddy"`
    },{
      name: 'height',
      value: '200px'
    }
  ]
});

const jonny = new Image({
  attributes: [
    {
      name: 'src',
      value: 'https://static.wikia.nocookie.net/edwikia/images/9/9a/Jonny2x4.png'
    },{
      name: 'alt',
      value: `Jonny from "Ed, Edd and Eddy"`
    },{
      name: 'class',
      value: 'remeliai padding1 dydisL'
    }
  ]
})

imageContainer.append(ed, jonny);

const parContainer = document.querySelector('#task1_2 > div');

const lorem5 = new Paragraph({
  tekstas: "Lorem ipsum dolor sit amet.",
  attributes: [
    {
      name: 'style',
      value: 'font-size: 24px'
    }
  ]
});

const lorem40 = new Paragraph({
  tekstas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio saepe, recusandae velit molestiae quam impedit excepturi et blanditiis ratione, est veritatis, distinctio esse cumque dicta aut possimus non illum praesentium quidem! Reiciendis quasi vero fugit doloribus at repellat, molestias eligendi.",
  attributes: [
    {
    name: 'class',
    value: 'padding1'
    },{
      name: 'style',
      value: 'color: red'
    }
  ]
});

parContainer.append(lorem5, lorem40);

const headingContainer = document.querySelector('#task1_3 > div');

const h1pvz1 = new Heading({
  type: "h1",
  tekstas: "Pirma Antraste",
  attributes: [
    {
      name: 'class',
      value: 'margin1'
    }
  ]
});

const h1pvz2 = new Heading({
  type: "h1",
  tekstas: "Antra antraste",
  attributes: [
    {
      name: 'class',
      value: 'redText'
    }
  ]
});

const h4pvz = new Heading({
  type: 'h4',
  tekstas: 'h4 Antraste',
  attributes: [
    {
      name: 'style',
      value: 'font-weight: 100'
    },{
      name: 'class',
      value: 'remeliai padding1 margin1 bgYellow'
    }
  ]
});

headingContainer.append(h1pvz1, h1pvz2, h4pvz);


const elementContainer = document.querySelector('#task1_4 > div');

const el0 = new El({
  tag: 'img',
  attributes: [
    {
      name: 'src',
      value: 'https://static.wikia.nocookie.net/rickandmorty/images/4/41/Pickle_rick_transparent_edgetrimmed.png'
    },{
      name: 'alt',
      value: 'Pickle Rick'
    }
  ]
});

const el1 = new El({
  tag: 'div',
  tekstas: "Cia yra div'as",
  attributes: [
    {
      name: 'class',
      value: 'margin1 bgYellow'
    }
  ]
});

const el2 = new El ({
  tag: 'span',
  tekstas: "Cia yra span'as",
  attributes: [
    {
      name: 'style',
      value: 'color: blue; padding: 5px;'
    },{
      name: 'class',
      value: 'remeliai'
    }
  ]
});

elementContainer.append(el0, el1, el2);

const listContainer = document.querySelector('#task2 > div');

const sarasas0 = new List({
  listType: 'ol',
  attributes: [
    {
      name: 'class',
      value: 'sarasas'
    }
  ],
  listItems: [
    {
      tekstas: 'pirmas saraso irasas',
      attributes: [
        {
          name: 'class',
          value: 'redText'
        }
      ]
    },{
      tekstas: 'antras saraso irasas',
    }
  ]
});

const sarasas1 = new List({
  listType: 'ul',
  listItems: [
    {
      tekstas: 'ul listo irasas nr.1'
    },{
      tekstas: 'ul listo irasas nr.2'
    },{
      tekstas: 'ul listo irasas nr.3'
    }
  ]
})

listContainer.append(sarasas0, sarasas1);

const selectContainter = document.querySelector('#task3 > form');

const select0 = new Select({
  label: 'pirmas selectas',
  options: [
    {
      option: 'pirmas optionas'
    },{
      option: 'antras optionas',
    },{
      option: 'trecias optionas'
    }
  ]
});

const select1 = new Select({
  label: 'antras selectas',
  attributes: [
    {
      name: 'for',
      value: 'select1'
    }
  ],
  options: [
    {
      option: 'pirmas optionas'
    },{
      option: 'antras optionas',
      attributes: [
        {
          name: 'name',
          value: 'teisingas'
        }
      ]
    },{
      option: 'trecias optionas'
    }
  ]
});

selectContainter.append(select0, select1);

document.querySelector('#uzd2_1 > form').addEventListener('submit', e => {
  e.preventDefault();
  const fullName = e.target.elements.fullName.value.trim().split(' ');
  let [vardas, pavarde] = fullName
  vardas = vardas[0].toUpperCase() + vardas.slice(1).toLowerCase();
  pavarde = pavarde[0].toUpperCase() + pavarde.slice(1).toLowerCase();

  const naujasVardas = new Name(vardas, pavarde);
});

const tripsContainer = document.querySelector('#uzd2_2 > div');
tripsContainer.classList.add('tripsContainer');

const trips = data.map(trip => new Trips(trip));
trips.forEach(trip => tripsContainer.appendChild(trip));

document.querySelector('#uzd2_2 > form').addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements);
  const tripInfo = {
    name: e.target.elements.destination.value,
    location: e.target.elements.location.value,
    length: e.target.elements.durationTime.valueAsNumber + ' ' + e.target.elements.duration.value,
    price: e.target.elements.price.valueAsNumber,
    image: e.target.elements.image.value,
  }
  
  const trip = new Trips(tripInfo);

  tripsContainer.prepend(trip);
});