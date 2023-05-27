import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import Form from '../Form/Form';
import styles from './TodoApp.module.css';

const TodoApp = () => {

    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (todo) => {
        setTodos((prevState) => [...prevState, todo]);
    }

    const toggleCompleted = (todoId) => {
        setTodos((prevState) => prevState.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    }

    const deleteTodo = (todoId) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
    }

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <section className={styles['todo-app']}>
            <Form addTodo={addTodo}/>
            <TodoList
                todos={todos}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
            />
      </section>
    )
}

export default TodoApp;
