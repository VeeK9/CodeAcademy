import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Cards from './components/pages/Cards';
import Header from './components/UI/Header';
import { Routes, Route } from "react-router-dom"
import Footer from './components/UI/Footer';
import AddNewPlant from './components/pages/AddNewPlant';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route
            path='/plants'
            element={<Cards />}
          />
          <Route 
            path='/login'
            element={<Login />}
          />
          <Route 
            path='/register'
            element={<Register />}
          />
          <Route 
            path='/addNewPlant'
            element={<AddNewPlant />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
