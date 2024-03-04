import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  const [newRunnerForm, setNewRunnerForm] = useState({
    name: '',
    photo: '',
    country: '',
    shoes: '',
    watch: '',
    fastestTimes: '',
    notableWins: [],
    honors: [],
    followed: false
  })

  const [editRunnerForm, setEditRunnerForm] = useState({
    name: '',
    photo: '',
    country: '',
    shoes: '',
    watch: '',
    fastestTimes: '',
    notableWins: '',
    honors: '',
    followed: false
  })

  const [user, setUser] = useState({})

  const [runners, setRunners] = useState([])

  const [loggedIn, setLoggedIn] = useState(false)

  // const [open, setOpen] = useState(false);
  // const modalOpen = () => setOpen(true);
  // const modalClose = () => setOpen(false);

  const logIn = (name) => {
    setLoggedIn(true)
    setUser(name)
  }

  const logOut = () => {
    setLoggedIn(false)
    setUser({})
  }

  const users = [
    {
      id: "0",
      userName: "begikas",
      password: "batai",
      type: "user",
    },
    {
      id: "1",
      userName: "admin",
      password: "admin",
      type: "admin"
    }
  ]

  useEffect(() => {
    fetch('http://localhost:3000/runners')
      .then(res => res.json())
      .then(data => {
        setRunners(data)
      })},[]);

  const deleteRunner = (id) => {
    fetch(`http://localhost:3000/runners/${id}`, {
      method: "DELETE"
    })
    setRunners(runners.filter(runner => runner.id !== id))
  }
      
    const followRunner = (id) => {
      setRunners(runners.map(runner => {
        if(runner.id === id){
          fetch(`http://localhost:3000/runners/${id}` , {
            method: "PATCH",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({followed: !runner.followed})
          });
          return {
            ...runner,
            followed: !runner.followed
          }
        } else {
          return runner;
        }
      }))
  }

  const editRunner = (editedRunner) => {
    setRunners(runners.map(runner => {
      if(runner.id === editedRunner.id){
        fetch(`http://localhost:3000/runners/${runner.id}`, {
          method: "PUT",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(editedRunner)
        });
        return {
          editedRunner
        }
      } else {
        return runner;
      }
    }))
  }

  const addRunner = (newRunner) => {
    fetch(`http://localhost:3000/runners/` , {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newRunner)
    })
    setRunners([...runners, newRunner])
  }

  return (
    <>
    <Header 
      loggedIn={loggedIn}
      logIn={logIn}
      logOut={logOut}
      user={user}
      users={users}
      setUser={setUser}
      runnersFollowed={runners.filter(runner => runner.followed).length}
    />
    <Main 
      // open={open}
      // modalOpen={modalOpen}
      // modalClose={modalClose}
      user={user}
      loggedIn={loggedIn}
      follow={followRunner}
      deleteRunner={deleteRunner}
      runners={runners}
      editRunner={editRunner}
      addRunner={addRunner}
      setNewRunnerForm={setNewRunnerForm}
      newRunnerForm={newRunnerForm}
      setEditRunnerForm={setEditRunnerForm}
      editRunnerForm={editRunnerForm}
    />
    <Footer />
    </>
  );
}

export default App;
