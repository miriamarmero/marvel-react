import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: null
        }

        this.characterId = props.match.params.id;

        Axios.get('https://gateway.marvel.com:443/v1/public/characters/' + this.characterId + '?apikey=471a3c70f2ca4042e27736410acb87c8').then((resp) => {
            let character = resp.data.data.results[0];
            console.log(character);
            this.setState({
                character
            })
        })
    }

    render(){
        if(this.state.character){
            return <div>
                <Link to="/characters">Personajes</Link>
                <Link to="/comics">Comics</Link>
                <Link to="/">Home</Link>
                <h1>{this.state.character.name}</h1>
                <img src={this.state.character.thumbnail.path + '.jpg'} alt=""/>
                <Link to={"/characters/" + this.characterId + "/comics"}>Comics en los que aparece</Link>
            </div>
        }else{
            return <div>
                <h2>Cargando personaje...</h2>
            </div>
        }
    }
}

export default Detail;