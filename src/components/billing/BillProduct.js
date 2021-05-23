import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {startGetProduct, addToCart} from '../../actions/customerAction'
import Select from 'react-select'


const BillProduct=(props)=>{
    const [name,setName]=useState('')
    const [price,setPrice] = useState('')
 

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetProduct())
    },[])
    const products=useSelector((state)=>{
        return state.bill.products
    })

    const options=products.map(ele=>({
        'value' : ele._id,
        'label' : ele.name
    }))

    
    const handleBlur=()=>{
        if(name!==''){
            setPrice(productData.price)
        }else{
            setPrice('')
        }
    }
    const productData=products.find((ele)=>{
        if(name===ele._id){
            return ele
        }
    })

    // console.log(productData)

    const handleOnChange=(e)=>{
        setName(e.value)
    }
    // console.log(name)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            products : productData,
            quantity : 1
        }
        dispatch(addToCart(formData))
        setPrice('')
        setName('')
    }
    
    return (
        <div class='container'>
            <form onSubmit={handleSubmit} class="form-horizontal justify-content-center">
            <div class="form-group form-group-sm">
            <div class='form-row'>

           <div class="col-lg-2 col-lg-offset-6">
            <Select
                options={options}
                placeholder='select product'
                onChange={handleOnChange}
                name='name'
                onBlur={handleBlur}
                isSearchable
                class="form-control"
            />
            </div>
                
            <div class="col-lg-2 col-lg-offset-6">
            <input 
                type='text'
                value={price}
                placeholder='price'
                onChange={handleOnChange}
                class="form-control"
            />
            </div>

            <div>
            <input 
                type='submit'
                value='Add to Cart'
                className="btn btn-primary"
            />
            </div>
            </div>
        </div>                   
     </form>  
 </div>
       
    )
}

export default BillProduct