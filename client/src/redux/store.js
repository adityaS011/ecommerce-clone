import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {getProductDetailsReducer, getProductsReducer} from './reducers/productReducer';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducer'
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk]
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;