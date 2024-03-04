import { useState } from 'react';
import './App.css';
import RegFormPage from './components/pages/RegFormPage/RegFormPage';

const App = () => {

  const [formInputs, setFormInputs] = useState({
    vardas: "",
    email: "",
    avatar: "",
    password: "",
    passwordRepeat: "",
  });

  return (
    <>
      <RegFormPage 
        value={formInputs}
        onChangeF={setFormInputs}
      />
    </>
  );
}

export default App;
