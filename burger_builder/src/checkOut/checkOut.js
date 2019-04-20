import React from 'react';
import WithDiv from '../hoc/withDiv';
import Header from '../components/header/header';
import BurgerIngredients from '../components/containers/burgerIngredients';

const CheckOut = (props) =>{
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
        ingredients[param[0]] = +param[1];
    }
    return (<WithDiv>
                <Header/>
                <BurgerIngredients ingredients={ ingredients }/>
            </WithDiv>);
}

export default CheckOut;