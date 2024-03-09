import { useState } from "react"
import "./App.css"
import TaskColumn from "./components/TaskColumn"
import TaskForm from "./components/TaskForm"
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

function App() {
  const [task, setTask] = useState([])

  return (
    <div className="App">
      <TaskForm setTask={setTask} />
      <main className="app_main">
        <TaskColumn taskColumnName="Todo" taskColumnIcon={todoIcon} task={task} status={"todo"} />
        <TaskColumn
          taskColumnName="Doing"
          taskColumnIcon={doingIcon}
          task={task}
          status={"doing"}
        />
        <TaskColumn taskColumnName="Done" taskColumnIcon={doneIcon} task={task} status={"done"} />
      </main>
    </div>
  )
}

export default App
