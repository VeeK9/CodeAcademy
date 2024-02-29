import { useState } from "react";
import DeleteDialog from "./DeleteDialog";
import ListItem from "./ListItem";

const Patiekalas = ({ dish, statusChange, deleteDish }) => {

  const deleteButtonClasses = ["bi", " bi-x"];

  const [dialog, setDialog] = useState(false);

  const openDialog = () => {
    setDialog(true)
  }

  const closeDialog = () => {
    setDialog(false)
  }

  return (
    <div
      className={`dishCard ${dish.ragautas ? 'green' : 'red'}`}
      // style={{backgroundColor: `${dish.ragautas ? 'green' : 'red'}`}}
    >
      <h3>{dish.pavadinimas}</h3>
      <img
        src={dish.nuotrauka}
        alt={dish.pavadinimas}
      />
      <div>
        <p>Kilmes salis: {dish.kilmesSalis}</p>
        <p>Ingredientai:</p>
        <ul>
          {
            dish.ingredientai.map((ing, i) => 
              <ListItem 
                key={i}
                text={ing}
              />
              )
          }
        </ul>
        <p>Kainos ribos: {dish.kaina.nuo}&euro; - {dish.kaina.iki}&euro;</p>
        <div>
          <label htmlFor={`ragautas${dish.id}`}>Esu ragaves si patiekala: </label>
          <input
            type="checkbox"
            id={`ragautas${dish.id}`}
            checked={dish.ragautas}
            onChange={() => statusChange(dish.id)}
          />
          <label htmlFor={`ragautas${dish.id}`}/>
        </div>
      </div>
      <i 
        onClick={() => 
          // <DeleteDialog 
          //   deleteDish={deleteDish}
          //   id={dish.id}
          //   open={open}
          //   closeDialog={closeDialog}
          // />
          deleteDish(dish.id)
        }
        className={deleteButtonClasses}
      />
    </div>
  );
}
 
export default Patiekalas;