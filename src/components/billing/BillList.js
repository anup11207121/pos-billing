import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {startGetBill,startDeleteBill,startSingleBill} from '../../actions/customerAction'
import Invoice from './Invoice'

const BillList=(props)=>{
    const {handleInvoice}=props
    const dispatch=useDispatch()

   const billing=useSelector((state)=>{
        return state.bill.billing
   })

//    console.log(billing)

    const customerData=useSelector((state)=>{
        return  state.bill.customers
    })
    const productData=useSelector((state)=>{
       return  state.bill.products
    })

    useEffect(()=>{
        dispatch(startGetBill())
    },[])

    const handleDelete=(id)=>{
        const confirm=window.confirm('Are you sure')
        if(confirm){
            dispatch(startDeleteBill(id))
        }
    }
    return (
        <div>
            total no of bills -{billing.length}
            <table class='table'>
                <thead class='thead-dark'>
                    <tr>
                        <th scope="col">Sl.No</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {billing.map((ele,i)=>{
                        return  <tr key={ele._id}>
                            <td scope="row">{i+1}</td>
                            {customerData.map((data)=>{
                                return (
                                    data._id===ele.customer && (
                                        <td key={data._id}>{data.name}</td>
                                    )
                                )
                            })}
                            <td>{ele.total}</td>
                            <td><button onClick={()=>{
                                handleInvoice(ele._id)
                            }} class="btn btn-primary">View</button></td>

                            <td><button onClick={()=>{
                                handleDelete(ele._id)
                            }} class="btn btn-danger">Delete</button></td>

                        </tr>
                    })}
                    
                </tbody>
            </table> 

            
             {/* <ul>
                {billData.map((data)=>{
                    return  <li>{data.customer}</li>
                })}
            </ul> */}
        </div>
    )
}

export default BillList