import { useContext } from "react";
import CardsContext from "../../contexts/CardsContext";
import Card from "../UI/Card"
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import UsersContext from "../../contexts/UsersContext";

const StyledSection = styled.section`
  > h1 {
    text-align: center;
  }
  > div {
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
  > a {
    width: fit-content;
    display: block;
    margin: 10px auto;
    text-decoration: none;
    color: black;
    padding: 5px 10px;
    border: 1px solid lightgray;
    transition: 0.3s;
    &:hover {
      background-color: lightgray;
    }
  }
  h3 {
    padding-top: 30px;
    text-align: center;
  }
`

const UserPage = () => {

  const {loggedInUser} = useContext(UsersContext)
  const {cards} = useContext(CardsContext);
  const location = useLocation();
  const userCards = cards.filter(card => card.userId === loggedInUser.id)

  return (
    <StyledSection>
      <h1>All {loggedInUser.username} cards</h1>
      {
        loggedInUser && 
        <Link to='/cards/addNew'>Add New Card</Link>
      }
        {
          userCards.length ?
          <div>
            {userCards.map(card =>
            <Card 
              key={card.id}
              card={card}
              location={location.pathname}
            />)}
          </div> :
          <h3>You haven't posted any cards</h3>
        }
    </StyledSection>
  );
}
 
export default UserPage;