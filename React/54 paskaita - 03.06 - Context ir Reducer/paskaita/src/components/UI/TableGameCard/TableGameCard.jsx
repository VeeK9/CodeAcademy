import { useContext } from "react";
import styled from "styled-components"
import TableGamesContext from "../../../contexts/TableGamesContext";
import PageLoaderContext from "../../../contexts/pageLoaderContext";

const StyledDiv = styled.div`
  width: 500px;
  text-align: justify;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid lightgray;
  display: grid;
  grid-template: repeat(3, auto) 30px / 2fr 3fr;
  gap: 10px;
  > h2 {
    grid-column-start: span 2;
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }
  > img {
    grid-row-start: span 3;
    place-self: center;
    max-width: 100%;
    max-height: 100%;
  }
  > p{
    margin: 0;
  }
  > .spans {
    text-align: end;
  }
  > .buttons {
    display: flex;
    justify-content: space-between;
    > button {
      padding: 2px 10px;
      background-color: white;
      border-radius: 20px;
      border: 1px solid lightgray;
      cursor: pointer;
      &:hover {
        background-color: #efefef;
      }
      &:last-of-type:hover {
        background-color: #e66a54;
      }
    }
  }
`

const TableGameCard = ({ game }) => {

  const { deleteTableGame } = useContext(TableGamesContext);
  const { pageLoader } = useContext(PageLoaderContext);

  return (
    <StyledDiv>
      <h2>{game.pavadinimas}</h2>
      <img
        src={game.nuotrauka}
        alt={`${game.pavadinimas} paveiksliukas`}
      />
      <p>{game.aprasymas}</p>
      <div
        className="spans"
      >
        <span>Zaideju kiekis: {game.zaidejai.kiekisNuo}-{game.zaidejai.kiekisIki} </span>
        <br />
        <span> Amzius: {game.zaidejai.amziusNuo}+</span>
      </div>
      <div
        className="buttons"
      >
        {
          pageLoader === "cards" &&
          <button
            onClick={() => deleteTableGame(game.id)}
          >Edit Game</button>
        }
        {
          pageLoader !== "addForm" &&
          <button
          onClick={() => deleteTableGame(game.id)}
          >Delete Game</button>
        }
      </div>
    </StyledDiv>
  );
}
 
export default TableGameCard;