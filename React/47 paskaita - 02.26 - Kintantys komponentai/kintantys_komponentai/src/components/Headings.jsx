import Heading from "./Heading";

const Headings = ({stuff:tekstai}) => {

  return (
    <>
      {/* <Heading
        text='Labas rytas'
      />
      <Heading
        text='Pietu metas'
         />
      <Heading
        text='Geros dienos'
         />
      <Heading
        text='Labanaktis'
         /> */}
    {
      tekstai.map((el, i) => {
        return <Heading
          key={i}
          text={el}
          />
      })
    }
    </>
  );
}
 
export default Headings