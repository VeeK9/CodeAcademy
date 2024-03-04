import Input from "../../atoms/input/Input";
import FormInput from "../../molecules/formInput/FormInput";

const RegForm = ({value, onChangeF}) => {
  return (
    <form>
      <FormInput 
        nameId="vardas"
        labelText="Vardas: "
        inputType="text"
        placeholderText="Vardenis..."
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="email"
        labelText="Elektroninis pastas: "
        inputType="email"
        placeholderText="vardPavard@gmail.com"
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="avatar"
        labelText="Profilio Nuotrauka: "
        inputType="url"
        placeholderText="https://www.____.png"
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="password"
        labelText="Slaptazodis: "
        inputType="password"
        placeholderText="Slaptas123..."
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="passwordRepeat"
        labelText="Slaptazodzio pakartojimas: "
        inputType="password"
        placeholderText="Slaptas123..."
        value={value}
        onChangeF={onChangeF}
      />
      <Input 
        type="submit"
        valueState="Registruotis"
      />
    </form>
  );
}
 
export default RegForm;