import React, {Component} from 'react';
import Comic from './comic';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Comics extends Component{
    constructor(props){
        super(props);
        this.state = {
            comics: []
        }

        Axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=471a3c70f2ca4042e27736410acb87c8').then((resp) => {
            let comicsFromServer = resp.data.data.results;
            console.log(comicsFromServer);
            this.setState({
                comics: comicsFromServer
            })
        })
    }

    render(){
        return <div>
            <Link to="/characters">Personajes</Link>
            <Link to="/">Home</Link>
            <h1>Estos son los comics</h1>
            {this.state.comics.map((comic, i) => <Comic {...comic} key={i}/>)}
        </div>
    }
}

export default Comics;