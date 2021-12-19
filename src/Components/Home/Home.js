import React from 'react'
import { Carousel } from 'react-bootstrap'

import './Home.css'


function Home() {
    return (
        <div>
            <Carousel className='Carousel'>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://m.media-amazon.com/images/M/MV5BMzMxMjllYTgtZWNjZS00ODc0LTljZWUtYjdiMDQ2ZDJkM2FkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://m.media-amazon.com/images/M/MV5BZDE1NWVjODItYTM0MS00MGJjLTkzMjctNTJjZjkwZDExYzNhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://m.media-amazon.com/images/M/MV5BNzQ5NzJjMDgtNzhjMC00NTQ2LTgzOTUtZThiMWMwYmYwMGYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

           
        </div>
    )
}

export default Home

