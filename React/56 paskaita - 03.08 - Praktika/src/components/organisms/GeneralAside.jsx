
import { useContext } from "react";
import styled from "styled-components";
import PlantsContext from "../../contexts/PlantsContext";

const StyledDiv = styled.div`
  position: sticky;
  top: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;

  height: 500px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      overflow: hidden;
    }
    > h4 {
      margin: 0;
    }
  }
`

const GeneralAside = () => {

  const { plants } = useContext(PlantsContext);

  return (
    <StyledDiv>
      <h1>Suggestions</h1>
      <div>
        {/* <img
          src={plants[1].photo} 
          alt={plants[1].name}
        />
        <h4>{plants[1].name}</h4> */}
      </div>
    </StyledDiv>
  );
}
 
export default GeneralAside;