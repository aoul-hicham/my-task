import Tag from "./Tag"
import "./TaskCard.css"
import deleteIcon from "../assets/delete.png"

function TaskCard() {
  return (
    <article className="task_card">
      <p className="task_text">This is Sample Text.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="task_delete">
          <img className="delete_task_icon" src={deleteIcon}></img>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
