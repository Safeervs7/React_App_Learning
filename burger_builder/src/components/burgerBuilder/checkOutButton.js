import WithDiv from '../../hoc/withDiv';
import React from 'react';
import { Link } from "react-router-dom";

const checkOutButton = (props)=>{
    return (
        <WithDiv>
            <button><Link to={{
                pathname:'/checkout',
                }}>Order now</Link></button>
            {/* <button onClick= {props.clicked}>testing</button> */}
        </WithDiv>
    );
}


export default (checkOutButton);