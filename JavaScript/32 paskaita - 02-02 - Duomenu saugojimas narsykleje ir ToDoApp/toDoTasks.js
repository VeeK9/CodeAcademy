export default class Task{
  constructor({text, done, id}){
    this.text = text;
    this.done = done;
    this.id = id;
    return this.render();
  }
  render(){
    const div = document.createElement('div');
    console.log(this.id);
    
    const task = document.createElement('p');
    const check = document.createElement('span');
    check.classList.add('bi');
    check.classList.add('bi-check-circle');
    this.done && task.classList.add('done');
    this.done && check.classList.add('visible');
    
    
    task.addEventListener('click', e => {
      task.classList.toggle('done');
      e.target.previousSibling.classList.toggle('visible');

      const localTasks = JSON.parse(localStorage.getItem('toDo'));
      const changedTasks = localTasks.map(task => {
        if(task.id === this.id){
          return {
            ...task,
            done: !task.done
          }
        } else {
          return task;
        }
      });
      localStorage.setItem('toDo', JSON.stringify(changedTasks));
      
    });

    const taskText = document.createTextNode(this.text[0].toUpperCase()+this.text.slice(1));
    task.appendChild(taskText);
    
    const trash = document.createElement('i');
    trash.classList.add('bi');
    trash.classList.add('bi-trash');

    trash.addEventListener('click', e => {
      div.remove();

      const localTasks = JSON.parse(localStorage.getItem('toDo'));
      const notDeletedTasks = localTasks.filter(task => task.id !== this.id)
      localStorage.setItem('toDo', JSON.stringify(notDeletedTasks));
    })

    div.append(check, task, trash);

    return div;
  }
}