import React from 'react'
import imgCasa1 from '../assets/casa1.jpeg'
import imgCasa2 from '../assets/casa2.jpeg'
import imgCasa3 from '../assets/casa3.jpeg'
import styles from '../styles/Card.css'

const Cardd = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h3>{props.texto}</h3>  
        <button>ir a la casa</button> 
    </div>
  )
}

export default Cardd