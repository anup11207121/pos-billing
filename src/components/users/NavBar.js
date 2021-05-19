import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import RegisterUser from './RegisterUser'
import LoginUser from './LoginUser'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import CustomerContainer from './CustomerContainer'
import ProductContainer from '../product/ProductContainer'
import BillConatiner from '../billing/BillContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar=(props)=>{
    const {userLoggedIn,handleAuth} = props
    return (
        <div className='container'>
            <ul className="nav justify-content-end">
                {userLoggedIn ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link active" to ='/dashboard'>Dashboard</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to = '/customers'>Customer</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/products'>Product</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to = '/billing'>Billing</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/profile'>Profile</Link></li>
                        <li className="nav-item">
                            <Link to='' className="nav-link active" onClick={()=>{
                                localStorage.removeItem('token')
                                alert('succesfully logged out')
                                handleAuth()
                                props.history.push('/')
                            }}>Logout</Link></li>   
                    </>
                ):(
                    <>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#" to ='/'>Home</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to ='/register'>Register</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to ='/login'>Login</Link></li>
                    </>
                )}        
            </ul>
        <Route path='/' component={Home} exact={true} />
        <Route path='/register' component={RegisterUser} exact={true} />
        <Route path='/login' render={(props)=>{
            return (
                    <LoginUser 
                        {...props}
                        userLoggedIn={userLoggedIn}
                        handleAuth={handleAuth} />
                    )
        }} />   
        <Route path='/dashboard' component={Dashboard} exact={true} />
        <Route path='/profile' component={Profile} exact={true} />
        <Route path='/customers' component={CustomerContainer} exact={true} />
        <Route path='/products' component={ProductContainer} exact={true} />
        <Route path='/billing' component={BillConatiner} exact={true} />
    </div>          
    )
}
export default withRouter(NavBar)