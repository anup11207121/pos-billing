import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import {useDispatch, useSelector} from 'react-redux'
import {addProduct, startGetProduct,startSingleProduct} from '../../actions/customerAction'

const ProductContainer=(props)=>{
   
    const [toggle,setToggle]=useState(false)
    const dispatch=useDispatch()
    const products=useSelector((state)=>{
        return state.bill.products
    })
    const productData=useSelector((state)=>{
        return state.bill.productData
    })
   
    useEffect(()=>{
        dispatch(startGetProduct())
    },[])
    
    const handleToggle=(values)=>{
        setToggle(values)
    }
    const handleEdit=(id)=>{
        setToggle(true)
        dispatch(startSingleProduct(id))
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <h2>Update Product</h2>
                    <AddProduct 
                        toggle={toggle}
                        handleToggle={handleToggle}
                        {...productData}
                    />
                </div>
            ):(
                <div>
                    <h2>Add Product</h2>
                    <AddProduct 
                        toggle={toggle}
                    />
                </div>
            )}
            
            <hr/>
            <ProductList handleEdit={handleEdit}/>
        </div>
    )
}

export default ProductContainer