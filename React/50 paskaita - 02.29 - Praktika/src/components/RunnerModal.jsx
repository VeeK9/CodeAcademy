import {createPortal} from "react-dom";
import EventTimes from "./EventTimes"

const RunnerModal = ({open, modalClose, runner}) => {

  const fastestEvents = Object.keys(runner.fastestTimes)
  const fastestTimes = Object.values(runner.fastestTimes)

  if(!open)return null
  return createPortal(
    <dialog
      open={open}
      onClick={() => modalClose()}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <img
          src={runner.photo}
          alt={runner.name}
        />
        <h1>{runner.name}</h1>
        <p>Country: {runner.country}</p>
        <p>Shoes: {runner.shoes}</p>
        <p>Running watch: {runner.watch}</p>
        <h4>Notable wins</h4>
        {
          runner.notableWins.map((e, i) =>
            <EventTimes
              key={i}
              event={e}
            />
          )
        }
        <h4>Fastest Times:</h4>
        {
          fastestEvents.map((e, i) => 
            <EventTimes
              key={i}
              event={`${e} - ${fastestTimes[i]}`}
             />
          )
        }
        <h4>Honors</h4>
        {
          runner.honors.map((e, i) =>
            <EventTimes
              key={i}
              event={e}
            />
          )
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