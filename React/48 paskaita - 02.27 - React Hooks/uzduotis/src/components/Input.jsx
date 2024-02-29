const Input = ({addTask, setFormInput, formInput}) => {

  const submit = e => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      done: false,
      title: formInput
    });
    setFormInput('');
  }

  return (
    <form
      className="form"
      onSubmit={submit}
    >
      <h2>Your Tasks</h2>
      <div>
        <input
          type="text"
          placeholder="new task"
          required
          value={formInput}
          onChange={(e)=>{setFormInput(e.target.value)}}
        />
        <input
          type="submit"
          value="Add"
        />
      </div>
    </form>
  );
}
 
export default Input;