import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class DetailComic extends Component{
    constructor(props){
        super(props);
        this.state = {
            comic: null
        }

        this.comicId = props.match.params.id;

        Axios.get('https://gateway.marvel.com:443/v1/public/comics/' + this.comicId + '?apikey=471a3c70f2ca4042e27736410acb87c8').then((resp) => {
            let comic = resp.data.data.results[0];
            console.log(comic);
            this.setState({
                comic
            })
        })
    }

    render(){
        if(this.state.comic){
            return <div>
                <Link to="/characters">Personajes</Link>
                <Link to="/comics">Comics</Link>
                <Link to="/">Home</Link>
                <h1>{this.state.comic.title}</h1>
                <img src={this.state.comic.thumbnail.path + '.jpg'} alt=""/>
                <p>{this.state.comic.description}</p>
                <Link to={"/comics/" + this.comicId + "/characters"}>Personajes que aparecen</Link>
            </div>
        }else{
            return <div>
                <h2>Cargando comic...</h2>
            </div>
        }
    }
}

export default DetailComic;