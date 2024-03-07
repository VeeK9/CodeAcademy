import styled from "styled-components";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";
import FormContext from "../../../contexts/FormContext";
import TableGameCard from "../../UI/TableGameCard/TableGameCard";
import PageLoaderContext from "../../../contexts/pageLoaderContext";
import { actionTypes } from "../../../contexts/TableGamesContext";

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
        width: 150px;
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
      > button {
        width: 150px;
        align-self: center;
        background-color: white;
        border-radius: 20px;
        cursor: pointer;
        &:hover {
          background-color: #efefef;
        }
      }
    }
  }
`

const EditTableGamePage = () => {

  const { setTableGames } = useContext(TableGamesContext);
  const { formInputs, onChangeF, resetFormInputs } = useContext(FormContext);
  const { setPageLoader } = useContext(PageLoaderContext);
  
  const editTableGameSubmit = e => {
    e.preventDefault();
    
    const editedTableGame = {
      id: formInputs.id,
      pavadinimas: formInputs.pavadinimas,
      pazymetas: formInputs.pazymetas,
      nuotrauka: formInputs.nuotrauka,
      zaidejai: {
        kiekisNuo: Number(formInputs.kiekisNuo),
        kiekisIki: Number(formInputs.kiekisIki),
        amziusNuo: Number(formInputs.amziusNuo)
      },
      aprasymas: formInputs.aprasymas
    }
    setTableGames({
      type: actionTypes.editFull,
      editedTableGame: editedTableGame

    });
    setPageLoader('korteles');
    resetFormInputs();
  }

  return (
    <StyledSection>
      <h1>Redaguoti zaidima</h1>
      <div>
        <form
          onSubmit={editTableGameSubmit}
        >
          <input
            type="text"
            name="pavadinimas"
            id="pavadinimas"
            placeholder="Zaidimo pavadinimas"
            value={formInputs.pavadinimas}
            onChange={onChangeF}
          />
          <div>
            <label
              htmlFor="pazymetas"
            >Ar esi zaides si zaidima?</label>
            <input
              type="checkbox" 
              name="pazymetas"
              id="pazymetas"
              checked={formInputs.pazymetas}
              onChange={onChangeF}
            />
          </div>
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
            value="Redaguoti zaidima"
          />
          <button
            onClick={() => {
              resetFormInputs();
              setPageLoader('korteles')
            }}
          >Grizti</button>
        </form>
        <TableGameCard 
          game={{
            pavadinimas:formInputs.pavadinimas,
            pazymetas:formInputs.pazymetas,
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
 
export default EditTableGamePage;