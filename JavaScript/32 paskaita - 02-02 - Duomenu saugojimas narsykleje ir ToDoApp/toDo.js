import Task from "./toDoTasks.js";

document.querySelector('#newTask').addEventListener('submit', e => {
  e.preventDefault();
  const newTask = document.createElement('div');

  if(e.target.elements.task.value) {

    const task = {
      text: e.target.elements.task.value,
      done: false,
      id: Date.parse(new Date())
    };

    const newTask = new Task(task);
    document.querySelector('.tasks').prepend(newTask);
    const localTasks = JSON.parse(localStorage.getItem('toDo'));
    localTasks.unshift(task);
    localStorage.setItem('toDo', JSON.stringify(localTasks))
  }

  e.target.reset();
});
const startingData = JSON.parse(localStorage.getItem('toDo'));

startingData.forEach(task => {
  const oldTask = new Task(task);
  document.querySelector('.tasks').appendChild(oldTask);
})