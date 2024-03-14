import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './components/pages/Home';
import Register from './components/pages/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
