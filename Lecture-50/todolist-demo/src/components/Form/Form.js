import React, { useState, useRef } from 'react';
import styles from './Form.module.css';
import { v4 as uuid } from 'uuid';

const Form = (props) => {

    const taskInpRef = useRef();
    const [isValid, setIsValid] = useState(true);

    const formSubitHandler = (e) => {
        e.preventDefault();
        const inputTask = taskInpRef.current.value;
        
        if (inputTask.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.addTodo({
            id: uuid(),
            task: inputTask,
            completed: false
        });
        taskInpRef.current.value = "";
    }

    const inputChangeHandler = () => {
        const inputTask = taskInpRef.current.value;
        if (inputTask.trim().length>0 && !isValid) {
            setIsValid(true);
        }
    }

    return (
        <form onSubmit={formSubitHandler} className={styles.form}>
          <label htmlFor='task'>Add Your Todos</label>
          <input onChange={inputChangeHandler} className={!isValid ? styles['invalid-inp']: ''} id='task' type='text' placeholder='Add Todo' ref={taskInpRef} />
          <button>Add</button>
    </form>
  )
}

export default Form;