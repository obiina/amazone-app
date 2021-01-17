import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Products from '../components/products';
import LoadingBox from '../components/LoadingBox';
import Messagebox from '../components/Messagebox';
export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        const { data } = await axios.get('api/products');
        setLoading(false);        
        setProducts(data);
      }catch (err){
        setError(err.message)
        setLoading(false);
      }     
    };
    fetchData();
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
