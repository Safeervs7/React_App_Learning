import React, { Component } from 'react';
import BurgerIngredients from '../components/containers/burgerIngredients';
import ButtonControls from '../components/containers/buttonControls';
import Aux from '../hoc/aux';
import Header from '../components/header/header';
import CheckOutButton from '../components/burgerBuilder/checkOutButton';

class BurgerBuilder extends Component {
  state = {
    ingredients : {
        Salad: 1,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    }
  }
  // queryParams = ()=>{
  //   const queryParams = [];
  //       for (let i in this.state.ingredients) {
  //           queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
  //       }
  //   const queryString = queryParams.join('&');
  //   this.props.history.push({
  //     pathname: '/checkout',
  //     search: '?' + queryString
  //   });
  // }
  addingIngredient = (props)=>{
    let ingredients = {...this.state.ingredients};
    let oldCount = ingredients[props];
    ingredients[props] = (oldCount + 1);
    this.setState({ingredients: ingredients});
  };
  removingIngredient = (props)=>{
      let ingredients = {...this.state.ingredients};
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
          <BurgerIngredients ingredients={this.state.ingredients}/>
          <ButtonControls ingredients={this.state.ingredients} addingIngredient={this.addingIngredient} removingIngredient={this.removingIngredient}/>
          <CheckOutButton clicked={this.queryParams} ingredients={this.state.ingredients}/>
        </Aux>
    );
  }
}

export default BurgerBuilder;
