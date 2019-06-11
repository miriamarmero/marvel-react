import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ComicCharacters extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters: null,
            comics: null
        }

        this.comicId = props.match.params.id;

        Axios.get('https://gateway.marvel.com:443/v1/public/comics/' + this.comicId + '/characters?apikey=471a3c70f2ca4042e27736410acb87c8').then((resp) => {
            let characters = resp.data.data.results;
            console.log(characters);
            this.setState({
                characters
            })
        })
    }

    render(){
        if(this.state.characters){
            return <div>
                <Link to="/characters">Personajes</Link>
                <Link to="/comics">Comics</Link>
                <Link to="/">Home</Link>
                {this.state.characters.map((character, i) => <div key={i}>
                   <Link to={'/characters/' + character.id}><h2>{character.name}</h2></Link>
                </div>)}
            </div>
        }else{
            return <div>
                <h2>Cargando personajes que aparecen...</h2>
            </div>
        }
    }
}

export default ComicCharacters;