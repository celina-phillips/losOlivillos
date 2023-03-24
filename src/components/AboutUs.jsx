import React from 'react'
import imgCasa1 from '../assets/casa1.jpeg'
import styles from '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <h2>About Us</h2>
    <div className='contenedor'>
      <div className='texto'>
        <img src={imgCasa1} alt="" />
      </div>
      <div className='quienes'>
        <p>Los Olivillos Casas frente al mar</p>
      </div>
     
    </div>
    <div className='ubicacion'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.6361476523593!2d-58.48041595409467!3d-38.52942647892712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958f85c6068d9efd%3A0x3d270aed695ab116!2sLos%20Olivillos%20%7C%20Casas%20Frente%20al%20Mar!5e0!3m2!1ses!2sar!4v1679614943339!5m2!1ses!2sar" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </>
  )
}

export default AboutUs