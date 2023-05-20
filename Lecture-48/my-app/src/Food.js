import React, {useState} from 'react';

const Food = (props) => {

    const [foodName, setFoodName] = useState(props.name);
    const [count, setCount] = useState(0);

    const foodClickHandler = () => {
        setCount(count+1)
        setFoodName(`Something Else ${count}`);
    }

    return (
      <article onClick={foodClickHandler} className="food-item">
          <img src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='this is a burger' />
            <h2>{foodName}</h2>
            <p>{props.description }</p>
          <h4>Rs. {props.price}</h4>
        </article>
    )
}

export default Food;