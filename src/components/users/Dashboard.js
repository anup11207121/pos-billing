import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startGetCustomers,startGetProduct} from '../../actions/customerAction'
import {startGetUser} from '../../actions/userAction'
import {Card} from 'react-bootstrap'


const Dashboard=(props)=>{

    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(startGetCustomers())
        dispatch(startGetProduct())
        dispatch(startGetUser())
    },[])

    const customers=useSelector((state)=>{
        return state.bill.customers
    })
    const products=useSelector((state)=>{
        return state.bill.products
    })
    
    return (


        <div className='container'>
            <div className='row'>
            {/* <h1>Dashboard</h1> */}
            <div class ='col-lg-6 mb-4'>
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
            <div>
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
        </div>    
        </div>
    )
}
export default Dashboard