import React from 'react';
import {Link} from 'react-router-dom';

function home(){
    return <div>
        <h1>MARVEL HOME</h1>
        <Link to="/characters">Personajes</Link>
        <Link to="/comics">Comics</Link>
    </div>
}

export default home;