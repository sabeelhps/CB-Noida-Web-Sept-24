import React, { useState } from 'react'
import useFormInp from '../hooks/use-form-inp';

const Form = (props) => {

    const [name, setNameInp, resetNameInp] = useFormInp('');
    const [qty, setQtyInp, resetQtyInp] = useFormInp(0);

    // const nameChangeHandler = (e) => {
    //     setName(e.target.value);
    // }

    // const qtyChangeHandler = (e) => {
    //     setQty(e.target.value);
    // }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.addItem({ name: name, qty: qty });
        resetNameInp();
        resetQtyInp();
    }


    return (
          <form onSubmit={formSubmitHandler}>
              <label htmlFor="name">Name</label>
              <input onChange={setNameInp} type="text" id="name" placeholder="Enter your item name" value={name}/>
              <label htmlFor="qty" >Quantity</label>  
              <input onChange={setQtyInp} type="number" min="1" id="qty" placeholder='Quantity' value={qty}/>
              <button>Add!</button>
          </form>
    )
}

export default Form;