import styled from "styled-components"

const StyledDiv = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #fbf6f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  > img {
    width: 70%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
  > h2 {
    margin-top: 0;
  }
`

const PlantCard = ({plant}) => {
  return (
    <StyledDiv>
      <h2>{plant.name}</h2>
      <img
        src={plant.photo}
        alt={plant.name}
      />
      <p>{plant.description}</p>
    </StyledDiv>
  );
}
 
export default PlantCard;