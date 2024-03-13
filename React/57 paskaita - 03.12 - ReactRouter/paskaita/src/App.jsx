import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Cards from './components/pages/Cards';
import Header from './components/UI/Header';
import { Routes, Route } from "react-router-dom"
import Footer from './components/UI/Footer';
import AddNewPlant from './components/pages/AddNewPlant';
import EditExistingPlant from './components/pages/EditExistingPlant';
import PlantPage from './components/pages/PlantPage';
import ErrorPage from './components/pages/ErrorPage';


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
          <Route path='/plants'>
            <Route index element={<Cards />} />
            <Route path=':id' element={<PlantPage />} />
            <Route path=':id/edit' element={<EditExistingPlant />} />
          </Route>
          <Route
            path='addNewPlant'
            element={<AddNewPlant />}
          />
          <Route 
            path='/login'
            element={<Login />}
          />
          <Route 
            path='/register'
            element={<Register />}
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
