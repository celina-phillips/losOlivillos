import React from 'react'
import video from '../assets/video/Olivillos.mp4'
import ReactPlayer from 'react-player'
import '../App.css'


//no pude hacer q la imagen no se deforme

function UncontrolledExample() {
  return (
    <>
      <ReactPlayer url={video}
          playing
          loop
          width='50%'
          height='50%%' />
      <div className='leyenda'>
      <h1>Los Olivillos</h1>
      <p>"Un lugar donde encontrar paz y tranquilidad, ideal para disfrutar en pareja o en familia"</p>
      </div>
      </>
  );
}

export default UncontrolledExample;