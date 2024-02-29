import './App.css';
import { useState } from 'react';
import Skaiciuoti from './components/Skaiciuoti';
import Header from './components/Header';

const App = () => {

  const [skaicius, setSkaicius] = useState(0);
  // console.log(skaicius)

  const skaiciausDidinimas = () => {
    setSkaicius(skaicius+1);
    // console.log(skaicius)
  };
  const skaiciausMazinimas = () => {
    setSkaicius(skaicius-1);
    // console.log(skaicius)
  };

  const [arPrisijunges, setArPrisijunges] = useState(false);
  const prisijungti = () => setArPrisijunges(true);
  const atsijungti = () => setArPrisijunges(false);

  return (
    <>
      <Header 
        state={arPrisijunges}
        logIn={prisijungti}
        logOut={atsijungti}
      />
      {
        arPrisijunges &&
        <Skaiciuoti 
          number={skaicius}
          decrement={skaiciausMazinimas}
          increment={skaiciausDidinimas}
        />
      }
    </>
  );
}

export default App;
