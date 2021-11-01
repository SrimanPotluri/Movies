import React, { Component, useEffect, useState } from 'react';
import { Input, Button, InputGroup, DropdownToggle, ButtonDropdown, DropdownMenu, InputGroupAddon, InputGroupText, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Movie  from './Movie';
import axios from 'axios';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getMovieInfo = (e) => {

        e.preventDefault();
        if (searchTerm) {
            axios.get('/api/titles', {
                params: {
                    searchTerm: searchTerm
                }, headers: {
                    "Access-Control-Allow-Origin": '*'
                }
            }).then((res) => {
                if (res.data.result && res.data.result.length > 0) {
                    const data = res.data.result;
                    console.log(data);
                    setMovies(data);
                }
            });

            setSearchTerm("");
        }
        
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setMovies([]);
    }

    return (
            <>       
                
            <header>
                <form onSubmit={getMovieInfo}>
                    <input type="text" placeholder="search..." className="search" value={searchTerm} onChange={handleInputChange} />
                </form>
                </header>
                <div className="movie-container">
               

                    {movies.length > 0 && movies.map(movie =>
                        <Movie key={movie.titleId} {...movie}/>
                    )}
                </div>
            </>        
    );
}

export default Movies;
