import './index.css'

const TodoItem = props => {
  const {listItem, deleteFromState} = props
  const {title, id} = listItem

  const deleteTodo = () => deleteFromState(id)

  return (
    <li className="list-item">
      <p>{title}</p>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
