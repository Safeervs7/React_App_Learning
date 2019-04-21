import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
import BurgerBuilder from './burgerBuilder/burgerBuilder';
import ErrorPage from './components/errorPage/errorPage';
import CheckOut from './checkOut/checkOut';
import OrderPlaced from './orderPlaced/orderPlaced';

class App extends Component {
  render() {
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: "?" + new URLSearchParams({test:1, test2:2, test3: 4})
    // })
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/checkout" exact component={CheckOut} />
              <Route path="/order-placed" exact component={OrderPlaced} />
              <Route component={ErrorPage} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
