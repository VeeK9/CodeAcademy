import { createPortal } from "react-dom";

const DeleteRunnerModal = ({runner, deleteModal, deleteRunner, deleteModalClose}) => {
  if(!deleteModal)return null
  return createPortal(
    <dialog
      onClick={() => deleteModalClose()}
    >
      <div
        className="deleteModal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <h1>Are you sure?</h1>
        <h1>Delete {runner.name}?</h1>
        <div
          className="adminButtons"
        >
          <button
            className="adminButton"
            onClick={() => deleteRunner(runner.id)}
          >
            Delete runner
          </button>
          <button
            className="adminButton"
            onClick={deleteModalClose}
          >
            Cancel
          </button>
        </div>
        <i 
          onClick={() => deleteModalClose()}
          className="bi bi-x-circle"
        />
      </div>
    </dialog>,
    document.querySelector('#portal')
  )
}
 
export default DeleteRunnerModal;