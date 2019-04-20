import React from 'react';
import WithDiv from '../../hoc/withDiv';
import './button-control.css';

const ButtonControl = (props) =>{
    return (<WithDiv class="buttonWrap">
                <p>{props.ingredient}</p>
                <button className="buttonControl" onClick={props.ingredientRemoved}>-</button>
                <button className="buttonControl" onClick={props.ingredientAdded}>+</button>
            </WithDiv>);
}

export default ButtonControl;