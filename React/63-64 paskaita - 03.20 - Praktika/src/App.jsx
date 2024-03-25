import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Content from './components/pages/Content';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
