import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "./styles/home.css"
import Library from './Library'
import Feed from './Feed'
import Trending from './Trending'
import Player from './Player'
import Favorite from './Favorite'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <Router>
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
  )
}
