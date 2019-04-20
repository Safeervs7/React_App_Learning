import React, {Component} from 'react';
import WithDiv from '../../hoc/withDiv';
import ButtonControl from '../burgerBuilder/buttonControl';

class ButtonControls extends Component{
    render(){
        let ingredients = Object.keys(this.props.ingredients);
        const transformButtons = ingredients.map ( (ingredient) =>{
                return [...Array(this.props.ingredients[ingredients])].map((_, i)=>{
                    return  <ButtonControl key = {ingredient + i} ingredientAdded = {()=>this.props.addingIngredient(ingredient)} ingredientRemoved= {() =>this.props.removingIngredient(ingredient)} ingredient = {ingredient}/>
                })
            })
        return (
            <WithDiv>
                {transformButtons}
            </WithDiv>
        );
    }
}

export default ButtonControls;