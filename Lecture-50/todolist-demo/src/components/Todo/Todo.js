import React from 'react';
import classes from './Todo.module.css';

const Todo = ({id, task, completed}) => {
  return (
      <li className={classes['todo-item']}>
          <input type='checkbox' defaultChecked={completed} />
          <span>{ task }</span>
    </li>
  )
}

export default Todo;