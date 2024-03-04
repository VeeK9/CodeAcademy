import Heading from "../../UI/atoms/heading/Heading";
import RegForm from "../../UI/organisms/registrationForm/RegForm";

const RegFormPage = ({value, onChangeF}) => {
  return (
    <section>
      <Heading 
        text="Registracijos Forma"
      />
      <RegForm 
        value={value}
        onChangeF={onChangeF}
      />
    </section>
  );
}
 
export default RegFormPage;