import React, { useEffect, useState } from 'react'
import { Form, FormControl } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import MovieCard from '../MovieCard/MovieCard';
import MovieList from '../MovieList/MovieList';
import './Search.css'

const Search = ({ SearchRating, List }) => {


    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = List.filter(elt =>
            elt.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <div>
            <div className='Search'>
                <Form className="d-flex">
                    <GoSearch size={25} style={{ fill: 'white' }} />
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="form-control form-control-sm ml-3 w-75"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </Form>
            </div>
            <div className='SearchRating'>
            {searchTerm ?  searchResults.map(item => <MovieCard item={item} />) : <MovieList list={List} />}
    
        </div>
        </div>
    )
}

export default Search
