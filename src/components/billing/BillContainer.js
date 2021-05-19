import React, { useEffect, useState } from 'react'
import BillForm from './BillForm'
import BillProduct from './BillProduct'
import Cart from './Cart'
import BillMerge from './BillMerge'
import BillList from './BillList'
import {startGetBill, startSingleBill} from '../../actions/customerAction'
import {useDispatch,useSelector} from 'react-redux'
import Invoice from './Invoice'
import {Modal,Button} from 'react-bootstrap'

const BillConatiner=(props)=>{
    const [toggle,setToggle]=useState(false)
    const dispatch=useDispatch()

    const billing=useSelector((state)=>{
        return state.bill.billing
    })

    const billData=useSelector((state)=>{
        return state.bill.billData
    })

    const cart=useSelector((state)=>{
        return state.bill.cart
    })
    useEffect(()=>{
        dispatch(startGetBill())
    },[])

    const handleToggle=(value)=>{
        setToggle(value)
    }

    const handleInvoice=(id)=>{
        setToggle(true)
        dispatch(startSingleBill(id))
    }

    return (
        <div>
            <h1>Billing</h1>
            {/* <AddBill/> */}
            <BillForm />
            <BillProduct/>
            {cart.length > 0 ?(
            <div>
                 <Cart />
                <BillMerge />
            </div>
            ):(
                <div>
                     <Cart />
                </div>
            )}
            <hr/>
            <div>
            <BillList handleInvoice={handleInvoice}/>
            {toggle && Object.keys(billData).length>0
                        ? (
                            
                            <Modal
                                    isOpen={handleToggle}
                                    onRequestClose={handleToggle}
                                    contentLabel="My dialog"
                                    >
                                     <div>My modal dialog.</div>
                                
                                    <Invoice handleToggle={handleToggle}/>
                             </Modal>    
                        
                        ):(
                            <div>
                                No Bills Added
                            </div>
                        )
            }
            </div>
           
        </div>
    )
}

export default BillConatiner