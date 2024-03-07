import { createPortal } from "react-dom";
import { useState } from "react";
import EventTimes from "./EventTimes"
import EditRunnerModal from './EditRunnerModal';
import DeleteRunnerModal from './DeleteRunnerModal';

const RunnerModal = ({ open, modalClose, runner, follow, deleteRunner, user, loggedIn, editRunner, editRunnerForm, setEditRunnerForm, editting, setEditting }) => {

  const fastestEvents = runner.fastestTimes ? Object.keys(runner.fastestTimes) : '';
  const fastestTimes = runner.fastestTimes ? Object.values(runner.fastestTimes) : '';

  const [editModal, setEditModal] = useState(false);
  const editModalOpen = () => setEditModal(true);
  const editModalClose = () => setEditModal(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const deleteModalOpen = () => setDeleteModal(true);
  const deleteModalClose = () => setDeleteModal(false);

  if (!open) return null
  return createPortal(
    <dialog
      onClick={() => modalClose()}
    >
      <div
        className="runnerModal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <img
          src={runner.photo}
          alt={runner.name}
        />
        <h1>{runner.name}</h1>
        {runner.country && <p>Country: {runner.country}</p>}
        {runner.shoes && <p>Shoes: {runner.shoes}</p>}
        {runner.watch && <p>Running watch: {runner.watch}</p>}
        {Object.keys(runner.fastestTimes).length > 0 ? <h4>Fastest Times:</h4> : <></>}
        {Object.values(runner.fastestTimes).length > 0 ?
          fastestEvents.map((e, i) =>
            <EventTimes
              key={i}
              event={`${e} - ${fastestTimes[i]}`}
            />
          ) : <></>
        }
        {runner.notableWins.length > 0 && <h4>Notable wins:</h4>}
        {runner.notableWins.length > 0 &&
          runner.notableWins.map((e, i) =>
            <EventTimes
              key={i}
              event={e}
            />
          )
        }
        {runner.honors.length > 0 && <h4>Honors:</h4>}
        {runner.honors.length > 0 &&
          runner.honors.map((e, i) =>
            <EventTimes
              key={i}
              event={e}
            />
          )
        }
        <br />
        {
          loggedIn ?
            user.type === "admin" ?
              <div
                className="adminButtons"
              >
                <button
                  className="adminButton"
                  onClick={() => deleteModalOpen()}
                >
                  <DeleteRunnerModal
                    runner={runner}
                    modalClose={modalClose}
                    deleteModal={deleteModal}
                    deleteRunner={deleteRunner}
                    deleteModalClose={deleteModalClose}
                  />
                  Delete runner
                </button>
                <button
                  className="adminButton"
                  onClick={() => {
                    setEditRunnerForm({
                      id: runner.id,
                      name: runner.name,
                      photo: runner.photo,
                      country: runner.country,
                      shoes: runner.shoes,
                      watch: runner.watch,
                      fastestTimes: runner.fastestTimes ? Object.values(runner.fastestTimes).map((el, i) => Object.keys(runner.fastestTimes)[i].concat('-', Object.values(runner.fastestTimes)[i], ';')).join('') : '',
                      notableWins: runner.notableWins.join(';\n'),
                      honors: runner.honors.join(';\n'),
                      followed: runner.followed
                    });
                    editModalOpen()
                  }}
                >
                  <EditRunnerModal
                    runner={runner}
                    editModal={editModal}
                    modalClose={modalClose}
                    editRunner={editRunner}
                    editModalClose={editModalClose}
                    setEditRunnerForm={setEditRunnerForm}
                    editRunnerForm={editRunnerForm}
                    editting={editting}
                    setEditting={setEditting}
                  />
                  Edit runner
                </button>
              </div> :
              <button
                onClick={() => follow(runner.id)}
              >
                {
                  runner.followed ?
                    "Unfollow" :
                    "Follow"
                }
              </button> :
            <></>
        }
        <i
          onClick={() => modalClose()}
          className="bi bi-x-circle"
        />
      </div>
    </dialog>,
    document.querySelector('#portal')
  );
}

export default RunnerModal;