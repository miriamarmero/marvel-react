import React from 'react';
import {Link} from 'react-router-dom';

function home(){
    return <div>
        <h1>MARVEL HOME</h1>
        <Link to="/characters">Personajes</Link>
        <Link to="/comics">Comics</Link>
        <img src="https://image.redbull.com/rbcom/052/2018-04-24/28ff870a-78f4-40cc-8152-988695017fe0/0012/0/0/121/602/1024/1500/1/cronologia-certa-para-assistis-aos-filmes-da-marvel.png" alt=""/>
    </div>
}

export default home;