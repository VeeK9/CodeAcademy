export default class Select{
  constructor({label, options, attributes}){
    this.label = label;
    this.attributes = attributes;
    this.options = options;
    return this.render();
  }
  render(){
    const label = document.createElement('label');
    const labelText = document.createTextNode(this.label);
    label.appendChild(labelText);
    const select = document.createElement('select');
    this.attributes && this.attributes.forEach(attr => {
      select.setAttribute(attr.name, attr.value);
      });
    this.options.forEach(option => {
      const opcija = document.createElement('option');
      const opcijaText = document.createTextNode(option.option);
      opcija.appendChild(opcijaText);
      option.attributes && option.attributes.forEach(opcijaAttr => {
        opcija.setAttribute(opcijaAttr.name, opcijaAttr.value);
      });
      select.appendChild(opcija);
    });
    label.appendChild(select);

    return label;
  }
}