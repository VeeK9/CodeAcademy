import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PlantsContext from "../../contexts/PlantsContext";
import UserContext from "../../contexts/UserContext";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    max-width: 800px;
  }
  > img {
    width: 70%;
    max-height: 700px;
    aspect-ratio: unset;
  }
  > div {
    display: flex;
    gap: 20px;
    > button {
      margin-top: 20px;
      align-self: center;
      padding: 5px 10px;
      border: 1px solid lightgray;
      border-radius: 10px;
      cursor: pointer;
      background-color: white;
      &:hover {
        background-color: #b8deb8;
      }
      > a {
        color: black;
        text-decoration: none;
      }
    }
  }
`

const PlantPage = () => {

  const {id}= useParams();
  const [plant, setPlant] = useState({});
  const {deletePlant} = useContext(PlantsContext);
  const {loggedInUser} = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    console.log(id)
    fetch(`http://localhost:8080/plants/${id}`)
      .then(res => res.json())
      .then(data => setPlant(data))
      .catch(err => navigate('/erroras'))
      // eslint-disable-next-line
  }, [])

  const deleteThis = () => {
    deletePlant(id)
    navigate('/plants')
  }

  return (
    <StyledSection>
      {
        loggedInUser.type === "admin" ?
        <div>
          <button>
            <Link to={`edit`}>Edit</Link>
          </button>
          <button
            onClick={deleteThis}
          >
            Delete
          </button>
        </div> : null
      }
      {
        plant ? 
        <>
          <h2>{plant.name}</h2>
          <img
            src={plant.photo}
            alt={plant.name}
          />
          <p>{plant.description}</p>
        </> :
        null
      }
    </StyledSection>
  );
}
 
export default PlantPage;