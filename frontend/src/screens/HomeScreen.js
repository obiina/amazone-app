import React, { useEffect } from 'react'
import Products from '../components/products';
import LoadingBox from '../components/LoadingBox';
import Messagebox from '../components/Messagebox';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList  = useSelector((state) => state.productList);
  const {loading, error, products} = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [])

    return (
        <div>  
          {
            loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
            <Messagebox variant = "danger">{error}</Messagebox>
            ):(<div class="row center">
            {
              products.map(products => (
               <Products key={products._id} products={products}></Products>
              ))
            }
           </div>    
          )}
          
          
        </div>
    )
}
