import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledArticle = styled.article`
  position: relative;
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  justify-content: center;
  /* box-sizing: border-box; */
  padding: 10px;
  column-gap: 10px;
  overflow: hidden;
  background-color: white;
  > h2 {
    grid-column-start: 2;
    text-align: center;
  }
  > img {
    grid-row-start: 1;
    grid-row-end: span 2;
    width: 100%;
    height: 300px;
    display: block;
    object-fit: cover;
  }
  > button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

const PlantCard = ({ plant }) => {

  const {addUserPlant, removeUserPlant, currentUser} = useContext(UsersContext)

  // console.log(currentUser)

  return (
    <StyledArticle>
      <h2>{plant.name}</h2>
      <img
        src={plant.photo}
        alt={`${plant.name} picture`}
      />
      <p>{plant.description}</p>
      {
        currentUser.type === 'user' ?
        currentUser.plantIDs.find(pla => pla == plant.id) ?
        <Button 
          text={"I don't have this!"}
          func={removeUserPlant}
          info={plant.id}
        /> :
        <Button 
          text={'I have this!'}
          func={addUserPlant}
          info={plant.id}
        /> : null
      }
    </StyledArticle>
  );
}
 
export default PlantCard;