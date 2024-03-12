import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: white;

  padding: 10px;

  > h1 {
    margin-top: 0;
  }
  > p > span {
    text-decoration: underline;
  }
`

const User = () => {

  const {currentUser, waterUserPlants} = useContext(UsersContext)

  return (
    <StyledDiv>
      <h1>Hello, {currentUser.firstName}</h1>
      {
        currentUser.type === 'user' ? 
        <>
          {
            !currentUser.water ?
            <p>You don't water your plants?!</p> :
            <p>Last time you watered your plants:<br /><span>{currentUser.water}</span></p>
          }
          <p>Most plants require water at least once a week.</p>
          <Button 
            text="Watered?"
            func={waterUserPlants}
            info={Date().slice(0, 21).toString()}
          />
        </> : null    
      }
    </StyledDiv>
  );
}
 
export default User;