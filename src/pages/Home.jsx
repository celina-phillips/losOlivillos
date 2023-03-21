import React from 'react'
import UncontrolledExample from '../components/UncontrolledExample'
import AboutUs from '../components/AboutUs'
import { Link } from 'react-router-dom'
import Cardd from '../components/Cardd'
import imgCasa1 from '../assets/casa1.jpeg'
import imgCasa2 from '../assets/casa2.jpeg'
import imgCasa3 from '../assets/casa3.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
        <UncontrolledExample/>  
        <div className='grid'>
          <div className='one'>
           <Link to='/casa1' className='button' >Casa de piedra</Link>
          </div>
          <div className='two'>
          <Link to='/casa2' className='button' >Casa del puente</Link>
          </div>
        </div>
        <div className='grid-dos'>
          <div className='three'>
          <Link to='/casa3' className='button' >Casa occidiana</Link>
          </div>
          <div className='four'>
          <Link to='/casa4' className='button' >Casa 4</Link>
          </div>
        </div>
        <AboutUs/>
    </div>
  )
}

export default Home