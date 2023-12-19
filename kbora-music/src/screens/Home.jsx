import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "./styles/home.css"
import Library from './Library'
import Feed from './Feed'
import Trending from './Trending'
import Player from './Player'
import Favorite from './Favorite'
import Sidebar from '../components/Sidebar'
import LogIn from './LogIn'

export default function Home() {
  const [token,setToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash ="";
    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token)
      setToken(_token)
    } 
    else{
      setToken(token)
    }
   
  },[])
  return  !token ? ( <LogIn/>):
   (<Router>
        <div  className='main-body'>
         
          <Sidebar/>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/Library' element={<Library/>}/>
            <Route path='/Feed' element={<Feed/>}/>
            <Route path='/Trending' element={<Trending/>}/>
            <Route path='/Player' element={<Player/>}/>
            <Route path='/Favorite' element={<Favorite/>}/>
        </Routes>
        </div>
       
    </Router>
  );
}
