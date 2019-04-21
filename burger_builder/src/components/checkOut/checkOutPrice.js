import React from 'react';
import Aux from '../../hoc/aux';

const CheckOut = (props) =>{
    return (<Aux>
                <p>{props.item} price is {props.price}</p>
            </Aux>);
}

export default CheckOut;