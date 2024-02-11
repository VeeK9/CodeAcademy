export default class EditDialog{
  constructor(){

    return this.render()
  }
  render(){
    const modal = document.createElement('dialog');
    modal.classList.add('editDialog');

    const heading = document.createElement('h2');
    const headingText = document.createTextNode('Do you want to edit something?');
    heading.appendChild(headingText);

    document.addEventListener('keydown', e => {
      if(e.code === 'Escape'){
        modal.remove();
      }
    });

    modal.append(heading);
    return modal;
  }
}