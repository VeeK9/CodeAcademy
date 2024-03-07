import styled from "styled-components";
import {v4 as uuid} from "uuid";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";
import FormContext from "../../../contexts/FormContext";
import TableGameCard from "../../UI/TableGameCard/TableGameCard";
import PageLoaderContext from "../../../contexts/pageLoaderContext";

const StyledSection = styled.section`
  > h1 {
    font-size: 2rem;
    text-align: center;
  }
  > div {
    display: flex;
    gap: 20px;
    justify-content: center;
    > form {
      display: flex;
      flex-direction: column;
      width: 500px;
      > * {
        margin-block: 5px;
        padding: 5px 10px;
        border: 1px solid lightgrey;
        border-radius: 5px;
      }
      input:last-of-type {
        width: 120px;
        align-self: center;
        background-color: white;
        border-radius: 20px;
          cursor: pointer;
          &:hover {
            background-color: #efefef;
          }
      }
      > textarea {
        height: 5lh;
        resize: none;
        font-family: 'Helvetica';
      }
    }
  }
`

const AddNewTableGamePage = () => {

  const { addNewTableGame } = useContext(TableGamesContext);
  const { formInputs, setFormInputs } = useContext(FormContext);
  const { setPageLoader } = useContext(PageLoaderContext);
  
  const onChangeF = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    })
  }
  
  const addNewTableGameSubmit = e => {
    e.preventDefault();
    
    const newTableGame = {
      id: uuid(),
      pavadinimas: formInputs.pavadinimas,
      nuotrauka: formInputs.nuotrauka,
      zaidejai: {
        kiekisNuo: Number(formInputs.kiekisNuo),
        kiekisIki: Number(formInputs.kiekisIki),
        amziusNuo: Number(formInputs.amziusNuo)
      },
      aprasymas: formInputs.aprasymas
    }
    console.log(newTableGame)
    addNewTableGame(newTableGame);
    setPageLoader('cards');
    setFormInputs({
      pavadinimas: "",
      nuotrauka: "",
      kiekisNuo: "",
      kiekisIki: "",
      amziusNuo: "",
      aprasymas: ""
    })
  }

  return (
    <StyledSection>
      <h1>Add New Table Game</h1>
      <div>
        <form
          onSubmit={addNewTableGameSubmit}
        >
          <input
            type="text"
            name="pavadinimas"
            id="pavadinimas"
            placeholder="Zaidimo pavadinimas"
            value={formInputs.pavadinimas}
            onChange={onChangeF}
          />
          <input
            type="url"
            name="nuotrauka"
            id="nuotrauka"
            placeholder="Zaidimo paveiksliuko URL"
            value={formInputs.nuotrauka}
            onChange={onChangeF}
          />
          <input
            type="number"
            name="kiekisNuo"
            id="kiekisNuo"
            placeholder="Minimalus zaideju kiekis"
            value={formInputs.kiekisNuo}
            onChange={onChangeF}
          />
          <input
            type="number"
            name="kiekisIki"
            id="kiekisIki"
            placeholder="Maksimalus zaideju kiekis"
            value={formInputs.kiekisIki}
            onChange={onChangeF}
          />
          <input
            type="number"
            name="amziusNuo"
            id="amziusNuo"
            placeholder="Minimalus zaideju amzius"
            value={formInputs.amziusNuo}
            onChange={onChangeF}
          />
          <textarea
            type="text"
            name="aprasymas"
            id="aprasymas"
            placeholder="Trumpas zaidimo aprasymas"
            value={formInputs.aprasymas}
            onChange={onChangeF}
          />
          <input
            type="submit"
            value="Prideti zaidima"
            onChange={addNewTableGameSubmit}
          />
        </form>
        <TableGameCard 
          game={{
            pavadinimas:formInputs.pavadinimas,
            nuotrauka:formInputs.nuotrauka,
            zaidejai:{
              kiekisNuo:formInputs.kiekisNuo,
              kiekisIki:formInputs.kiekisIki,
              amziusNuo:formInputs.amziusNuo
            },
            aprasymas:formInputs.aprasymas
          }}
        />
      </div>
    </StyledSection>
  );
}
 
export default AddNewTableGamePage;