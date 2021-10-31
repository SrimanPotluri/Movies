import React, { Component } from 'react';
import { Input, Button, InputGroup, DropdownToggle, ButtonDropdown, DropdownMenu, InputGroupAddon, InputGroupText, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const Movie = ({ titleName, releaseYear, overview }) =>

    <div className="movie">
        <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"/>
        <div className="movie-info">
        <h3>
           {titleName}
            </h3>
            <span>{releaseYear}</span>
        </div>
        <div className="movie-over">
            <h3>Overview:</h3>
            <p>Contemporary climate change involves rising global temperatures and significant shifts in Earth's weather patterns. Climate change is driven by emissions of heat-trapping greenhouse gases such as carbon dioxide and methane. Emissions come mostly from burning fossil fuels (coal, oil and natural gas), and also from agriculture, forest loss, cement production and steel making. Climate change causes sea level rise, glacial retreat and desertification, and intensifies heat waves, wildfires and tropical storms. These effects of climate change endanger food security, freshwater access and global health. Climate change can be limited by using low-carbon energy sources such as wind and solar energy, forestation, and shifts in agriculture. Adaptations such as coastline protection cannot by themselves avert the risk of severe, pervasive and irreversible impacts</p>
        </div>
    </div>;


export default Movie;