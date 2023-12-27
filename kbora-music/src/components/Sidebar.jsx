import React, { useEffect, useState } from 'react'
import '../screens/styles/sidebar.css'
import SideBarButton from './SideBarButton'

import { MdLibraryMusic } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import apiClient from '../Spotify';

export default function Sidebar() {
  const [image,setImage] = useState('https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  useEffect(() =>{
     apiClient.get("me").then((response)=>{
      setImage(response.data.images[0].url)
     }) 
  },[])

  const size = 25;

  return (
    <div className='side-bar'>
     <img  className="profile-img" src={image} alt='profileimg'/>

     <div>
      <SideBarButton title="Search" to="/Search" icon={< IoSearchSharp size={size}/>} />
      <SideBarButton title="player" to="/Player" icon={<TbPlayerPlayFilled size={size}/>} />
      <SideBarButton title="Library" to="/Library" icon={<MdLibraryMusic size={size}/>} />
     </div>
     <SideBarButton title="LogOut" to="/LogOut" icon={<CiLogout size={70}/>} />
    </div>
  )
}
