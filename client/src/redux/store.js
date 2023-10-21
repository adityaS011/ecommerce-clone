import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {getProductDetailsReducer, getProductsReducer, getProductByTagReducer} from './reducers/productReducer';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducer'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    getProductByTag: getProductByTagReducer,
    cart: cartReducer
})

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}

const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;