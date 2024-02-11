import CoffeeInfo from "./coffeeInfo.js";
import EditDialog from "./EditDialog.js";
import DeleteDialog from "./DeleteDialog.js";

export default class Coffee{
  constructor({id, name, brand, countryRoastedIn:country, region, typeOfBeans:type, notes, aroma, url, rtg, clicks}){
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.country = country;
    this.region = region;
    this.type = type;
    this.notes = notes;
    this.aroma = aroma;
    this.url = url;
    this.rtg = rtg;
    this.clicks = clicks;
    return this.render();
  }
  render(){
    const card = document.createElement('div');
    card.classList.add('coffeeCard');
    
    const image = document.createElement('img');
    image.setAttribute('src', this.url);

    image.addEventListener('click', e => {
      const infoModal = new CoffeeInfo(this);
      document.body.append(infoModal);
      infoModal.showModal();
    });

    const bottomDiv = document.createElement('div');

    const name = document.createElement('h3');
    const nameText = document.createTextNode(this.name);
    name.appendChild(nameText);

    const region = document.createElement('h5');
    const regionText = document.createTextNode(this.region);
    region.appendChild(regionText);

    const removeIcon = document.createElement('span');
    removeIcon.classList.add('bi', 'bi-x-circle-fill');

    removeIcon.addEventListener('click', () => {
      const confirmModal = new DeleteDialog({
        id: this.id,
        card: card
      });
      document.body.append(confirmModal);
      confirmModal.showModal();
    })

    const editIcon = document.createElement('span');
    editIcon.classList.add('bi', 'bi-pencil-fill');

    editIcon.addEventListener('click', () => this.edit(name, region));

    bottomDiv.append(name, region);
    card.append(image, bottomDiv, removeIcon, editIcon);
    return card;
  }
  edit(name, region){
    const editModal = new EditDialog();
    document.body.appendChild(editModal);
    editModal.showModal();

    const form = document.createElement('form');
    form.classList.add('inputForm');

    const divName = document.createElement('div');
    const labelName = document.createElement('label');
    const labelNameText = document.createTextNode('Name');
    labelName.setAttribute('for', 'name');
    labelName.appendChild(labelNameText);
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('value', this.name);
    divName.append(labelName, inputName);

    const divBrand = document.createElement('div');
    const labelBrand = document.createElement('label');
    const labelBrandText = document.createTextNode('Brand');
    labelBrand.setAttribute('for', 'Brand');
    labelBrand.appendChild(labelBrandText);
    const inputBrand = document.createElement('input');
    inputBrand.setAttribute('type', 'text');
    inputBrand.setAttribute('name', 'brand');
    inputBrand.setAttribute('id', 'brand');
    inputBrand.setAttribute('value', this.brand);
    divBrand.append(labelBrand, inputBrand);

    const divCountry = document.createElement('div');
    const labelCountry = document.createElement('label');
    const labelCountryText = document.createTextNode('Roasted in');
    labelCountry.setAttribute('for', 'Country');
    labelCountry.appendChild(labelCountryText);
    const inputCountry = document.createElement('input');
    inputCountry.setAttribute('type', 'text');
    inputCountry.setAttribute('name', 'country');
    inputCountry.setAttribute('id', 'country');
    inputCountry.setAttribute('value', this.country);
    divCountry.append(labelCountry, inputCountry);

    const divRegion = document.createElement('div');
    const labelRegion = document.createElement('label');
    const labelRegionText = document.createTextNode('Coffee region');
    labelRegion.setAttribute('for', 'Region');
    labelRegion.appendChild(labelRegionText);
    const inputRegion = document.createElement('input');
    inputRegion.setAttribute('type', 'text');
    inputRegion.setAttribute('name', 'region');
    inputRegion.setAttribute('id', 'region');
    inputRegion.setAttribute('value', this.region);
    divRegion.append(labelRegion, inputRegion);

    const divType = document.createElement('div');
    const labelType = document.createElement('label');
    const labelTypeText = document.createTextNode('Type of beans');
    labelType.setAttribute('for', 'type');
    labelType.appendChild(labelTypeText);
    const selectType = document.createElement('select');
    selectType.setAttribute('name', 'type');
    selectType.setAttribute('id', 'type');
    const types = ["Arabica","Robusta","Mixed","Instant"];
    types.forEach(type => {
      const option = document.createElement('option');
      const optionText = document.createTextNode(type);
      option.appendChild(optionText);
      option.setAttribute('value', type);
      selectType.appendChild(option);
    });
    const index = types.indexOf(this.type);
    selectType.selectedIndex = index;
    divType.append(labelType, selectType);

    const divNotes = document.createElement('div');
    const labelNotes = document.createElement('label');
    const labelNotesText = document.createTextNode('Coffee notes');
    labelNotes.setAttribute('for', 'Notes');
    labelNotes.appendChild(labelNotesText);
    const inputNotes = document.createElement('input');
    inputNotes.setAttribute('type', 'text');
    inputNotes.setAttribute('name', 'notes');
    inputNotes.setAttribute('id', 'notes');
    inputNotes.setAttribute('value', this.notes);
    divNotes.append(labelNotes, inputNotes);

    const divAroma = document.createElement('div');
    const labelAroma = document.createElement('label');
    const labelAromaText = document.createTextNode('Aroma');
    labelAroma.setAttribute('for', 'Aroma');
    labelAroma.appendChild(labelAromaText);
    const inputAroma = document.createElement('input');
    inputAroma.setAttribute('type', 'text');
    inputAroma.setAttribute('name', 'aroma');
    inputAroma.setAttribute('id', 'aroma');
    inputAroma.setAttribute('value', this.aroma);
    divAroma.append(labelAroma, inputAroma);

    const divUrl = document.createElement('div');
    const labelUrl = document.createElement('label');
    const labelUrlText = document.createTextNode('Photo');
    labelUrl.setAttribute('for', 'url');
    labelUrl.appendChild(labelUrlText);
    const inputUrl = document.createElement('input');
    inputUrl.setAttribute('type', 'url');
    inputUrl.setAttribute('name', 'url');
    inputUrl.setAttribute('id', 'url');
    inputUrl.setAttribute('value', this.url);
    divUrl.append(labelUrl, inputUrl);
  
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttonsDiv');

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Change');

    const close = document.createElement('button');
    close.classList.add('cancelButton');
    const closeText = document.createTextNode('Cancel');
    close.appendChild(closeText);
    close.addEventListener('click', () => {
      editModal.remove();
    });
    buttonsDiv.append(submitInput, close);

    form.append(divName, divBrand, divCountry, divRegion, divType, divNotes, divAroma, divUrl, buttonsDiv);
    editModal.appendChild(form);

    form.addEventListener('submit', e => {
      e.preventDefault();

      const inputs = {
        name: e.target.elements.name.value,
        brand: e.target.elements.brand.value,
        countryRoastedIn: e.target.elements.country.value,
        region: e.target.elements.region.value,
        typeOfBeans: e.target.elements.type.value,
        notes: e.target.elements.notes.value,
        aroma: e.target.elements.aroma.value,
        url: e.target.elements.url.value,
      };

      fetch(`http://localhost:3000/coffee/${this.id}`, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(inputs)
      });

      this.name = inputs.name;
      this.region = inputs.region;

      name.textContent = this.name;
      region.textContent = this.region;


      editModal.remove();
    });
  }
}