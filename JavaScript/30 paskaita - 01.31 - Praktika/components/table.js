export default class Table{
  constructor({attributes, thead, tbody, tfoot}){
    this.attributes = attributes;
    this.thead = thead;
    this.tbody = tbody;
    this.tfoot = tfoot;
    return this.render();
  }
  render(){
    const table = document.createElement('table');
    
    this.attributes && this.attributes.forEach(attr => {
      table.setAttribute(attr.name, attr.value);
    });
    
    // thead
    const thead = document.createElement('thead');
    this.thead.attributes && this.thead.attributes.forEach(attr => {
      thead.setAttribute(attr.name, attr.value);
    });

    const theadRow = document.createElement('tr');
    this.thead.row.attributes && this.thead.row.attributes.forEach(attr => {
      theadRow.setAttribute(attr.name, attr.value);
    });
    thead.appendChild(theadRow);
    this.thead.row.columns.forEach(column => {
      const th = document.createElement('th');
      const thText = document.createTextNode(column.text);
      th.appendChild(thText);
      column.attributes && column.attributes.forEach(attr => {
        th.setAttribute(attr.name, attr.value);
      });
      theadRow.appendChild(th);
    });
    
    // tbody
    const tbody = document.createElement('tbody');
    this.tbody.attributes && this.tbody.attributes.forEach(attr => {
      tbody.setAttribute(attr.name, attr.value);
    });

    this.tbody.rows.forEach(row => {
        const tbodyRow = document.createElement('tr');
      row.attributes && row.attributes.forEach(attr => {
        tbodyRow.setAttribute(attr.name, attr.value);
      });
      tbody.appendChild(tbodyRow);
      row.columns.forEach(column => {
        const td = document.createElement('td');
        const tdText = document.createTextNode(column.text);
        td.appendChild(tdText);
        column.attributes && column.attributes.forEach(attr => {
          td.setAttribute(attr.name, attr.value);
        });
        tbodyRow.appendChild(td);
      });
    });
    
    // tfoot
    const tfoot = document.createElement('tfoot');
    this.tfoot.attributes && this.tfoot.attributes.forEach(attr => {
      tfoot.setAttribute(attr.name, attr.value);
    });

    const tfootRow = document.createElement('tr');
    this.tfoot.row.attributes && this.tfoot.row.attributes.forEach(attr => {
      tfootRow.setAttribute(attr.name, attr.value);
    });
    tfoot.appendChild(tfootRow);
    this.tfoot.row.columns.forEach(column => {
      const td = document.createElement('td');
      const tdText = document.createTextNode(column.text);
      td.appendChild(tdText);
      column.attributes && column.attributes.forEach(attr => {
        td.setAttribute(attr.name, attr.value);
      });
      tfootRow.appendChild(td);
    });
    
    table.append(thead, tbody, tfoot)
    return table;
  }
}