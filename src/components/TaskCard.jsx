import Tag from "./Tag"
import "./TaskCard.css"
import deleteIcon from "../assets/delete.png"

function TaskCard({ taskTitle, taskTags }) {
  return (
    <article className="task_card">
      <p className="task_text">{taskTitle}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {taskTags.map((name, index) => (
            <Tag tagName={name} key={index} isSelected />
          ))}
        </div>
        <div className="task_delete">
          <img className="delete_task_icon" src={deleteIcon}></img>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
