import { useContext } from "react";
import styled from "styled-components"
import TableGamesContext from "../../../contexts/TableGamesContext";
import PageLoaderContext from "../../../contexts/pageLoaderContext";
import FormContext from "../../../contexts/FormContext";
import { actionTypes } from "../../../contexts/TableGamesContext";

const StyledDiv = styled.div`
  position: relative;
  width: 500px;
  text-align: justify;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid lightgray;
  display: grid;
  grid-template: repeat(3, auto) 30px / 2fr 3fr;
  gap: 10px;
  column-gap: 20px;
  color: ${props => props.$arPazymetas ? '#74a285' : '#e66a54'};
  .pazymetas {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background-color: ${props => props.$arPazymetas ? '#74a285' : '#e66a54'};
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    &:hover {
      background-color: ${props => props.$arPazymetas ? '#456952' : '#804b42'};
    }
  }
  > h2 {
    grid-column-start: span 2;
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }
  > img {
    grid-row-start: span 3;
    place-self: center;
    width: 100%;
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

  const { setTableGames } = useContext(TableGamesContext);
  const { pageLoader, setPageLoader } = useContext(PageLoaderContext);
  const { setFormInputsToCardInfo } = useContext(FormContext);

  return (
    <StyledDiv $arPazymetas={game.pazymetas}>
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
          pageLoader === "korteles" &&
          <button
            onClick={() => {
              setFormInputsToCardInfo(game);
              setPageLoader('redagavimas');
            }}
          >Redaguoti</button>
        }
        {
          pageLoader === "korteles" &&
          <button
            onClick={() => setTableGames({
              type: actionTypes.delete,
              id: game.id
            })}
          >Trinti</button>
        }
      </div>
      {
        pageLoader === "korteles" &&
        <button
          className="pazymetas"
          onClick={() => setTableGames({
            type: actionTypes.editStatus,
            id: game.id
          })}
        >{game.pazymetas ? 'nezaidei?' : 'zaidei?'}</button>
      }
    </StyledDiv>
  );
}
 
export default TableGameCard;