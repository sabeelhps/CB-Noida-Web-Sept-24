import React from 'react';

const Item = ({name, qty}) => {
  return (
      <li>
          <p>Name : {name}</p>
          <p>Qty : { qty }</p>
    </li>
  )
}

export default Item;