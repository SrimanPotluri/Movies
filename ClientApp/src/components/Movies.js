import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Bounce, toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movie from './Movie';
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
                else {
                    toast.info("Search returned 0 results", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000,
                        draggable: false,
                        pauseOnHover: false,
                        pauseOnFocusLoss: false,
                        transition: Bounce,
                        hideProgressBar: false,
                        rtl: false
                    });
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
                    <input type="text" placeholder="search movies" className="search" value={searchTerm} onChange={handleInputChange} />
                </form>
            </header>
            <div className="movie-container">
                {movies.length > 0 && movies.map(movie =>
                    <Movie key={movie.titleId} {...movie} />
                )}
            </div>
            <ToastContainer />
        </>
    );
}

export default Movies;
