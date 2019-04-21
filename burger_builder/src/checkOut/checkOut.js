import React from 'react';
import WithDiv from '../hoc/withDiv';
import Header from '../components/header/header';
import BurgerIngredients from '../components/containers/burgerIngredients';
import { Link } from "react-router-dom";
import CheckOutPrice from '../components/checkOut/checkOutPrice';

const CheckOut = (props) =>{
    let ingredientsPrice = {
            Salad: 5,
            Bacon: 10,
            Cheese: 10,
            Meat: 15
        }
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
        ingredientsPrice[param[0]] = ingredientsPrice[param[0]] * param[1];
        ingredients[param[0]] = +param[1];
    }
    let totalPrice = 0;
    const transformPrice = Object.keys(ingredientsPrice).map((ingredientPrice)=>{
        totalPrice +=  ingredientsPrice[ingredientPrice];
        return <CheckOutPrice key = {ingredientPrice + ingredientsPrice[ingredientPrice]} item={ingredientPrice} price={ingredientsPrice[ingredientPrice]}/> ;
    })
    return (<WithDiv>
                <Header/>
                <BurgerIngredients ingredients={ ingredients }/>
                <WithDiv>
                    {transformPrice}
                    <CheckOutPrice item={"total price"} price={totalPrice}/>
                    <button><Link to={{ pathname: '/order-placed', query: { price: totalPrice } }}> order confirm </Link></button>
                    <button><Link to="/" > order cancel </Link></button>
                </WithDiv>
            </WithDiv>);
}

export default CheckOut;