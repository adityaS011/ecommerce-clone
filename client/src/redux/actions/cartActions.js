import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';


const URL =  "https://mern-flipkart-clone.onrender.com";
export const addToCart = (id, quantity) => async (dispatch,getState) => {
    try { 
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message});

    }
};

export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
