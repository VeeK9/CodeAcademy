import styled from "styled-components";

const StyledArticle = styled.article`
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  justify-content: center;
  /* box-sizing: border-box; */
  padding: 10px;
  column-gap: 10px;
  overflow: hidden;
  background-color: white;
  > h2 {
    grid-column-start: 2;
    text-align: center;
  }
  > img {
    grid-row-start: 1;
    grid-row-end: span 2;
    width: 100%;
    height: 300px;
    display: block;
    object-fit: cover;
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