import styled from "styled-components";
import PlantCard from "../UI/PlantCard";
import { useContext } from "react";
import UsersContext from "../../contexts/PlantsContext";
import PageLoaderContext from "../../contexts/PageLoaderContext";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const UserPlantList = () => {

  const { userPlants } = useContext(UsersContext)
  const { pageLoader } = useContext(PageLoaderContext)

  console.log(userPlants)

  return (
    <StyledDiv>
      {
        userPlants.map(plant => 
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