import Heading from "./Heading";
import Kortele from "./Kortele";

const Korteles = ({data:vietos}) => {
  return (
    <>
      <Heading 
        text='Lankytinos Lietuvos Vietos'
      />
      <div>
        {
          vietos.map(el => {
            return <Kortele 
              key={el.id}
              info={el}
            />
          })
        }
      </div>
    </>
  );
}
 
export default Korteles;