import { createPortal } from "react-dom";

const EditRunnerModal = ({ runner, editModal, editRunner, editModalClose, editRunnerForm, setEditRunnerForm, editting, setEditting }) => {
  
  
      const newFastestTimes = {};
      if (editRunnerForm.fastestTimes.length > 0) {
        editRunnerForm.fastestTimes.split(';').forEach(time => {
          newFastestTimes[time.split('-')[0]] = time.split('-')[1]
        })
      }
    
      let newNotableWins = [];
      if (editRunnerForm.notableWins.indexOf(';') > 0){
        editRunnerForm.notableWins.split(';').forEach(win => {
          if(win.startsWith('\n')){
            newNotableWins.pop(win.substring(2))
          } else {
            newNotableWins.pop(win)
          }
        });
      } else {
        newNotableWins = editRunnerForm.notableWins
      }
      
      let newHonors = [];
      if (editRunnerForm.honors.indexOf(';') > 0){
        editRunnerForm.honors.split(';').forEach(honor => {
          if(honor.startsWith('\n')){
            newHonors.pop(honor.substring(2))
          } else {
            newHonors.pop(honor)
          }
        });
      } else {
        newHonors = editRunnerForm.honors
      }
  const editRunnerFormSubmit = e => {
    e.preventDefault();
  

    const editedRunner = {
      id: runner.id,
      name: editRunnerForm.name,
      photo: editRunnerForm.photo,
      country: editRunnerForm.country,
      shoes: editRunnerForm.shoes,
      watch: editRunnerForm.watch,
      fastestTimes: newFastestTimes,
      notableWins: newNotableWins,
      honors: newHonors,
      followed: runner.followed
    }
    editRunner(editedRunner);
    editModalClose()
  }
  console.log(editRunnerForm);
  console.log(newFastestTimes);
  console.log(newNotableWins);
  console.log(newHonors);

  const handleInputChange = (e) => {
    setEditRunnerForm({
      ...editRunnerForm,
      [e.target.name]: e.target.value
    })
  };

  if (!editModal) return null
  return createPortal(
    <dialog
      className="editDialog"
      onClick={editModalClose}
    >
      <div
        className="editModal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <img
          src={runner.photo}
          alt={runner.name}
        />
        <h1>{runner.name}</h1>
        <form
          className="runnerForm"
          onSubmit={editRunnerFormSubmit}
        >
          <div
            className="inputWithLabel"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={editRunnerForm.name}
              onChange={e => handleInputChange(e)}
            />
          </div><br />
          <div
            className="inputWithLabel"
          >
            <label htmlFor="photo">Photo URL:</label>
            <input
              type="url"
              name="photo"
              id="photo"
              value={editRunnerForm.photo}
              onChange={e => handleInputChange(e)}
            />
          </div><br />
          <div
            className="inputWithLabel"
          >
            <label htmlFor="name">Country:</label>
            <input
              type="text"
              name="country"
              id="country"
              value={editRunnerForm.country}
              onChange={e => handleInputChange(e)}
            />
          </div><br />
          <div
            className="inputWithLabel"
          >
            <label htmlFor="name">Running Shoes:</label>
            <input
              type="text"
              name="shoes"
              id="shoes"
              value={editRunnerForm.shoes}
              onChange={e => handleInputChange(e)}
            />
          </div><br />
          <div
            className="inputWithLabel"
          >
            <label htmlFor="name">Running Watch:</label>
            <input
              type="text"
              name="watch"
              id="watch"
              value={editRunnerForm.watch}
              onChange={e => handleInputChange(e)}
            />
          </div><br />
          <label htmlFor="fastestTimes">Fastest known times:</label> <br />
          <textarea
            type="text"
            name="fastestTimes"
            id="fastestTimes"
            placeholder="e.g. 5k - 20:00; 10k - 42:00"
            value={editRunnerForm.fastestTimes}
            onChange={e => handleInputChange(e)}
          /><br />
          <label htmlFor="notableWins">Notable Wins:</label> <br />
          <textarea
            type="text"
            name="notableWins"
            id="notableWins"
            placeholder='e.g. Olympics Gold 5k - 2016, 2020; World Championship Indoor Track 10k - 2018'
            value={editRunnerForm.notableWins}
            onChange={e => handleInputChange(e)}
          /><br />
          <label htmlFor="honors">Mentionable honors:</label> <br />
          <textarea
            type="text"
            name="honors"
            id="honors"
            placeholder='e.g. World record 30min under water without air or smth'
            value={editRunnerForm.honors}
            onChange={e => handleInputChange(e)}
          /><br />
          <div
            className="adminButtons"
          >
            <input
              type="submit"
              value="Change"
              className="adminButton"
            />
            <button
              className="adminButton"
              onClick={editModalClose}
            >Cancel
            </button>
          </div>
        </form>
        <i
          onClick={editModalClose}
          className="bi bi-x-circle"
        />
      </div>
    </dialog>,
    document.querySelector('#portal')
  )
} 

export default EditRunnerModal;