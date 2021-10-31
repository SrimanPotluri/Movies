import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router';
import Movies from './components/Movies';

import './custom.css'

const App = () => {
    return <Container><Movies/></Container>
}

export default App;
