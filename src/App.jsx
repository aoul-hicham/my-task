import "./App.css"
import TaskColumn from "./components/TaskColumn"
import TaskForm from "./components/TaskForm"
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

function App() {
  return (
    <div className="App">
      <TaskForm />
      <main className="app_main">
        <TaskColumn taskColumnName="Todo" taskColumnIcon={todoIcon} />
        <TaskColumn taskColumnName="Doing" taskColumnIcon={doingIcon} />
        <TaskColumn taskColumnName="Done" taskColumnIcon={doneIcon} />
      </main>
    </div>
  )
}

export default App
