import React from 'react';
import classes from './Todo.module.css';
import { BsTrash } from 'react-icons/bs';

const Todo = ({id, task, completed, toggleCompleted, deleteTodo}) => {
  return (
      <li className={classes['todo-item']}>
          <input onChange={()=> toggleCompleted(id)} type='checkbox' defaultChecked={completed} />
          <span className={completed ? classes.completed : ''}>{task}</span>
          <span onClick={()=>deleteTodo(id)} className={classes['delete-btn']}><BsTrash/></span>
    </li>
  )
}

export default Todo;