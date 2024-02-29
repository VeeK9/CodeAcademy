import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Things from './components/Things';

const App = () => {
  
  const [formInput, setFormInput] = useState('');

  // console.log(tasks);

  const [tasks, setTasks] = useState([
    {
      id:123,
      done:false,
      title:'Take out the trash'
    },{
      id:234,
      done:false,
      title:'Take a walk outside'
    },{
      id:345,
      done:false,
      title:'Tidy up the kitchen'
    }
  ])
  // localStorage.setItem('tasks', JSON.stringify(tasks));


  // const [tasks, setTasks] = useState([])

  // fetch('http://localhost:8000/tasks')
  //   .then(res => res.json())
  //   .then(data => {
  //     setTasks(data)
  //   })

  const deleteTask = (id) => {

    // const doneTasks = tasks.filter(task => task.id !== id)
    // console.log(doneTasks)

    // fetch(`http://localhost:8000/tasks`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(doneTasks)
    // });


    setTasks(tasks.filter(task => task.id !== id))
    // localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task.id !== id)));
  }

  const completeTask = (id) => {


    setTasks(tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          done: !task.done
        }
      } else {
        return task;
      }
    }))


    // localStorage.setItem(
    //   'tasks',
    //   JSON.stringify(tasks.map(task => {
    //     if(task.id === id){
    //       return {
    //         ...task,
    //         done: !task.done
    //       }
    //     } else {
    //       return task;
    //     }
    //   })));
  }

  const addTask = (newTask) => {
    // console.log('pridedame', newTask);

    // setTasks(tasks.concat({
    //   id: new Date()*1,
    //   title: value,
    //   done: false
    // }))

    setTasks([...tasks, newTask])

    // localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  }

  return (
    <div id='toDo'>
      <Input 
        addTask={addTask}
        setFormInput={setFormInput}
        formInput={formInput}
      />
      <Things 
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
