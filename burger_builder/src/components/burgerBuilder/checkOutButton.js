import WithDiv from '../../hoc/withDiv';
import React from 'react';
import { Link } from "react-router-dom";

const checkOutButton = (props)=>{
    const queryParams = [];
        for (let i in props.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ingredients[i]));
        };
    const queryString = queryParams.join('&');
    return (
        <WithDiv>
            <button><Link to={{
                pathname:'/checkout',
                search: '?' + queryString
                }}>Order now</Link></button>
            {/* <button onClick= {props.clicked}>testing</button> */}
        </WithDiv>
    );
}

export default checkOutButton;