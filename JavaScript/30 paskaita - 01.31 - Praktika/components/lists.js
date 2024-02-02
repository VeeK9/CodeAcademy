export default class List{
  constructor({listType, attributes, listItems}){
    this.listType = listType;
    this.attributes = attributes;
    this.listItems = listItems;
    return this.render();
  }
  render(){
    const list = document.createElement(this.listType);
    this.attributes && this.attributes.forEach(attr => {
      list.setAttribute(attr.name, attr.value);
      });
    this.listItems.forEach(item => {
      const li = document.createElement('li');
      const liText = document.createTextNode(item.tekstas);
      li.appendChild(liText);
      item.attributes && item.attributes.forEach(liAttr => {
        li.setAttribute(liAttr.name, liAttr.value);
        });
      list.appendChild(li);
    });

    return list;
  }
}