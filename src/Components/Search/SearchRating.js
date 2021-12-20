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

  // useEffect(() => {
  //   const results = List.filter(elt =>
  //     elt.Rating === SearchRating
  //   );
  //   setSearchResults(results);
  // }, [SearchRating]);

  useEffect(() => {
    List = List.filter(elt =>
      elt.Rating === SearchRating)
    }, [SearchRating]);
  return (
    <div>
      
      <div className='SearchRating'>
        { <MovieList list={List} /> }</div>
       

    </div>
  )
}

export default SearchRating
