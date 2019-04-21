import React from 'react';
import WithDiv from '../hoc/withDiv';
import CheckOutPrice from '../components/checkOut/checkOutPrice';

const OrderPlaced = (props) =>{
    return (<WithDiv>
                <CheckOutPrice item={"burger total"} price={props.history.location.query.price}/>
                <p>order is placed</p>
            </WithDiv>);
}

export default OrderPlaced;