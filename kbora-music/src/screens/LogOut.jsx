import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/logout.css'

import image from '../assets/png/logo-no-background.png'

export default function LogOut
() {
    
    const logOut = () =>{
        console.log("logOut")
        localStorage.clear()
        window.location.reload()
    } 
    
    const navigate = useNavigate()
    const logOutCancel = () =>{
        navigate('/Library')
        console.log("Log out cancelled")
        
    }

  return (
    <div className='logout-container'>
        <div className='logout-box'>
            <img className='logout-img' src={image} alt="" />
            <h3 className='logout-txt'>Are you sure you want to Log Out</h3>
            <button className='logout-confirm logout-btn' onClick={logOut}>Yes</button>
            <button className='cancel-logout logout-btn' onClick={logOutCancel}>No</button>
        </div>
    </div>
  )
}
