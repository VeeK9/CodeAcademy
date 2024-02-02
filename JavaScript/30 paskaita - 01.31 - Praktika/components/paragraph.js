export default class Paragraph{
  constructor({tekstas, attributes}){
    this.tekstas = tekstas;
    this.attributes = attributes;
    return this.render();
  }
  render(){
    const parEl = document.createElement('p');
    this.attributes.forEach(attr => {
      parEl.setAttribute(attr.name, attr.value);
    })
    const parElText = document.createTextNode(this.tekstas);
    parEl.appendChild(parElText);

    return parEl;
  }
}