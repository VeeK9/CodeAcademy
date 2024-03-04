import stilius from "./heading.module.css";

const Heading = ({text}) => {
  return (
    <h1
      className={`${stilius.colorRed} ${stilius.centerText}`}>
      {text}
    </h1>
  );
}
 
export default Heading;