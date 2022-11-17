import React, { SetStateAction } from 'react'
import data from '../mockData'
import TaskItem from './TaskItem'

type Props = {
    addTask: React.Dispatch<SetStateAction<boolean>>;

    data: Object[]
}

type Object = {
  id: number;
  title: string;
  highPriority: boolean;
}

const TaskListHighPriority = ({addTask, data}: Props) => {

  return (
    <div className="task-list"> 
        <h2 className='task-list-title'>High Priority tasks</h2>
        {data.filter(task => task.highPriority == true).map((task) => (
            <TaskItem title={task.title} key={task.id}/>
        ))}
        <button className='add-task-btn' onClick={() => addTask(true)}>Add a task</button>
    </div>
  )
}

export default TaskListHighPriority