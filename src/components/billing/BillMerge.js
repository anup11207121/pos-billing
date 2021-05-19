import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startAddBill,clearBillCustData,clearCart} from '../../actions/customerAction'

const BillMerge=()=>{
    const dispatch=useDispatch()

    const cart=useSelector((state)=>{
        return state.bill.cart
    })

    const customerData=useSelector((state)=>{
        return state.bill.billCustomerData
    })

    const handleClick=(data=customerData,items=cart)=>{
        const formData={
            date : new Date(),
            customer : data.customers,
            lineItems : items.map((ele)=>{
                return {
                    product : ele.products._id,
                    quantity : ele.quantity
                }
            })
        }
        console.log('formData',formData)
        dispatch(startAddBill(formData))
        dispatch(clearBillCustData())
        dispatch(clearCart())
    }

    return (
        <div>
            <button onClick={()=>{
                handleClick(customerData,cart)
            }} className="btn btn-primary">Generate</button>
        </div>
    )
}

export default BillMerge