import styled from "styled-components";
import Button from "./Button";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;

  padding: 10px;

  > h1 {
    margin-top: 0;
  }
`

const User = () => {
  return (
    <StyledDiv>
      <h1>User name</h1>
      <p>Paskutini karta laistyta: <br /> {Date().toString().slice(0, 21)}</p>
      <Button 
        text="Watered?"
      />
    </StyledDiv>
  );
}
 
export default User;