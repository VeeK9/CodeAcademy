export default class EditDialog{
  constructor(){

    return this.render()
  }
  render(){
    const modal = document.createElement('dialog');
    modal.classList.add('editDialog');

    const heading = document.createElement('h1');
    const headingText = document.createTextNode('Edit something?');
    heading.appendChild(headingText);

    const closeIcon = document.createElement('span');
    closeIcon.classList.add('bi', 'bi-x-circle');
    closeIcon.addEventListener('click', () => {
      modal.remove();
    });
    document.addEventListener('keydown', e => {
      if(e.code === 'Escape'){
        e.preventDefault();
      }
    });

    modal.append(heading, closeIcon);
    return modal;
  }
}