import React from 'react'
import { Carousel } from 'react-bootstrap'
import learningPlatform from '../img/learningPlatform.jpg'
import digital from '../img/digital.png'
import start from '../img/start.png'
import { useState } from 'react'

export default function CarouselComp () {
  const [images] = useState([
    { img: learningPlatform, id: 1 },
    { img: digital, id: 2 },
    { img: start, id: 3 }
  ])

  return (
    <Carousel className='mt-3'>
      {images.map(elem => (
        <Carousel.Item interval={3500} key={elem.id}>
          <img className='d-block w-100' src={elem.img} alt={`img №${elem.id}`}/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
