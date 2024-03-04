import { createPortal } from "react-dom";
import { useRef } from "react";

const EditRunnerModal = ({ runner, editModal, editRunner, editModalClose, editRunnerForm, setEditRunnerForm }) => {
  const runnerRef = useRef(runner)

  // console.log(editRunnerForm)

  const existingFastestTimes = runner.fastestTimes ? Object.values(runner.fastestTimes).map((el, i) => Object.keys(runner.fastestTimes)[i].concat('-', Object.values(runner.fastestTimes)[i], ';').split(',')) : '';


  const editRunnerFormSubmit = e => {
    e.preventDefault();

    const fastestTimes = {};
    if (editRunnerForm.fastestTimes.length > 0) {
      editRunnerForm.fastestTimes.split(';').forEach(time => {
        fastestTimes[time.split('-')[0]] = time.split('-')[1]
      })
    }

    const editedRunner = {
      id: runner.id,
      name: editRunnerForm.name,
      photo: editRunnerForm.photo,
      country: editRunnerForm.country,
      shoes: editRunnerForm.shoes,
      watch: editRunnerForm.watch,
      fastestTimes: fastestTimes,
      notableWins: new Array (editRunnerForm.notableWins),
      honors: new Array(editRunnerForm.honors),
      followed: false
    }
    editRunner(editedRunner);
    editModalClose()

    setEditRunnerForm({
      id: runnerRef.current.id,
      name: runnerRef.current.name,
      photo: runnerRef.current.photo,
      country: runnerRef.current.country,
      shoes: runnerRef.current.shoes,
      watch: runnerRef.current.watch,
      fastestTimes: runnerRef.current.fastestTimes,
      notableWins: runnerRef.current.notableWins,
      honors: runnerRef.current.honors,
      followed: runnerRef.current.followed
    })
  }

  const handleInputChange = (e) => {
    setEditRunnerForm({
      ...runnerRef.current,
      [e.target.name]: e.target.value
    })
  };

  // console.log('alio');

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
              onChange={e => setEditRunnerForm({
                ...editRunnerForm,
                name: e.target.value
              })}
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
            value={existingFastestTimes}
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