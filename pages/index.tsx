import React from 'react'
import AddTaskForm from '../components/AddTaskForm'
import Layout from '../components/Layout'
import TaskListHighPriority from '../components/TaskListHighPriority'
import TaskListLowPriority from '../components/TaskListLowPriority'
import data from '../mockData';


export default function Home() {

  const [active, setActive] = React.useState<boolean>(false);
  const [taskData, setTaskData] = React.useState<any>(data);

  return (
    <Layout>
      {active ? <AddTaskForm taskData={taskData} setTaskData={setTaskData} setActive={setActive}/> : ""}
      <div className="page-wrapper">
      <div className="obj">
      <TaskListHighPriority addTask={setActive} data={taskData}/>
      <TaskListLowPriority addTask={setActive} data={taskData}/>
      </div>
      <div className="memes">
        <table>
          <tr>
            <th>e</th>
            <th>f</th>
            <th>g</th>
            <th>h</th>
          </tr>
        </table>
      </div>
      </div>
    </Layout>
  )
}
