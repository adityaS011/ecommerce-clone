import React, { useEffect, useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';

import { updateQuantityIncrement, updateQuantityDecrement } from "../../redux/actions/cartActions";
// import { useParams } from "react-router-dom";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = (props) => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    // const {id} = useParams();
    const dispatch = useDispatch();

    const [ counter, setCounter ] = useState(1);

    const handleIncrement = (ev) => {
        setCounter(prev => prev + 1 );
        
        let product = cartItems.filter((val, index)=>{
            if(val.id === props.id){
                return true
            }
            return false
        })
        if(product){
            dispatch(updateQuantityIncrement(props.id, counter));
        }
    };

    const handleDecrement = (ev) => {
        if(counter < 1){
            setCounter(counter=>1)
        }
        else{
            setCounter(counter => counter - 1 );
            
        }
        let product = cartItems.filter((val, index)=>{
            if(val.id === props.id){
                return true
            }
            return false
        })
        if(product){
            dispatch(updateQuantityDecrement(props.id, counter));
        }
    };

    useEffect(()=>{
        setCounter(prev=>props.quantity)
    }, [props.quantity])

    return (
        <Component>
            <StyledButton onClick={(e) => handleDecrement(e)} disabled={counter === 1}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={(e) => handleIncrement(e)}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;