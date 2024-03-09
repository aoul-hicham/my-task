import TaskCard from "./TaskCard"
import "./TaskColumn.css"

const TaskColumn = ({ taskColumnName, taskColumnIcon, task, status }) => {
  return (
    <section className="task_column">
      <h2 className="test_column_heading">
        <img className="task_column_icon" src={taskColumnIcon} alt=""></img> {taskColumnName}
      </h2>

      {task.map(
        (taskData, index) =>
          taskData.status == status && (
            <TaskCard key={index} taskTitle={taskData.task} taskTags={taskData.tags} />
          )
      )}
    </section>
  )
}

export default TaskColumn
