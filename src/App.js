import React,{useState} from 'react'
import UserContainer from './components/users/UserContainer'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
        <BrowserRouter>
          <UserContainer/>
        </BrowserRouter>
    </div>
  )
}

export default App
