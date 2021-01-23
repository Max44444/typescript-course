import React from 'react';
import { TodoListProps } from '../interfaces';

export const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onRemove, 
  onToggle 
}) => {
  if (todos.length === 0) {
    return <p className="center">There are no todos</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  }

  return (
    <ul>
      { todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('complited')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i 
                className="material-icons red-text" 
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      }) }
    </ul>
  )
}