import React from 'react';
import './burger-ingredient.css';

const BurgerIngredient = (props) =>{
    let ingredient = null;
    switch(props.ingredient){
        case('BreadBottom') :
            ingredient = <div className='BreadBottom'></div>
            break;
        ;
        case('BreadTop') :
            ingredient = <div className='BreadTop'></div>
            break;
        ;
        case('Meat') :
            ingredient = <div className='Meat'></div>
            break;
        ;
        case('Cheese') :
            ingredient = <div className='Cheese'></div>
            break;
        ;
        case('Salad') :
            ingredient = <div className='Salad'></div>
            break;
        ;
        case('Bacon') :
            ingredient = <div className='Bacon'></div>
            break;
        ;
        default:
            ingredient = <div>please choose anything</div>
        break;
    }
    return ingredient;
}

export default BurgerIngredient;