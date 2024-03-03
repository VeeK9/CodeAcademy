import AllRunners from "./AllRunners";
import Content from "./Content";
import Hero from "./Hero";

const Main = ({runners, user, follow, open, modalOpen, modalClose, deleteRunner, loggedIn, editRunner, addRunner, newRunnerForm, setNewRunnerForm, editRunnerForm, setEditRunnerForm}) => {
  return (
    <main>
      <Hero />
      {
        user.type === "user" &&
        <Content 
          open={open}
          modalOpen={modalOpen}
          modalClose={modalClose}
          follow={follow}
          user={user}
          loggedIn={loggedIn}
          deleteRunner={deleteRunner}
          runners={runners}
        />
      }
      <AllRunners 
        open={open}
        modalOpen={modalOpen}
        modalClose={modalClose}
        follow={follow}
        user={user}
        loggedIn={loggedIn}
        deleteRunner={deleteRunner}
        runners={runners}
        editRunner={editRunner}
        addRunner={addRunner}
        newRunnerForm={newRunnerForm}
        setNewRunnerForm={setNewRunnerForm}
        setEditRunnerForm={setEditRunnerForm}
        editRunnerForm={editRunnerForm}
      />
    </main>
  );
}
 
export default Main;