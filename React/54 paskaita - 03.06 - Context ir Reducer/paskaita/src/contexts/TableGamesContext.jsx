import { createContext, useState, useEffect, useReducer } from "react";

const TableGamesContext = createContext();

export const actionTypes = {
  addNew: 'prideti nauja stalo zaidima',
  editFull: 'redaguoti visa zaidima',
  editStatus: 'redaguoti zaistas-neziastas statusa',
  delete: 'istrinti zaidima',
  setData: 'fetch metu uzpildo duomenis'
}

const reducer = (state, action) => {
  switch (action.type){
    case actionTypes.setData:
      return action.data
    case actionTypes.addNew:
      fetch(`http://localhost:8080/staloZaidimai`,{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      })
      return [...state, action.data]
    case actionTypes.editFull:
      fetch(`http://localhost:8080/staloZaidimai/${action.editedTableGame.id}`, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.editedTableGame)
      })
      return state.map(game => {
        if (game.id !== action.editedTableGame.id) {
          return game
        } else {
          return action.editedTableGame
        }
      });
    case actionTypes.editStatus:
      return state.map(game => {
        if(game.id !== action.id){
          return game;
        } else {
          fetch(`http://localhost:8080/staloZaidimai/${action.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({pazymetas: !game.pazymetas})
          })
          return {
            ...game,
            pazymetas: !game.pazymetas
          }
        }
      })
    case actionTypes.delete:
      fetch(`http://localhost:8080/staloZaidimai/${action.id}`, {method: "DELETE"})
      return state.filter(game => action.id !== game.id)
    default:
      console.error('Unknown action type', action.type);
      return state
  }
}

const TableGamesProvider = ({ children }) => {

  const [tableGames, setTableGames] = useReducer(reducer, []);
  useEffect(() => {
    fetch(`http://localhost:8080/staloZaidimai`)
      .then(res => res.json())
      .then(data => {
        setTableGames({ type: actionTypes.setData, data: data })
        // setTableGames({ type: actionTypes.addNew, data: data })
      });
  }, []);

  // const [tableGames, setTableGames] = useState([]);
  
  // const deleteTableGame = id => {
  //   setTableGames(tableGames.filter(game => id !== game.id))
  //   fetch(`http://localhost:8080/staloZaidimai/${id}`, {
  //     method: "DELETE"})
  //   }
    
  // const addNewTableGame = newTableGame => {
  //   fetch(`http://localhost:8080/staloZaidimai`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify (newTableGame)
  //   })
  //   setTableGames([...tableGames, newTableGame]);
  // }

  // const editTableGame = editedTableGame => {
  //   fetch(`http://localhost:8080/staloZaidimai/${editedTableGame.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify(editedTableGame)
  //   })
  //   setTableGames(tableGames.map(game => {
  //     if (game.id !== editedTableGame.id) {
  //       return game
  //     } else {
  //       return editedTableGame
  //     }
  //   }))
  // }

  // const editTableGameStatus = id => {
  //   setTableGames(tableGames.map(game => {
  //     if(game.id !== id){
  //       return game;
  //     } else {
  //       fetch(`http://localhost:8080/staloZaidimai/${id}`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type":"application/json"
  //         },
  //         body: JSON.stringify({pazymetas: !game.pazymetas})
  //       })
  //       return {
  //         ...game,
  //         pazymetas: !game.pazymetas
  //       }
  //     }
  //   }))
  // }
  
  // useEffect(() => {
  //   fetch(`http://localhost:8080/staloZaidimai`)
  //     .then(res => res.json())
  //     .then(data => setTableGames(data))
  //   }, [])

  return (
    <TableGamesContext.Provider
      value={{
        // tableGames,
        // addNewTableGame,
        // deleteTableGame,
        // editTableGame,
        // editTableGameStatus
        tableGames,
        setTableGames
      }}
    >
      {children}
    </TableGamesContext.Provider>
  )
};

export { TableGamesProvider };
export default TableGamesContext;