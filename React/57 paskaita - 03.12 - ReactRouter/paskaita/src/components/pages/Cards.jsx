import { useContext } from "react";
import PlantsContext from "../../contexts/PlantsContext";
import PlantCard from "../UI/PlantCard";
import styled from "styled-components"

const StyledDiv = styled.div`
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: justify;
  gap: 10px;
`

const Cards = () => {

  const {plants} = useContext(PlantsContext)

  return (
    <section>
      <h1>All Plants</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eum repellat architecto reiciendis? Odio est culpa, maxime, vitae soluta voluptas et numquam voluptate placeat iure quae quis corrupti? Obcaecati, commodi.</p>
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
    </section>
  );
}
 
export default Cards;