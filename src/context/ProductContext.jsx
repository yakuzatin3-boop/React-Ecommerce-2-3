import React, { use } from 'react'
import { API } from '../data/API'
import { Children } from 'react';
import { createContext, useContext, useState, useEffect } from 'react'

export const ProductContext = createContext({});

function ProductProvider({children}) {

    // Store product data
    const [products, setProducts] = useState([]);
    // loading product 
    const [loading, setLoading] = useState(false);
    //that sour fetch product success ot not
    const [error, setError] = useState("");

    const [cart, setCart] = useState([]);

    const GetProducts = async ()=>{
            try{
                setLoading(true);
                setError(null);

                const respone = await fetch(API);

                if(!respone.ok){
                    throw new Error("Fail to get product");
                }

                const data = await respone.json();

                console.log("Product: ", data);

                setProducts(data);
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        const remove = async ()=>{
            
        } 

    useEffect(()=>{
         GetProducts();
    }, []);

  return (
    <ProductContext.Provider
    value={{
        products,
        setProducts,
        loading,
        error,
        GetProducts
    }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
