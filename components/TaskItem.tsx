import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMultiply} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type Props = {
    title?: string;
    key?: number;
}

const TaskItem = ({title, key}: Props) => {
  const [active, setActive] = React.useState<boolean>(false);
    const [complete, setComplete] = React.useState<boolean>(false);

    const handleDelete = () => {
      let toDelete = document.querySelector(`#task-${key}`);
      toDelete?.remove();
    }

  return (
    <div className='task-item' id={`task-${key}`} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
    <p>{title}</p>
    <div className="task-options">
    {active ? <FontAwesomeIcon icon={faMultiply} className="remove-task-btn" onClick={handleDelete}/> : ""}
    <input type="checkbox" className='task-checkbox' checked={complete} onChange={(e) => setComplete(e.target.checked)}/>
    </div>
    </div>
  )
}

export default TaskItem