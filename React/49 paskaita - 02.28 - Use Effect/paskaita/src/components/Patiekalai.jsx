import Patiekalas from "./Patiekalas";

const Patiekalai = ({ dishes, statusChange, deleteDish }) => {
  return (
    <section id="ourDishes">
      <h1>Musu patiekalai</h1>
      <div>
        {
          dishes.map(dish =>
            <Patiekalas
              deleteDish={deleteDish}
              statusChange={statusChange}
              key={dish.id}
              dish={dish}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default Patiekalai;