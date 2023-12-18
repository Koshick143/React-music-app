import React from 'react'
import '../screens/styles/sidebar.css'
import SideBarButton from './SideBarButton'

import { MdLibraryMusic } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { MdFeed } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className='side-bar'>
     <img  className="profile-img" src='https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='profileimg'/>

     <div>
      <SideBarButton title="Trending" to="/Trending" icon={<FaFire size={100} />} />
      <SideBarButton title="Feed" to="/Feed" icon={<MdFeed size={90}/>} />
      <SideBarButton title="player" to="/Player" icon={<TbPlayerPlayFilled size={100}/>} />
      <SideBarButton title="Liked" to="/Favorite" icon={<FcLike size={90}/>} />
      <SideBarButton title="Library" to="/Library" icon={<MdLibraryMusic size={80}/>} />
     </div>
     <SideBarButton title="LogOut" to="" icon={<CiLogout size={70}/>} />
    </div>
  )
}
