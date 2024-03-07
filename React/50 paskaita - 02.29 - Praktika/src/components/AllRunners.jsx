import { useState } from "react";
import RunnerCard from "./RunnerCard";
import AddNewRunnerModal from "./AddNewRunnerModal";

const AllRunners = ({ runners, follow, open, modalOpen, modalClose, deleteRunner, user, loggedIn, editRunner, addRunner, newRunnerForm, setNewRunnerForm, editRunnerForm, setEditRunnerForm, editting, setEditting }) => {

  const [addModal, setAddModal] = useState(false);
  const addModalOpen = () => setAddModal(true);
  const addModalClose = () => setAddModal(false);

  return (
    <section id="allRunners">
      <h1>All Runners:</h1>
      <hr />
      <div className="cardsContainer">
        {
          runners.map(runner =>
            <RunnerCard
              open={open}
              deleteRunner={deleteRunner}
              modalOpen={modalOpen}
              modalClose={modalClose}
              key={runner.id}
              user={user}
              loggedIn={loggedIn}
              runner={runner}
              follow={follow}
              editRunner={editRunner}
              addRunner={addRunner}
              setEditRunnerForm={setEditRunnerForm}
              editRunnerForm={editRunnerForm}
              editting={editting}
              setEditting={setEditting}
            />
          )
        }
        {
          loggedIn && user.type === "admin" ?
            <div
              className="runnerCard"
              onClick={addModalOpen}
            >
              <AddNewRunnerModal
                addModal={addModal}
                addRunner={addRunner}
                newRunnerForm={newRunnerForm}
                setNewRunnerForm={setNewRunnerForm}
                addModalOpen={addModalOpen}
                addModalClose={addModalClose}
              />
              <img
                src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
                alt="new Runner"
              />
              <h2>Add new runner</h2>
            </div> :
            <></>
        }
      </div>
    </section>
  );
}

export default AllRunners;