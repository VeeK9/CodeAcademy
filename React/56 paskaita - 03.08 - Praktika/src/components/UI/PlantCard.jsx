import styled from "styled-components";

const StyledArticle = styled.article`
  display: grid;
  grid-template: auto auto / 60% 40%;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  column-gap: 10px;
  overflow: hidden;
  border: 1px solid black;
  > h2 {
    grid-column-start: span 2;
    text-align: center;
  }
  > img {
    max-width: 300px;
    display: block;
    margin: 0;
  }
`

const PlantCard = ({ plant }) => {
  return (
    <StyledArticle>
      <h2>{plant.name}</h2>
      <img
        src={plant.photo}
        alt={`${plant.name} picture`}
      />
      <p>{plant.description}</p>
    </StyledArticle>
  );
}
 
export default PlantCard;