import React from 'react'
import video from '../assets/video/Olivillos.mp4'
import ReactPlayer from 'react-player'
import '../App.css'


//no pude hacer q la imagen no se deforme

function UncontrolledExample() {
  return (
    <ReactPlayer url={video}
      playing
      loop
        width='100vw'
        height='100%'
      />
  );
}

export default UncontrolledExample;