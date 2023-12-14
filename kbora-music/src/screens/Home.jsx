import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Library from './Library'
import Feed from './Feed'
import Trending from './Trending'
import Player from './Player'
import Favorite from './Favorite'

export default function Home() {
  return (
    <Router>
        <div>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/Feed' element={<Feed/>}/>
            <Route path='/Trending' element={<Trending/>}/>
            <Route path='/Player' element={<Player/>}/>
            <Route path='/Favorite' element={<Favorite/>}/>
        </Routes>
        </div>
       
    </Router>
  )
}
