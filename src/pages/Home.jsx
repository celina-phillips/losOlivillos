import React from 'react'
import UncontrolledExample from '../components/UncontrolledExample'
import AboutUs from '../components/AboutUs'
import Cardd from '../components/Cardd'
import imgCasa1 from '../assets/casa1.jpeg'
import imgCasa2 from '../assets/casa2.jpeg'
import imgCasa3 from '../assets/casa3.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
        <UncontrolledExample/>  
        <div className='olivo'>
        <section className='divcasas'>
          <Cardd img = {imgCasa1} texto={"casa1"}/>
          <Cardd img = {imgCasa2} texto={"casa2"}/>
        </section>
        <section className='divcasas'>
          <Cardd img = {imgCasa3} texto={"casa3"}/>
          <Cardd img = {imgCasa3} texto={"casa3"}/>
        </section>
        <AboutUs/>
        </div>
    </div>
  )
}

export default Home