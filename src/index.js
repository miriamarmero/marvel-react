import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Characters from './components/characters';
import Detail from './components/detail';
import Comics from './components/comics';
import CharacterComic from './components/characterComic';
import DetailComic from './components/detailComic';
import ComicCharacters from './components/comicCharacters';
import home from './components/home';

const router = (
    <BrowserRouter>
        <Switch>
            <Route path="/characters" component={Characters} exact/>
            <Route path="/characters/:id" component={Detail} exact/>
            <Route path="/comics" component={Comics} exact/>
            <Route path="/characters/:id/comics" component={CharacterComic} exact/>
            <Route path="/comics/:id/characters" component={ComicCharacters} exact/>
            <Route path="/comics/:id" component={DetailComic} exact/>
            <Route path="/" component={home} exact/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
