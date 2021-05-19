import React, {useState,useEffect } from 'react'
import NavBar from './NavBar'

const UserContainer=(props)=>{

    const [userLoggedIn,setUserLoggedIn]=useState(false)

  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn)
  }
  useEffect(()=>{
    if (localStorage.getItem('token')) {
        handleAuth()
    }
  },[])
  return (
   <div>
     {/* <h1>Hello</h1> */}
     <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
   </div> 
  )
    
}

export default UserContainer