export default class El{
  constructor({tag, tekstas, attributes}){
    this.tag = tag;
    this.tekstas = tekstas;
    this.attributes = attributes;
    return this.render();
  }
  render(){
    const el = document.createElement(this.tag);
    this.attributes.forEach(attr => {
      el.setAttribute(attr.name, attr.value);
    })
    const elText = document.createTextNode(this.tekstas);
    el.appendChild(elText);

    return el;
  }
}