// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoDetails, deleteTodo} = props
  const {title, id} = eachTodoDetails

  const deleteTodoItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="each-todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" onClick={deleteTodoItem} className="btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
