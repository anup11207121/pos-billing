import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {startGetCustomers, billCustData, setCustomerDetails} from '../../actions/customerAction'
import Select from 'react-select'

const BillForm=(props)=>{

    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetCustomers())
    },[])

    const customers=useSelector((state)=>{
        return state.bill.customers
    })

    const options=customers.map(ele=>({
        'value' : ele._id,
        'label' : ele.mobile
    }))

     const handleBlur=()=>{
         if(mobile!== ''){
    //         const data=addData(mobile)
             setName(customerData.name)
             setEmail(customerData.email)
        }else{
            setName('')
            setEmail('')
        }
    }

    const customerData=customers.find((ele)=>{
        if(mobile===ele._id){
            return ele 
        }
    })

    const handleOnChange=(e)=>{
            setMobile(e.value)
    }  

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            customers : mobile,
                ...customerData
        }
        setName('')
        setEmail('')
        // console.log('formData',formData)
        if(Object.values(customerData).includes('')!== true){
            dispatch(billCustData(formData))
        }else{
            alert('Enter the correct mobile number')
        }
    }
    return (
        <div class='container'>
            <form onSubmit={handleSubmit} class="form-horizontal justify-content-center">
                
            <div class="form-group form-group-sm">
            <div class='form-row'>
                
                <div class="col-lg-3 col-lg-offset-4">
                <Select 
                    options={options}
                    placeholder='select mobile'
                    onChange={handleOnChange}
                    name='mobile'
                    onBlur={handleBlur}
                    // getOptionLabel={(option)=>option.mobile}
                    isSearchable
                    class='form-control'
                /> 
                </div>      

                <div class="col-lg-3 col-lg-offset-4">
                <input 
                    type='text'
                    value={name}
                    name='name'
                    placeholder='enter customer name'
                    class="form-control"
                    onChange={handleOnChange} 
                />
                </div>

                <div class="col-lg-3 col-lg-offset-4">
                <input 
                    type='text'
                    value={email}
                    name='email'
                    placeholder='customer email'
                    class="form-control"
                    onChange={handleOnChange} 
                />
                </div>
                <input type='submit' value='Add' className="btn btn-primary" />
                </div>
                </div>
            </form>
        </div>
    )
}

export default BillForm