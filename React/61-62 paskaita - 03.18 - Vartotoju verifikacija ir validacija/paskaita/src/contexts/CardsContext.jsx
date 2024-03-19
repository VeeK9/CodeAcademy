import { createContext, useEffect, useReducer } from "react";

const CardsContext = createContext();

const CardsActionTypes = {
  getAll: 'fetches all data on initial load',
  addNew: 'adds new card to the data',
  delete: 'deletes a specific card'
}

const reducer = (state, action) => {
  switch(action.type){
    case CardsActionTypes.getAll:
      return action.data;
    case CardsActionTypes.addNew:
      fetch(`http://localhost:8080/cards`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      })
      return [...state, action.data];
    case CardsActionTypes.delete:
      fetch(`http://localhost:8080/cards/${action.id}`, {method: "DELETE"})
      return state.filter(card => card.id !== action.id)
    default:
      console.error(`No such action: ${action.type}`);
      return state;
  }
}

const CardsProvider = ({children}) => {

  const [cards, setCards] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:8080/cards`)
      .then(res => res.json())
      .then(data => setCards({
        type: CardsActionTypes.getAll,
        data: data
      }))
  }, [])

  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
 
export {CardsProvider, CardsActionTypes}
export default CardsContext;