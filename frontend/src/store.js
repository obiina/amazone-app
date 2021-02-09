import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productsDetailsReducer } from './reducer/productReducer';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productsDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
     composeEnhancer(applyMiddleware(thunk)));
export default store; 