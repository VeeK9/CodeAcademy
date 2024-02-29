import './App.css';
import { useState, useEffect } from 'react';
import Patiekalai from './components/Patiekalai';
import NaujoPatiekaloForma from './components/NaujoPatiekaloForma';
import Header from './components/Header';

const App = () => {

  const [formInputs, setFormInputs] = useState({
    pavadinimas: '',
    nuotrauka: '',
    kilmesSalis: '',
    ragautas: false,
    ingredientai: '',
    kainaNuo: '',
    kainaIki: ''
  })

  // const [dishes, setDishes] = useState([
  //   {
  //     id: 0,
  //     pavadinimas: "Kebabas",
  //     nuotrauka: "https://www.unicornsinthekitchen.com/wp-content/uploads/2022/11/Doner-kebab-sq.jpg",
  //     kilmesSalis: "Bizantija",
  //     ragautas: true,
  //     ingredientai: ["mesa","lavasas","darzoves","padazas"],
  //     kaina: {
  //       nuo: 4.5,
  //       iki: 10
  //     }
  //   },{
  //     id: 1,
  //     pavadinimas: "Pica",
  //     nuotrauka: "https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg",
  //     kilmesSalis: "Italija",
  //     ragautas: true,
  //     ingredientai: ["padazas","picos padas","suris","mesa"],
  //     kaina: {
  //       nuo: 8,
  //       iki: 16
  //     }
  //   },{
  //     id: 2,
  //     pavadinimas: "Cepelinai",
  //     nuotrauka: "https://i0.wp.com/www.neilsowerby.co.uk/wp-content/uploads/2021/11/Zeppelins.jpg?resize=1030%2C688&ssl=1",
  //     kilmesSalis: "Lietuva",
  //     ragautas: true,
  //     ingredientai: ["mesa","bulves","grietine","spirguciai"],
  //     kaina: {
  //       nuo: 1.5,
  //       iki: 5
  //     }
  //   },{
  //     id: 3,
  //     pavadinimas: "Ceviche",
  //     nuotrauka: "https://downshiftology.com/wp-content/uploads/2023/04/How-To-Make-Ceviche-4.jpg",
  //     kilmesSalis: "Peru",
  //     ragautas: false,
  //     ingredientai: ["zalia zuvis","darzoves","zalia citrina"],
  //     kaina: {
  //       nuo: 10,
  //       iki: 20
  //     }
  //   },
  // ]);

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/dishes')
      .then(res => res.json())
      .then(data => {
        setDishes(data)
      });
    }, []);

  const keistiPatiekaloStatusa = id => {
    setDishes(dishes.map(dish => {
      if(dish.id === id){
        fetch(`http://localhost:8001/dishes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify({ragautas: !dish.ragautas})
        });
        return {
          ...dish,
          ragautas: !dish.ragautas
        }
      } else {
        return dish;
      }
    }))
  }

  const trintiPatiekala = id => {
    fetch(`http://localhost:8001/dishes/${id}`, {
      method: "DELETE"
    });
    setDishes(dishes.filter(dish => dish.id !== id))
  }

  const papildytiPatiekalus = naujasPatiekalas => {
    fetch(`http://localhost:8001/dishes/`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(naujasPatiekalas)
    });
    setDishes([...dishes, naujasPatiekalas])
  }

  return (
    <>
      <Header 
        bendrasKiekis={dishes.length}
        ragautuKiekis={dishes.filter(dish => dish.ragautas).length}
        neragautuKiekis={dishes.filter(dish => !dish.ragautas).length}
      />
      <NaujoPatiekaloForma 
        addDish={papildytiPatiekalus}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
      />
      <Patiekalai 
        deleteDish={trintiPatiekala}
        statusChange={keistiPatiekaloStatusa}
        dishes={dishes}
      />
    </>
  );
}

export default App;
