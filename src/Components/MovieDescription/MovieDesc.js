
import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import './MovieDesc.css'

const MovieDesc = ({ match, list }) => {
    const movie = list.find(elt => elt.id == match.params.id)
    return (
        <div className='MovieDesc'>
           
            <iframe width="560" height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <Card style={{ width: '35rem' }} className="Description">
               
                    <Card.Img variant="top" src={movie.Url} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <ListGroup variant="flush">
    <ListGroup.Item className='d-flex'><h6>Rating:  </h6><ReactStars 
            count={5}
            value={movie.Rating}
            size={20}
            color2={'#ffd700'} />
                          </ListGroup.Item>
    <ListGroup.Item className='d-flex'><h6>Year:  </h6> {movie.year}</ListGroup.Item>
  </ListGroup>
                    
                         
                    <Link to="/"><Button variant="primary">Home</Button></Link>
                </Card.Body>

            </Card>
        </div>
    )
}

export default MovieDesc
