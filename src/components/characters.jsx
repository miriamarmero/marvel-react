import React, {Component} from 'react';
import Character from './character';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Characters extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters: []
        }

        Axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=471a3c70f2ca4042e27736410acb87c8').then((resp) => {
            let charactersFromServer = resp.data.data.results;
            console.log(resp.data.data.results);
            this.setState({
                characters: charactersFromServer
            })
        })
    }

    render(){
        return <div>
            <Link to="/comics">Comics</Link>
            <Link to="/">Home</Link>
            <h1>Estos son los personajes</h1>
            {this.state.characters.map((character, i) => <Character {...character} key={i}/>)}
        </div>
    }
}

export default Characters;