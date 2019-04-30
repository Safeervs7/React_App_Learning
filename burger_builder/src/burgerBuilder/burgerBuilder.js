import React, { Component } from 'react';
import BurgerIngredients from '../components/containers/burgerIngredients';
import ButtonControls from '../components/containers/buttonControls';
import Aux from '../hoc/aux';
import Header from '../components/header/header';
import CheckOutButton from '../components/burgerBuilder/checkOutButton';
import { connect } from 'react-redux';

class BurgerBuilder extends Component {
  addingIngredient = (props)=>{
    let ingredients = {...this.props.ings};
    let oldCount = ingredients[props];
    ingredients[props] = (oldCount + 1);
    this.setState({ingredients: ingredients});
  };
  removingIngredient = (props)=>{
      let ingredients = {...this.props.ings};
      let oldCount = ingredients[props];
      if((oldCount - 1) >= 0){
        ingredients[props] = (oldCount - 1);
        this.setState({ingredients: ingredients});
      }
  }
  render() {
    return (
        <Aux>
          <Header/>
          <BurgerIngredients ingredients={this.props.ings}/>
          <ButtonControls ingredients={this.props.ings} addingIngredient={this.props.addingIngredient} removingIngredient={this.props.removeIngredient}/>
          <CheckOutButton clicked={this.queryParams} ingredients={this.props.ings}/>
        </Aux>
    );
  }
}

const ingredientsProps = (state) =>{
    return {
        ings: state.ingredients
    }
}

const ingredientsAction = (dispatch) =>{
    return {
        addingIngredient:(ingredient) => dispatch({type: "ADD_INGREDIENT", ingredientName: ingredient}),
        removeIngredient:(ingredient) => dispatch({type: "REMOVE_INGREDIENT", ingredientName: ingredient}),
    }
}
export default connect(ingredientsProps, ingredientsAction)(BurgerBuilder);
