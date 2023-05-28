import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({todos, toggleCompleted,deleteTodo}) => {
    return (
        <ul className={styles['todo-list']}>
            {
                todos.map((todo) => {
                    return <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                    />
                })
            }
      </ul>
    )
}

export default TodoList