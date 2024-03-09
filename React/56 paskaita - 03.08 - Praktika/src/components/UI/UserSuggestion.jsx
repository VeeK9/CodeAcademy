import { useContext } from "react";
import styled from "styled-components";
import PlantsContext from "../../contexts/PlantsContext";
import Image from "./Image";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: 10px;

  height: 1000px;

  > h1 {
    margin-top: 0;
  }
`

const UserSuggestion = () => {

  const { plants } = useContext(PlantsContext);

  return (
    <StyledDiv>
      <h1>Last added plants</h1>
      <Image 
        // src={plants[-1].photo}
        // alt={plants[-1].name}
      />
    </StyledDiv>
  );
}
 
export default UserSuggestion;
