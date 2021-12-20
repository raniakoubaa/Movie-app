import React from 'react'
import { Card } from 'react-bootstrap'
import './MovieCard.css'
import ReactStars from 'react-stars'
import {TiDeleteOutline} from 'react-icons/ti'

const MovieCard = ({ item, handlDelete }) => {
  return (
    <div className='MovieCard'>

      <Card style={{ width: '15rem' }}>
      <TiDeleteOutline size={25} onClick={()=>handlDelete(item.id)}/> 
        <Card.Img variant="top" src={item.Url} height="200px"/>
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text> {item.year}</Card.Text>
        <div className='star'>
          <ReactStars 
            count={5}
            value={item.Rating}
            size={24}
            color2={'#ffd700'} />
            </div>
        </Card.Body>
      </Card>

    </div>
  )
}

export default MovieCard
