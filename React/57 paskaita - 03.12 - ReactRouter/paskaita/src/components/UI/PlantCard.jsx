import { Link } from "react-router-dom";
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
    border-radius: 15px;
  }
  > h2 {
    margin-top: 0;
  }
  > button {
    margin-top: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
    cursor: pointer;
    background-color: white;
    > a {
      color: black;
      text-decoration: none;
    }
  }
`

const PlantCard = ({plant}) => {
  return (
    <StyledDiv>
      <h2>{plant.name}</h2>
      <img
        src={plant.photo ? plant.photo : "https://priyanthiv.files.wordpress.com/2019/01/soil-in-a-pot.jpg?w=640"}
        alt={plant.name}
      />
      {/* <p>{plant.description}</p> */}
      <button>
        <Link to={`/plants/${plant.id}`}>View more</Link>
      </button>
    </StyledDiv>
  );
}
 
export default PlantCard;