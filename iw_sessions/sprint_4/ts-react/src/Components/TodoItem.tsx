import React from 'react'
import { ITodoItems } from './Todos'

function TodoItem({id,title,status}:ITodoItems) {
  return (
    <div>
      <span>{title}</span>
      <span>{`${id}-${status}`}</span>
    </div>
  )
}

export default TodoItem