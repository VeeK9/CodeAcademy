export default class DeleteDialog{
  constructor({id, el}){
    this.id = id;
    this.el = el;
    return this.render();
  }
  render(){
    const modal = document.createElement('dialog');
    modal.classList.add('deleteDialog');

    const par = document.createElement('p');
    const parText = document.createTextNode('Are you sure you want to delete this item?');
    par.appendChild(parText);

    const buttonsDiv = document.createElement('div')

    const yesButton = document.createElement('button');
    const yesButtonText = document.createTextNode('Yes');
    yesButton.appendChild(yesButtonText);

    const noButton = document.createElement('button');
    const noButtonText = document.createTextNode('No');
    noButton.appendChild(noButtonText);

    noButton.addEventListener('click', () => {
      modal.remove();
    });
    document.addEventListener('keydown', e => {
      if(e.code === 'Escape'){
        modal.remove();
      }
    });
    modal.addEventListener('click', e => {
      const out = modal.getBoundingClientRect();
      if(
        e.clientX < out.left ||
        e.clientX > out.right ||
        e.clientY < out.top ||
        e.clientY > out.bottom
      ){ 
        modal.remove()
      };
    });

    yesButton.addEventListener('click', () => {
      modal.remove();
      this.el.remove();
      fetch(`http://localhost:3000/school/${this.id}`, {
        method: "DELETE"
      });
    });

    buttonsDiv.append(yesButton, noButton);

    modal.append(par, buttonsDiv);
    return modal;
  }
}