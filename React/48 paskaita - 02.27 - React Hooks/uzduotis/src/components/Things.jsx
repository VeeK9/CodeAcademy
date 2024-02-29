import Thing from "./Thing";

const Things = ({tasks, deleteTask, completeTask}) => {
  return (
    <section id="tasks">
      {
        tasks.map(task =>
          <Thing 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )
      }
    </section>
  );
}
 
export default Things;
