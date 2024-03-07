import AllRunners from "./AllRunners";
import Content from "./Content";
import Hero from "./Hero";

const Main = ({runners, user, follow, open, modalOpen, modalClose, deleteRunner, loggedIn, editRunner, addRunner, newRunnerForm, setNewRunnerForm, editRunnerForm, setEditRunnerForm, editting, setEditting}) => {
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
      {
        runners.length>0 ?
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
            editting={editting}
            setEditting={setEditting}
          /> :
          <img
          className="loadingGif"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="loading"
          />
      }
    </main>
  );
}
 
export default Main;