import TaskCard from "./TaskCard"
import "./TaskColumn.css"

const TaskColumn = ({ taskColumnName, taskColumnIcon }) => {
  return (
    <section className="task_column">
      <h2 className="test_column_heading">
        <img className="task_column_icon" src={taskColumnIcon} alt=""></img> {taskColumnName}
      </h2>

      <TaskCard />
    </section>
  )
}

export default TaskColumn
