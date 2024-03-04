import label from "./label.module.css";

const Label = ({text, inputName}) => {

  const stilius = {
    fontSize: '32px'
  }

  return (
    <label className={label.colorRed} htmlFor={inputName} style={stilius}>{text}</label>
  );
}
 
export default Label;