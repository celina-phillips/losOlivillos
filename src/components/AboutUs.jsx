import React from 'react'
import imgCasa1 from '../assets/casa1.jpeg'
import styles from '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className='contenedor'>
        <div className='texto'>
            <h2>About Us</h2>
            <img src={imgCasa1} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rerum officia vitae velit sunt numquam ullam voluptatum repellendus qui. Amet delectus odio saepe itaque quasi cum iste! Ab, consequuntur! Itaque.</p>
    </div>
  )
}

export default AboutUs