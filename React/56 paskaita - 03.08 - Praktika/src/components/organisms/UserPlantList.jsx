import styled from "styled-components";
import PlantCard from "../UI/PlantCard";
import { useContext } from "react";
import PlantsContext from "../../contexts/PlantsContext";
import PageLoaderContext from "../../contexts/PageLoaderContext";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const UserPlantList = () => {

  const { plants } = useContext(PlantsContext)
  const { pageLoader } = useContext(PageLoaderContext)

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
 
export default UserPlantList;