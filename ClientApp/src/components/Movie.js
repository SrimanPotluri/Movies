import React, { Component } from 'react';
import { Input, Button, InputGroup, DropdownToggle, ButtonDropdown, DropdownMenu, InputGroupAddon, InputGroupText, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const Movie = ({ titleName, releaseYear, overview }) =>

    <div className="movie">
        <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80"/>
        <div className="movie-info">
        <h3>
           {titleName}
            </h3>
            <span>{releaseYear}</span>
        </div>
        <div className="movie-over">
            <h4>Overview:</h4>
            <p>dsgbffsd;uiohdsu;h;uoifashg;o</p>
        </div>
    </div>;


export default Movie;