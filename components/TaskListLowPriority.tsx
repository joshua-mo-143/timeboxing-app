import React, {SetStateAction} from 'react'
import TaskItem from './TaskItem'

type Props = {
    addTask: React.Dispatch<SetStateAction<boolean>>;
    data: Object[];
}

type Object = {
  id: number;
  title: string;
  highPriority: boolean;
}

const TaskListLowPriority = ({addTask, data}: Props) => {
  return (
    <div className="task-list"> 
        <h2 className='task-list-title'>Other tasks</h2>
        {data.filter(task => task.highPriority == false).map((task) => (
            <TaskItem title={task.title}/>
        ))}
        <button className='add-task-btn' onClick={() => addTask(true)}>Add a task</button>
    </div>
  )
}

export default TaskListLowPriority