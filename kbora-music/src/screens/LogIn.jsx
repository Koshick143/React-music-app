import React from 'react'
import '../screens/styles/login.css'
import { loginEndPoint } from '../Spotify'
import logo from '../assets/png/kbora-music-high-resolution-logo-black-transparent.png'

export default function LogIn() {
  return (
    <>
    <div className='login-box'>
      <h1 className='login-h1'>Welcome to K.Bora music WebApp</h1>
      <p className='login-p'>Used the api of Spotify</p>
        <img  className="login-logo" src={logo} alt="" />
        <h3 className='login-h3'>Click here to login with your spotify account</h3>
        <a className='login-btn' href={loginEndPoint}>Log In</a>
    </div>
    </>
  )
}
