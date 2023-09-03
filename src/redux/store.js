import {applyMiddleware, combineReducers, legacy_createStore } from 'redux';

import thunk from 'redux-thunk';

import {composeWithDevTools } from 'redux-devtools-extension';

import { getProductsReducer , getProductDetailsReducer } from './reducers/productReducer';

import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart : cartReducer,

})

const middleware = [thunk];

const store =  legacy_createStore(

    reducer,
    composeWithDevTools(applyMiddleware(...middleware)) 


)

export default store ;

