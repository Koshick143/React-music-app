import React from 'react'
import  '../screens/styles/sidebarbutton.css'
import { Link, useLocation } from 'react-router-dom'

export default function SideBarButton(props) {


    const location = useLocation();
    const isActive = location.pathname=== props.to;
    const btnBody = isActive ? "btn-body active": "btn-body"
  return (
    <Link to={props.to}>
        <div className={btnBody} >
           
            {props.icon}  
            <p className='brn-title'>{props.title}</p>
          
        </div>
    </Link>
  )
}
