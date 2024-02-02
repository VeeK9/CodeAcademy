export default class Name{
  constructor(vardas, pavarde){
    this.vardas = vardas;
    this.pavarde = pavarde;
    return this.render();
  }
  render(){
    const table = document.querySelector('#uzd2_1 > table > tbody');
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td1Text = document.createTextNode(this.vardas);
    td1.appendChild(td1Text);

    const td2 = document.createElement('td');
    const td2Text = document.createTextNode(this.pavarde);
    td2.appendChild(td2Text);

    tr.append(td1, td2);
    table.appendChild(tr);

    return table;
  }
};