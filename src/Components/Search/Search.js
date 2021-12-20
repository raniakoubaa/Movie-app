import React from 'react'
import { Form, FormControl } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import ReactStars from 'react-stars';

import './Search.css'

const Search = ({ searchTerm, handleChange, ratingChanged}) => {

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
            <div className='star-search' >
               
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
            </div>
        </div>
    )
}

export default Search
