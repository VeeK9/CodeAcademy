import styled from "styled-components";
import PlantCard from "../UI/PlantCard";
import { useContext } from "react";
import PlantsContext from "../../contexts/PlantsContext";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const PlantList = () => {

  const { plants } = useContext(PlantsContext)

  return (
    <StyledDiv>
      {
        plants.map(plant => 
          <PlantCard 
            key={plant.id}
            plant={plant}
          />
        )
      }
    </StyledDiv>
  );
}
 
export default PlantList;