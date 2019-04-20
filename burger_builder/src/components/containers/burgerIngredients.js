import React, {Component} from 'react';
import BurgerIngredient from '../../components/burgerBuilder/burgerIngredient';
import WithDiv from '../../hoc/withDiv';

class BurgerIngredients extends Component{
    render(){
        let defaultNote = true;
        let ingredients = Object.keys(this.props.ingredients);
        let transformedIngredients = ingredients.map( (ingredient)=>{
            return [...Array(this.props.ingredients[ingredient])].map( (_,i) =>{
                defaultNote = false;
                return <BurgerIngredient key = {ingredient + i} ingredient = {ingredient}/>
            });
        });
        if(defaultNote){
            transformedIngredients = <BurgerIngredient key = "default" ingredient = "default"/>
        }
        return (
            <WithDiv>
                <BurgerIngredient ingredient = 'BreadTop'/>
                {transformedIngredients}
                <BurgerIngredient ingredient = 'BreadBottom'/>
            </WithDiv>
        )
    }
};

export default BurgerIngredients;