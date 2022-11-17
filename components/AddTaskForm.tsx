import React, { SetStateAction } from 'react'

type Props = {
  taskData: Object[];
  setActive: React.Dispatch<SetStateAction<boolean>>;
  setTaskData: React.Dispatch<SetStateAction<Object[]>>
}

const AddTaskForm = ({taskData, setTaskData, setActive}: Props) => {

  const [desc, setDesc] = React.useState<string>("");
  const [highPriority, setHighPriority] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<string>("");

  const handleAddTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTaskData([...taskData, {
      id: taskData.length + 1,
      title: desc,
      highPriority: highPriority,
      date: date
    }]);
    setActive(false);
  }

    return (
    <div className='task-form-wrapper'>
        <form className="add-task-form-container" onSubmit={handleAddTask}>
          <label htmlFor="taskDesc">
          <span>Task description:</span>
          <input type="text" name="taskDesc" required value={desc} onChange={(e) => setDesc(e.target.value)} />
          </label>
          
          <label htmlFor="highPriority">
          <span>High priority?</span>
          <input type="radio" name="highPriority" checked={highPriority} onChange={(e) => setHighPriority(e.target.checked)}/>
          </label>

          <label htmlFor="">
          <span>Task date:</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          
          <button type="submit" className='form-submit'>Add Task</button>
        </form>
        
    </div>
  )
}

export default AddTaskForm