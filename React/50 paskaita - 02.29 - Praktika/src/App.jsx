import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  const [user, setUser] = useState({})

  const [runners, setRunners] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  const logIn = () => {
    setLoggedIn(true)
    // setUser(name)
  }
  const logOut = () => setLoggedIn(false)

  // const users = [
  //   {
  //     userName: "alio"
  //   },
  //   {
  //     userName: "labas"
  //   }
  // ]

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

  const editRunner = (id) => {
    fetch(`http://localhost:3000/runners/${id}` , {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({})
    })
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
      // users={users}
      setUser={setUser}
      runnersFollowed={runners.filter(runner => runner.followed).length}
    />
    <Main 
      runners={runners}
    />
    <Footer />
    </>
  );
}

export default App;
