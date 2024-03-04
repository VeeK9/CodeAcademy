const Input = ({type, name, id, placeholder, valueState, onChangeF}) => {

  // console.log(valueState)

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={valueState[name]}
      onChange={e => onChangeF({
        ...valueState,
        [name]: e.target.value
      })}
    />
  );
}
 
export default Input;