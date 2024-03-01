import { useState } from 'react';
import RunnerModal from './RunnerModal';

const RunnerCard = ({runner}) => {

  const [open, setOpen] = useState(false);

  const modalOpen = () => setOpen(true);

  const modalClose = () => setOpen(false);

  return (
    <div
      className='runnerCard'
    >
      <img
        src={runner.photo}
        alt={runner.name}
        onClick={modalOpen}
      />
      <RunnerModal 
        open={open}
        runner={runner}
        modalClose={modalClose}
      />
      <h2 onClick={modalOpen}>{runner.name}</h2>
    </div>
  );
}
 
export default RunnerCard;