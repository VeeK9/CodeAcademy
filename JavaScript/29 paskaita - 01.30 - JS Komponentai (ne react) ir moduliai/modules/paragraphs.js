export default class Par{
  constructor({ tekstas }){
    this.tekstas = tekstas;
    return this.render();
  }
  render(){
    const par = document.createElement('p');
    const parText = document.createTextNode(this.tekstas);
    par.appendChild(parText);

    return par;
  }
}