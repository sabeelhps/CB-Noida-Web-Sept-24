import Item from "./Item";
import Form from "./Form";
import { useState } from "react";

const ShoppingList = () => {

    const intialList = [
        {
            name: 'Apple',
            qty: 10
        },
        {
            name: 'Mangoes',
            qty: 5
        }
    ];


    const [list, setList] = useState(intialList);

    const addItem = (newItem) => {
        setList([...list, newItem]);
    }

    return <section>
        <Form addItem={addItem} />
        <ul>
        {
            list.map((item, idx) => {
                return <Item key={idx} name={item.name} qty={ item.qty} />
            })
        }
        </ul>
    </section>
}

export default ShoppingList;