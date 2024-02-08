import DeleteDialog from "./DeleteDialog.js";
import EditDialog from "./EditDialog.js";

export default class School{
  constructor({id, pavadinimas:name, miestas:city, fakultetuKiekis:fNr}){
    this.id = id;
    this.name = name;
    this.city = city;
    this.fNr = fNr;
    return this.render();
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const heading = document.createElement('h1');
    const headingText = document.createTextNode(this.name);
    heading.appendChild(headingText);

    const par = document.createElement('p');
    const parText = document.createTextNode(`${this.name} yra isteigtas ${this.city} ir visoje salyje turi ${this.fNr} fakultetus.`);
    par.appendChild(parText);

    const removeIcon = document.createElement('span');
    removeIcon.classList.add('bi', 'bi-x-circle-fill');

    removeIcon.addEventListener('click', () => {
      const confirmModal = new DeleteDialog({
        id: this.id,
        el: cardDiv
      });
      document.body.append(confirmModal);
      confirmModal.showModal();
    })

    const editIcon = document.createElement('span');
    editIcon.classList.add('bi', 'bi-pencil-fill');

    editIcon.addEventListener('click', () => this.editFuncionality(heading, par));

    cardDiv.append(heading, par, removeIcon, editIcon);
    return cardDiv
  }
  editFuncionality(heading, par){
    const editModal = new EditDialog();
    document.body.appendChild(editModal);
    editModal.showModal();

    const form = document.createElement('form');

    const divName = document.createElement('div');
    const labelName = document.createElement('label');
    const labelNameText = document.createTextNode('Pavadinimas');
    labelName.setAttribute('for', 'name')
    labelName.appendChild(labelNameText);
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text')
    inputName.setAttribute('name', 'name')
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('value', this.name);
    divName.append(labelName, inputName);

    const divCity = document.createElement('div');
    const labelCity = document.createElement('label');
    const labelCityText = document.createTextNode('Miestas');
    labelCity.setAttribute('for', 'city');
    labelCity.appendChild(labelCityText);
    const selectCity = document.createElement('select');
    selectCity.setAttribute('name', 'city');
    selectCity.setAttribute('id', 'city');
    const cities = ["Vilnius","Kaunas","Klaipeda","Siauliai","Panevezys","Alytus","Ukmerge","Taurage","Utena"]
    cities.forEach(miestas => {
      const option = document.createElement('option');
      const optionText = document.createTextNode(miestas);
      option.appendChild(optionText);
      option.setAttribute('value', miestas);
      selectCity.appendChild(option);
      // miestas === this.city && (option.selected = true);
    });
    const index = cities.indexOf(this.city);
    selectCity.selectedIndex = index;
    divCity.append(labelCity, selectCity);

    const divfNr = document.createElement('div');
    const labelfNr = document.createElement('label');
    const labelfNrText = document.createTextNode('Fakultetu Kiekis');
    labelfNr.setAttribute('for', 'fNr');
    labelfNr.appendChild(labelfNrText);
    const inputfNr = document.createElement('input');
    inputfNr.setAttribute('type', 'number');
    inputfNr.setAttribute('name', 'fNr');
    inputfNr.setAttribute('value', this.fNr);
    inputfNr.setAttribute('id', 'fNr');
    divfNr.append(labelfNr, inputfNr);

  
    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit')
    submitInput.setAttribute('value', 'Redaguoti')



    form.append(divName, divCity, divfNr, submitInput);
    editModal.appendChild(form);

    form.addEventListener('submit', e => {
      e.preventDefault();

      const inputs = {
        pavadinimas: e.target.elements.name.value,
        fakultetuKiekis: e.target.elements.fNr.valueAsNumber,
        miestas: e.target.elements.city.value,
      };

      //    keiciame JSON'e
      fetch(`http://localhost:3000/school/${this.id}`, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(inputs)
      });
      //    keiciame korteles instancija
      this.name = inputs.pavadinimas;
      this.city = inputs.miestas;
      this.fNr = inputs.fakultetuKiekis;

      //    keiciame korteliu vaizda ekrane
      heading.textContent = this.name;
      par.textContent = `${this.name} yra isteigtas ${this.city} ir visoje salyje turi ${this.fNr} fakultetus.`;


      editModal.remove();
    });
  }
}