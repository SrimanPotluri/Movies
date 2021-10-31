import React, { Component } from 'react';
import { Input, Button, InputGroup, DropdownToggle, ButtonDropdown, DropdownMenu, InputGroupAddon, InputGroupText, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { SearchTerm: null, Titles: [], loading: true };

    }

    searchHandler = (event) => {
        this.setState({
            SearchTerm: event.target.value,
            Titles: []
        });

        if (event.key == "Enter") {
            //call axios method
            this.GetMoviesData();
        }
       
    }

    onClickHandler = (event) => {

        event.preventDefault();

        this.setState({
            SearchTerm: event.target.value,
            Titles: []
        });

        this.GetMoviesData();
    }

    GetMoviesData = () => {
        axios.get('/api/titles', {
            params: {
                searchTerm: this.state.SearchTerm
            }, headers: {
                "Access-Control-Allow-Origin": '*'
            }
        })
            .then(res => {

                if (res.data.result && res.data.result.length > 0) {
                    const data = res.data.result;
                    console.log(data);
                    this.setState({ Titles: data, loading: false });
                }

                   

                
            });
    }


    static renderForecastsTable(movies) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>TitleId</th>
                        <th>TitleName</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie =>
                        <tr key={movie.titleId}>
                            <td>{movie.titleId}</td>
                            <td>{movie.titleName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = (this.state.loading)
            ? <p></p>
            : Home.renderForecastsTable(this.state.Titles);
        return (
            <div>
                <h4>Search your favourite movies !</h4>

                <div>
                    <InputGroup>
                        <Input placeholder="Search" onKeyPress={this.searchHandler} />
                        <Button onClick={this.onClickHandler}><FontAwesomeIcon icon={faSearch} /></Button>
                    </InputGroup>
                </div>

                { contents}

            </div>
        );
    }
}
