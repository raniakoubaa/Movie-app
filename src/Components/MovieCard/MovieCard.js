import React from 'react'
import { Card } from 'react-bootstrap'
import './MovieCard.css'
import StarRatingComponent from "react-rating-stars-component";
import ReactStars from 'react-stars'

const MovieCard = ({ item }) => {
  return (
    <div className='MovieCard'>

      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={item.Url} />
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text> {item.year}</Card.Text>

          <ReactStars
            count={5}
            value={item.Rating}
            size={24}
            color2={'#ffd700'} />
        </Card.Body>
      </Card>
      {/* <div className="movie-overview">
          <h4> Description</h4>
          <p>{item.description}</p>
        </div> */}
    </div>
  )
}

export default MovieCard
