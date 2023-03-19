import React from 'react'
import video from '../assets/video/Olivillos.mp4'
import ReactPlayer from 'react-player'
import '../App.css'

import imgCasa2 from '../assets/casa2.jpeg'
import imgCasa3 from '../assets/casa3.jpeg'
import styles from '../styles/Carousel.css'

//no pude hacer q la imagen no se deforme

function UncontrolledExample() {
  return (
    <ReactPlayer url={video}
      
      playing
      loop
        width='100%'
        height='100%'
      />
  );
}

export default UncontrolledExample;