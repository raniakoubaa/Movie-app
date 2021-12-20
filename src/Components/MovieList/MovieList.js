import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({ list, SearchTitle, handlDelete }) => {

    return (
        <div>
            <div className='Movielist'>
                {list.map((elt, key) => <MovieCard item={elt} key={key} SearchTitle={SearchTitle} handlDelete={handlDelete}/>)}
            </div>

        </div>
    )
}

export default MovieList
