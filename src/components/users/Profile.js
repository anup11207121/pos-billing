import React, { useEffect } from 'react'
import {startGetUser} from '../../actions/userAction'
import {useDispatch,useSelector} from 'react-redux'
import {Card} from 'react-bootstrap'

const Profile=(props)=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetUser())
    },[])

    const user=useSelector((state)=>{
        return state.user
    })
     //console.log(user)
    return (
        <div>
            {
                user.map((ele)=>{
                    return(
                    <div>
                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>Profile Details</Card.Title>
                                <Card.Text>
                                    <h1>Admin Name - {ele.username}</h1>
                                    <h2>Email - {ele.email}</h2>
                                    <h3>Business Name - {ele.businessName}</h3>
                                    <h4>Address - {ele.address}</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Profile