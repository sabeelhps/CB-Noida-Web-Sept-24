import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount((prevState) => prevState + 1);
        }, 1000)
        
    }, []);

    return (
        <div>
            Timer
            <h1>{count} : { count }</h1>
      </div>
    )
}

export default Timer