import { useState } from "react"
import Tag from "./Tag"

import "./TaskForm.css"

const TaskForm = ({ setTask }) => {
  const [taskForm, setTaskForm] = useState({
    task: null,
    status: "todo",
    tags: [],
  })

  //* Handling input change
  const handlingInputchange = (e) => {
    const { name, value } = e.target

    setTaskForm((data) => {
      return { ...data, [name]: value }
    })
  }

  //* Check if tag is selected
  const tagIsSelected = (tag) => {
    return taskForm.tags.includes(tag)
  }

  //* Handling tag selection
  const selectTag = (tag) => {
    const tagAlreadySelected = tagIsSelected(tag)

    if (tagAlreadySelected) {
      const filteredTags = taskForm.tags.filter((tagV) => tagV != tag)

      setTaskForm((data) => {
        return { ...data, tags: filteredTags }
      })
    } else {
      setTaskForm((data) => {
        return { ...data, tags: [...data.tags, tag] }
      })
    }
  }

  //* Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    setTask((data) => [...data, taskForm])
  }

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            name="task"
            className="task_input"
            placeholder="Enter your task"
            onChange={handlingInputchange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="HTML" selectTag={selectTag} isSelected={tagIsSelected("HTML")} />
              <Tag tagName="CSS" selectTag={selectTag} isSelected={tagIsSelected("CSS")} />
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                isSelected={tagIsSelected("JavaScript")}
              />
              <Tag tagName="React" selectTag={selectTag} isSelected={tagIsSelected("React")} />
            </div>

            <div>
              <select name="status" id="" className="task_status" onChange={handlingInputchange}>
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              {/* form submit */}
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  )
}

export default TaskForm
