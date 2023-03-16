import Carousel from 'react-bootstrap/Carousel';
import imgCasa1 from '../assets/casa1.jpeg'
import imgCasa2 from '../assets/casa2.jpeg'
import imgCasa3 from '../assets/casa3.jpeg'
import styles from './Carousel.css'

//no pude hacer q la imagen no se deforme

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img"
          src={imgCasa1}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={imgCasa2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={imgCasa3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;