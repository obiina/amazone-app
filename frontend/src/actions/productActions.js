import { PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
      PRODUCT_LIST_FAIL,
       PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS, 
        PRODUCT_DETAILS_FAIL } from "../constants/productsConstants"
import Axios from "axios";

export const listProducts = () => async(dispatch) =>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
const {data} = await Axios.get('/api/products');
dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }catch(error){
dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})

    }
}


export const detailsProducts = (productId) => async(dispatch) =>{
    dispatch({
        type:PRODUCT_DETAILS_REQUEST,
         payload: productId });
    try{
        const{data} = await Axios.get(`/api/products/${productId}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});

    }catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:
            error.message});
    }
}