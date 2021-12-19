import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import MovieCard from '../MovieCard/MovieCard';
import MovieList from '../MovieList/MovieList';
import './Search.css'

const SearchRating = ({ List }) => {
  const [SearchRating, setSearchRating] = useState(1)

    ;
  const ratingChanged = (newRating) => {
    setSearchRating(newRating)
    console.log(newRating)
  }
  // const onStarClick = (nextValue) => {
  //     setSearchRating(nextValue) 
  // }
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = List.filter(elt =>
      elt.Rating === SearchRating
    );
    setSearchResults(results);
  }, [SearchRating]);
  return (
    <div>
      <div className='star-search' >
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={'#ffd700'} />

      </div>
      <div className='SearchRating'>
        {searchResults.size !==0 ? <MovieList list={searchResults} /> : <h3> No Movie</h3> }</div>

    </div>
  )
}

export default SearchRating
