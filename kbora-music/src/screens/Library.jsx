import React, { useEffect, useState } from 'react'
import './styles/library.css'
import { FaRegPlayCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import APIKit from '../../src/Spotify';

export default function Library() {
 const [playlist ,setPlaylist] = useState(null)

 useEffect(()=> {
  APIKit.get('me/playlists').then(function(response){
    setPlaylist(response.data.items)
 });

},[]);

const navigate = useNavigate()

const playPlaylist = (id) => {
    navigate('/Player',{state : {id: id}})
    console.log('ho raha hai')
}

  return (
    <div className='screen'>
     <div className='library-container'>
      {playlist?.map((list) => (
        <div key={list.id}onClick={()=> playPlaylist(list.id)} className='playlist-card'>
          <img className='playlist-img' src={list.images[0].url} alt="Playlist-Img" />
          <p className='playlist-title'>{list.name}</p>
          <p className='other-info'> {list.tracks.total} Songs </p>
          <div className='playlist-btn'> 
          <FaRegPlayCircle  style={{ color: '#A8DADC', fontSize:'2em' }}/> </div>
          </div>
     ) )}
      </div>
      
    </div>
  )
}
