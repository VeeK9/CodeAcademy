import RunnerCard from "./RunnerCard";

const Content = ({runners}) => {
  return (
    <section id="content">
      <h1>Best Runners:</h1>
      <hr />
      <div id="cardsContainer">
        {
          runners.map(runner => 
            <RunnerCard 
              key={runner.id}
              runner={runner}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default Content;