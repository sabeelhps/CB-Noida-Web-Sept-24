import React from 'react';
import Food from './Food';

const FoodList = () => {

    const foods = [
        {
            name: "Classic Veg",
            price: 100,
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            name: "Maharaja Mac",
            price: 200,
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            name: "Mac Egg",
            price: 300,
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            name: "Veg Whooer",
            price: 400,
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            name: "New Burger",
            price: 500,
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
    ]


    return (
      <section className="food-list">
            {
                foods.map((food, idx) => {
                    return <Food
                        key={idx}
                        name={food.name}
                        price={food.price}
                        description={ food.description}
                    />
                })
            }
      </section>
    )
}

export default FoodList