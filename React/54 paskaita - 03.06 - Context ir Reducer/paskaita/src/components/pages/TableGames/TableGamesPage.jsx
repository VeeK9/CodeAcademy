import styled from "styled-components";
import TableGameList from "../../UI/TableGameList/TableGameList";

const StyledSection = styled.section`
  > h1 {
    font-size: 2rem;
    text-align: center;
  }
`

const TableGamesPage = () => {

  return (
    <StyledSection>
      <h1>Our Table Games</h1>
      <TableGameList/>
    </StyledSection>
  );
}
 
export default TableGamesPage;