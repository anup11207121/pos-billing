import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startGetCustomers,startGetProduct,startGetBill} from '../../actions/customerAction'
import {startGetUser} from '../../actions/userAction'
import {Card} from 'react-bootstrap'


const Dashboard=(props)=>{

    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(startGetCustomers())
        dispatch(startGetProduct())
        dispatch(startGetUser())
        dispatch(startGetBill())
    },[])

    const customers=useSelector((state)=>{
        return state.bill.customers
    })
    const products=useSelector((state)=>{
        return state.bill.products
    })
    const bills=useSelector((state)=>{
        return state.bill.billing
    })

    
    const subTotal=()=>{
        let count=0
        const total=bills.map((ele)=>{
            count+=ele.total
        })
        return count
        console.log(count)
    }
    

    return (


        <div className='container'>

            <div className='col-mb-3'>
                {/* <h2>Total No of Customers -{customers.length}</h2> */}
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Total Customers</Card.Title>
                        <Card.Text>
                            <h2>{customers.length}</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>    
            <div className='col-mb-3'>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Total Products</Card.Title>
                        <Card.Text>
                            <h2>{products.length}</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
             <div>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Total Bills</Card.Title>
                        <Card.Text>
                            <h2>{bills.length}</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Aggregate Bill Amount</Card.Title>
                        <Card.Text>
                            <h2>{subTotal()}</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>    
        
    )
}
export default Dashboard