import { useContext } from "react";
import PlantFormContext from "../../contexts/PlantFormContext";
import PlantsContext from "../../contexts/PlantsContext";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import styled from "styled-components"

const StyledSection = styled.section`
  > form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > input, textarea {
        width: 60%;
        padding: 5px 10px;
        border: 1px solid lightgray;
        border-radius: 10px;
      }
      > textarea {
        height: 3lh;
        resize: none;
      }
    }
    > input {
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
    }
  }
  > div {
    width: 300px;
    margin-top: 50px;
    margin-inline: auto;
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
  }
`

const AddNewPlant = () => {

  const navigate = useNavigate();
  const { plantFormInputs, onChangeFunc, resetPlantFormInputs } = useContext(PlantFormContext);
  const { addPlant } = useContext(PlantsContext);

  const newPlantFormSubmit = e => {
    e.preventDefault();

    const newPlant = {
      id: uuid(),
      name: plantFormInputs.name,
      photo: plantFormInputs.photo,
      description: plantFormInputs.description
    }

    addPlant(newPlant);
    resetPlantFormInputs();
    navigate('/plants');
  }

  return (
    <StyledSection>
      <h1>Add new plant to the list</h1>
      <form onSubmit={newPlantFormSubmit}>
        <div>
          <label htmlFor="name">Name of the plant:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Money Tree"
            value={plantFormInputs.name}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="photo">Plant photo URL:</label>
          <input
            type="url"
            name="photo"
            id="photo"
            placeholder="Paste the URL of the plant photo"
            value={plantFormInputs.photo}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="description">Short summary about the plant:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Money tree obviously grow money banknotes etc."
            value={plantFormInputs.description}
            onChange={onChangeFunc}
          />
        </div>
        <input
          type="submit"
          value="Add plant"
        />
      </form>
      <div>
        <h2>{plantFormInputs.name}</h2>
        <img
          src={plantFormInputs.photo}
          alt={plantFormInputs.name}
        />
        <p>{plantFormInputs.description}</p>
      </div>
    </StyledSection>
  );
};
 
export default AddNewPlant;