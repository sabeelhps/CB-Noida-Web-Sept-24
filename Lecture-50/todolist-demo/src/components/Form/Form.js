import React from 'react';
import styles from './Form.module.css';

const Form = () => {
    return (
        <form className={styles.form}>
          <label htmlFor='task'>Add Your Todos</label>
          <input id='task' type='text' placeholder='Add Todo' />
          <button>Add</button>
    </form>
  )
}

export default Form;