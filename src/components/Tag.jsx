import "./Tag.css"

const Tag = ({ tagName, selectTag, isSelected }) => {
  const tagStyles = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    Default: { backgroundColor: "#f9f9f9" },
  }
  return (
    <button
      type="submit"
      className="tag"
      style={isSelected ? tagStyles[tagName] : tagStyles["Default"]}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  )
}

export default Tag
