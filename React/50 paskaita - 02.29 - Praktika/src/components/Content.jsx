import RunnerCard from "./RunnerCard";

const Content = ({runners, follow, open, modalOpen, modalClose, deleteRunner, user, loggedIn}) => {
  return (
    <section id="content">
      <h1>Your Followed Runners:</h1>
      <hr />
      <div className="cardsContainer">
        {
          runners.filter(runner => runner.followed).map(runner =>
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
            />
          )
        }
      </div>
    </section>
  );
}
 
export default Content;