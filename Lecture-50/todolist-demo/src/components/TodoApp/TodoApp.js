import React from 'react';
import TodoList from '../TodoList/TodoList';
import Form from '../Form/Form';
import styles from './TodoApp.module.css';

const TodoApp = () => {

    const todos = [
        {
            id: 1,
            task: 'Go to market',
            completed: true
        },
        {
            id: 2,
            task: 'Learn React',
            completed: false
        },
        {
            id: 3,
            task: 'Learn Node',
            completed: true
        }
    ];


    return (
        <section className={styles['todo-app']}>
            <Form />
            <TodoList todos={ todos } />
      </section>
    )
}

export default TodoApp;