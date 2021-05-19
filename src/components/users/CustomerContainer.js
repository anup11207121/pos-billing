import React, { useEffect, useState } from 'react'
import Customer from './Customers'
import CustomerList from './CustomerList'
import {startGetCustomers,startSingleCustomer} from '../../actions/customerAction'
import {useDispatch, useSelector} from 'react-redux'
import EditCustomers from './EditCustomers'

const CustomerContainer=()=>{
    const dispatch = useDispatch()
    const [toggle,setToggle]=useState(false)

    const customers=useSelector((state)=> state.bill.customers)
    const customerData=useSelector((state)=> state.bill.customerData)

    // useEffect(()=>{
    //     dispatch(startGetCustomers())
    // },[])

    const handleToggle=(values)=>{
        setToggle(values)
    }
    
    const handleEdit=(id)=>{
        //console.log('id',id)
        setToggle(true)
        dispatch(startSingleCustomer(id))
    }

    return (
        <div>
            {toggle && Object.keys(customerData).length > 0 ?  (
                <div>
                    <h1>Edit Customer</h1>
                    <EditCustomers 
                        toggle={toggle}
                        handleToggle={handleToggle}
                        {...customerData}    
                    />
                </div>
            ):(
                <div>
                    <h2>Add Customers</h2>
                    <Customer toggle={toggle}/>
                </div>

            )}
            
            <hr/>
            <CustomerList handleEdit={handleEdit}/>     
        </div>
    )
}

export default CustomerContainer