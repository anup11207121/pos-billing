import React, { useDebugValue, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useSelector,useDispatch } from 'react-redux'
import './invoice.css'
import { startGetCustomers, startGetProduct } from '../../actions/customerAction'


const Invoice=(props)=>{
    // const classes=useStyles()
    const {handleToggle} =props

    const dispatch=useDispatch()
    const billData=useSelector((state)=>{
        return state.bill.billData
    })
    const customer=useSelector((state)=>{
        return state.bill.customers
    })

    const product=useSelector((state)=>{
        return state.bill.products
    })

    useEffect(()=>{
        dispatch(startGetProduct())
        dispatch(startGetCustomers())
        
    },[])
    const customerName=customer.find((ele)=>{
        if(ele._id === billData.customer){
            return ele
        }  
    })
    console.log('customer',customerName)

    const lineItems=billData.lineItems

    console.log('lineItems',lineItems)

    // console.log('productname',productName)
     console.log( 'bill',billData)
    return(
        <div className='container'>
        <h1>Invoice</h1>
            <div class="wrapper">
                <div class="container bootstrap snippets bootdey">
                    <div class="row">
			            <div class="col-md-14">
				            <div class="invoice-wrapper">
					            <div class="intro">
                                      Hi <strong>{customerName.name}</strong>, 
                                    <br/>
                                    <p>This is the receipt for a payment of <strong>Rs-{billData.total}</strong> for your works</p>
                                </div>
                                <div class="payment-info">
						            <div class="row">
                                        <div class="col-sm-6">
                                            <span>Invoice No.</span>
                                            <strong>{billData._id}</strong>
                                        </div>
                                        <div class="col-sm-6 text-right">
                                            <span>Payment Date</span>
                                            
                                            <strong>{billData.date}</strong>
                        
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div>
                                    <table class='table' border='2'>
                                        <thead class='thead-light'>
                                            <tr>
                                                <th scope="col">Sl.No</th>
                                                <th scope="col">Decription</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {lineItems.map((ele,i)=>{
                                                return <tr key={ele._id} scope="row">
                                                        <td >{i+1}</td>
                                                        {product.map((data)=>{
                                                            return (ele.product===data._id &&(
                                                                <td>{data.name}</td>                                                                                                                 ))
                                                        })}
                                                        <td>{ele.quantity}</td>
                                                        <td>{ele.subTotal}</td>
                                                    </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                <div class="line-items">	
						<div class="total text-right">
                            <div class='col-md-12'>							
                            <p className='extra-notes'>
								<strong>Extra Notes</strong>:
								Please send all items at the same time to shipping address by next week.
								Thanks a lot.
							</p>
                            </div>
							<div class="field">
								Subtotal <span>{billData.total}</span>
							</div>
							<div class="field">
								Shipping <span>0.00</span>
							</div>
							<div class="field grand-total">
								Total <span>{billData.total}</span>
							</div>
						</div>

						<div class="print">
							<a href="#">
								<i class="fa fa-print"></i>
								Print this receipt
							</a>
						</div>
					</div>
                    
				</div>

				<div class="footer">
					Copyright © 2021. pos billing
                            </div>
                        </div>
                    </div>            
                 </div>
            </div>
            </div>
    )

}

export default Invoice