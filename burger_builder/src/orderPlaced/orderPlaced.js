import React, {Component} from 'react';
import WithDiv from '../hoc/withDiv';
import CheckOutPrice from '../components/checkOut/checkOutPrice';
import { Redirect } from 'react-router';
class OrderPlaced extends Component{
    state = {
        redirect: false
    }
    componentWillMount(){
        if(this.props.history.location.noRedirect === undefined){
            this.setState({redirect: true});
        }
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        return (<WithDiv>
                    <CheckOutPrice item={"burger total"} price={this.props.history.location.query.price}/>
                    <p>order is placed</p>
                </WithDiv>);
    }
}

export default OrderPlaced;