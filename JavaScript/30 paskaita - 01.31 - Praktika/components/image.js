export default class Image{
  constructor({attributes}){
    this.attributes = attributes;
    return this.render();
  }
  render(){
    const imageEl = document.createElement('img');
    this.attributes.forEach(attr => {
      imageEl.setAttribute(attr.name, attr.value);
    })

    return imageEl;
  }
}