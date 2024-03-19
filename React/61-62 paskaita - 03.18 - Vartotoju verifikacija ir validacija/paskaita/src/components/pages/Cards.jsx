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
`

const Cards = () => {

  const {loggedInUser} = useContext(UsersContext)
  const {cards} = useContext(CardsContext);
  const location = useLocation();
  console.log(location)
  
  return (
    <StyledSection>
      <h1>Cards</h1>
      {
        loggedInUser && 
        <Link to='/cards/addNew'>Add New Card</Link>
      }
      <div>
        {
          cards.map(card =>
            <Card 
              key={card.id}
              card={card}
              location={location.pathname}
            />
          )
        }
      </div>
    </StyledSection>
  );
}
 
export default Cards;