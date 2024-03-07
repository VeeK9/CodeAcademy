import styled from "styled-components";
import TableGameCard from "../TableGameCard/TableGameCard";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";

const StyledDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

const TableGameList = () => {

  const { tableGames } = useContext(TableGamesContext)

  return (
    <StyledDivContainer>
      {
        tableGames.length ?
        tableGames.map(game => 
          <TableGameCard 
            key={game.id}
            game={game}
          />
          ) :
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="loading"
          />
      }
    </StyledDivContainer>
  );
}
 
export default TableGameList;