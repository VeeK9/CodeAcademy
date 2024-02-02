export default class Heading{
  constructor({type, tekstas, attributes}){
    this.type = type;
    this.tekstas = tekstas;
    this.attributes = attributes;
    return this.render();
  }
  render(){
    const headEl = document.createElement(this.type);
    this.attributes.forEach(attr => {
      headEl.setAttribute(attr.name, attr.value);
    })
    const headElText = document.createTextNode(this.tekstas);
    headEl.appendChild(headElText);

    return headEl;
  }
}