import React from 'react';
import classes from './Order.css';


const order = (props) => {
    
    let ingredients = [];

    for(let ingredientsName in props.ingredients){
        ingredients.push({
            name:ingredientsName, 
            amount: props.ingredients[ingredientsName]
        });
    }

    let ingredientOutput = ingredients.map(ig => {
        return <span 
            style={{
                textTransform:'capitalize', 
                display:'inline-block',
                border: '1px solid #ccc',
                margin: '0 8px',
                padding: '5px'
            }} 
            key={ig.name}>{ig.name}({ig.amount})
        </span>
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
    
}


export default order;