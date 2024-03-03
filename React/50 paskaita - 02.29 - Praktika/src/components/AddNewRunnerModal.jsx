import { createPortal } from "react-dom";

const AddNewRunnerModal = ({ addModal, addModalClose, addRunner, newRunnerForm, setNewRunnerForm }) => {
  if (!addModal) return null;

  const newRunnerFormSubmit = e => {
    e.preventDefault();

    const fastestTimes = {};
    newRunnerForm.fastestTimes.split(';').forEach(time => {
      fastestTimes[time.split('-')[0]] = time.split('-')[1]
    })

    const newRunner = {
      id: String(Date.now()),
      name: newRunnerForm.name,
      photo: newRunnerForm.photo,
      country: newRunnerForm.country,
      shoes: newRunnerForm.shoes,
      watch: newRunnerForm.watch,
      fastestTimes: fastestTimes ? fastestTimes : '',
      notableWins: newRunnerForm.notableWins.length > 0 ? newRunnerForm.notableWins.split(';') : [],
      honors: newRunnerForm.honors.length > 0 ? newRunnerForm.honors.split(';') : [],
      followed: false
    }
    addRunner(newRunner);
    addModalClose()

    setNewRunnerForm({
      name: '',
      photo: '',
      country: '',
      shoes: '',
      watch: '',
      fastestTimes: '',
      notableWins: [],
      honors: [],
      followed: false
    })
  }

  const handleInputChange = e => {
    const value = e.target.value
    setNewRunnerForm({
      ...newRunnerForm,
      [e.target.name]: value
    })
  }

  return createPortal(
    <dialog
      className="addDialog"
      onClick={addModalClose}
    >
      <div
        className="addModal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <img
          src={newRunnerForm.photo}
          alt={newRunnerForm.name}
        />
        <h1>Add New Runner</h1>
        <form
          className="runnerForm"
          onSubmit={newRunnerFormSubmit}
        >
          <div
            className="inputWithLabel"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              value={newRunnerForm.name}
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
              required
              placeholder="Photo URL"
              value={newRunnerForm.photo}
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
              placeholder="country"
              value={newRunnerForm.country}
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
              placeholder="shoes"
              value={newRunnerForm.shoes}
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
              placeholder="watch"
              value={newRunnerForm.watch}
              onChange={e => handleInputChange(e)}
            />
          </div><br />
          <label htmlFor="fastestTimes">Fastest known times:</label> <br />
          <textarea
            type="text"
            name="fastestTimes"
            id="fastestTimes"
            placeholder="e.g. 5k - 20:00; 10k - 42:00"
            value={newRunnerForm.fastestTimes}
            onChange={e => handleInputChange(e)}
          /><br />
          <label htmlFor="notableWins">Notable Wins:</label> <br />
          <textarea
            type="text"
            name="notableWins"
            id="notableWins"
            placeholder='e.g. Olympics Gold 5k - 2016, 2020; World Championship Indoor Track 10k - 2018'
            value={newRunnerForm.notableWins}
            onChange={e => handleInputChange(e)}
          /><br />
          <label htmlFor="honors">Mentionable honors:</label> <br />
          <textarea
            type="text"
            name="honors"
            id="honors"
            placeholder='e.g. World record 30min under water without air or smth'
            value={newRunnerForm.honors}
            onChange={e => handleInputChange(e)}
          /><br />
          <div
            className="adminButtons"
          >
            <input
              type="submit"
              value="Add"
              className="adminButton"
            />
            <button
              className="adminButton"
              onClick={addModalClose}
            >Cancel
            </button>
          </div>
        </form>
        <i
          onClick={addModalClose}
          className="bi bi-x-circle"
        />
      </div>
    </dialog>,
    document.querySelector('#portal')
  )
}

export default AddNewRunnerModal;