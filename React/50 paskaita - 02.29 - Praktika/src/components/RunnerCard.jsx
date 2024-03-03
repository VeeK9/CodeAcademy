import { useState } from 'react';
import RunnerModal from './RunnerModal';
import EditRunnerModal from './EditRunnerModal';
import DeleteRunnerModal from './DeleteRunnerModal';

const RunnerCard = ({ runner, follow, deleteRunner, user, loggedIn, editRunner, editRunnerForm, setEditRunnerForm }) => {

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  const [editModal, setEditModal] = useState(false);
  const editModalOpen = () => setEditModal(true);
  const editModalClose = () => setEditModal(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const deleteModalOpen = () => setDeleteModal(true);
  const deleteModalClose = () => setDeleteModal(false);

  return (
    <div
      className='runnerCard'
    >
      <RunnerModal
        open={open}
        follow={follow}
        runner={runner}
        user={user}
        editRunner={editRunner}
        loggedIn={loggedIn}
        deleteRunner={deleteRunner}
        modalClose={modalClose}
      // editModal={editModal}
      // deleteModal={deleteModal}
      // editModalOpen={editModalOpen}
      // editModalClose={editModalClose}
      // deleteModalOpen={deleteModalOpen}
      // deleteModalClose={deleteModalClose}
      // setNewRunnerForm={setNewRunnerForm}
      // newRunnerForm={newRunnerForm}
      />
      <img
        src={runner.photo}
        alt={runner.name}
        onClick={modalOpen}
      />
      <h2 onClick={modalOpen}>{runner.name}</h2>
      {
        loggedIn ?
          (user.type === "admin" ?
            <>
              <span
                className='bi bi-pencil'
                onClick={editModalOpen}
              />
              <EditRunnerModal
                runner={runner}
                editModal={editModal}
                editRunner={editRunner}
                editModalOpen={editModalOpen}
                editModalClose={editModalClose}
                setEditRunnerForm={setEditRunnerForm}
                editRunnerForm={editRunnerForm}
              />
              <span
                className='bi bi-trash'
                onClick={deleteModalOpen}
              />
              <DeleteRunnerModal
                runner={runner}
                deleteModal={deleteModal}
                deleteRunner={deleteRunner}
                deleteModalOpen={deleteModalOpen}
                deleteModalClose={deleteModalClose}
              />
            </> :
            runner.followed &&
            <span
              className='bi bi-star-fill'
            />
          ) :
          <></>
      }
    </div>
  );
}

export default RunnerCard;