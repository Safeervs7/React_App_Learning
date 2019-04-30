import React from 'react';
import WithDiv from '../hoc/withDiv';
import Header from '../components/header/header';
import BurgerIngredients from '../components/containers/burgerIngredients';
import { Link } from "react-router-dom";
import CheckOutPrice from '../components/checkOut/checkOutPrice';
import { connect } from 'react-redux';

const CheckOut = (props) =>{
    let ingredientsPrice = {
            Salad: 5,
            Bacon: 10,
            Cheese: 10,
            Meat: 15
        }
    for (var key in props.ings) {
        ingredientsPrice[key] = ingredientsPrice[key] * props.ings[key]
    }
    let totalPrice = 0;
    const transformPrice = Object.keys(ingredientsPrice).map((ingredientPrice)=>{
        totalPrice +=  ingredientsPrice[ingredientPrice];
        return <CheckOutPrice key = {ingredientPrice + ingredientsPrice[ingredientPrice]} item={ingredientPrice} price={ingredientsPrice[ingredientPrice]}/> ;
    })
    return (<WithDiv>
                <Header/>
                <BurgerIngredients ingredients={ props.ings }/>
                <WithDiv>
                    {transformPrice}
                    <CheckOutPrice item={"total price"} price={totalPrice}/>
                    <button><Link to={{ pathname: '/order-placed', query: { price: totalPrice }, noRedirect: false }}> order confirm </Link></button>
                    <button><Link to="/" > order cancel </Link></button>
                </WithDiv>
            </WithDiv>);
}

const ingredientsProps = (state) =>{
    return {
        ings: state.ingredients
    }
}

export default connect(ingredientsProps)(CheckOut);