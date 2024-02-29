const Thing = ({task, deleteTask, completeTask}) => {

  const trashClasses = ["bi"," bi-trash"]
  const doneClasses = ["bi"," bi-check"]
  const notDoneStyle = {
    visibility:"hidden"
  }

  return (
    <div className="tasks">
      <div
        className="task"
        onClick={e => {
          completeTask(task.id)
        }}
      >
        {task.done ?
        <h4>
          <div className="icon">
            <i
              className={doneClasses}
            />
          </div>
          <del>
            {task.title}
          </del> 
        </h4> :
        <h4>
          <div className="icon">
            <i
              className={doneClasses}
              style={notDoneStyle}
            />
          </div>
          {task.title}
        </h4>
        }
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <i
          className={trashClasses} 
        />
      </button>
    </div>
  );
}
 
export default Thing;